import React, { useState, useEffect } from "react";
import {
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";

interface MediaControlsProps {
    children: React.ReactNode;
    showOnStart?: boolean;
    fadeOutDelay?: number;
    buffering?: boolean;
    containerStyle?: object;
    toolbarStyle?: object;
}

const MediaControls = ({
    children,
    showOnStart = true,
    fadeOutDelay = 6000,
    buffering = false,
    containerStyle: customContainerStyle = {},
    toolbarStyle: customToolbarStyle = {},
}: MediaControlsProps) => {
    const { initialOpacity, initialIsVisible } = (() => {
        if (showOnStart) {
            return {
                initialOpacity: 1,
                initialIsVisible: true,
            };
        }
        return {
            initialOpacity: 0,
            initialIsVisible: false,
        };
    })();

    const [opacity] = useState(new Animated.Value(initialOpacity));
    const [isVisible, setIsVisible] = useState(initialIsVisible);

    useEffect(() => {
        fadeOutControls(fadeOutDelay);
    }, []);

    // if video is buffering, show the controls
    useEffect(() => {
        if (buffering) {
            setIsVisible(true);
            fadeOutControls(fadeOutDelay);
        }
    }, [buffering]);

    const fadeOutControls = (delay = 0) => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            delay,
            useNativeDriver: false,
        }).start(result => {
            /* I noticed that the callback is called twice, when it is invoked and when it completely finished
            This prevents some flickering */
            if (result.finished) {
                setIsVisible(false);
            }
        });
    };

    const fadeInControls = (loop = true) => {
        setIsVisible(true);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: 0,
            useNativeDriver: false,
        }).start(() => {
            if (loop) {
                fadeOutControls(fadeOutDelay);
            }
        });
    };

    const toggleControls = () => {
        // value is the last value of the animation when stop animation was called.
        // As this is an opacity effect, I (Charlie) used the value (0 or 1) as a boolean
        opacity.stopAnimation((value) => {
            setIsVisible(!!value);
            return value ? fadeOutControls() : fadeInControls();
        });
    };
    
    return (
        <TouchableWithoutFeedback accessible={false} onPress={toggleControls}>
            <Animated.View
                style={[styles.container, customContainerStyle, { opacity }]}
            >
                {isVisible && (
                    <View style={[styles.container, customContainerStyle]}>
                        <View
                            style={[
                                styles.controlsRow,
                                styles.toolbarRow,
                                customToolbarStyle
                            ]}
                        >
                            {children}
                        </View>
                    </View>
                )}
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

export default MediaControls;