import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { scale, } from 'react-native-size-matters';


const OtpInput = () => {
    const [pin1, setPin1] = useState(null)
    const [pin2, setPin2] = useState(null)
    const [pin3, setPin3] = useState(null)
    const [pin4, setPin4] = useState(null)

    const pin1Ref = useRef("")
    const pin2Ref = useRef("")
    const pin3Ref = useRef("")
    const pin4Ref = useRef("")


    return (
        <View style={styles.conainer}>
            <View style={styles.TextInputView}>
                <TextInput
                ref={pin1Ref}
                    style={styles.TextInputText}
                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={(pin1) => {
                        setPin1(pin1);
                        if (pin1 !== "") {
                            pin2Ref.current.focus();
                        }
                    }}
                    
                />
            </View>

            <View style={styles.TextInputView}>
                <TextInput
                   ref={pin2Ref}
                   style={styles.TextInputText}
                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={(pin2) => {
                        setPin2(pin2);
                        if (pin2 !== "") {
                            pin3Ref.current.focus();
                        }
                    }}
                />
            </View>

            <View style={styles.TextInputView}>
                <TextInput
                   ref={pin3Ref}
                   style={styles.TextInputText}
                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={(pin3) => {
                        setPin3(pin3);
                        if (pin3 !== "") {
                            pin4Ref.current.focus();
                        }
                    }}
                />
            </View>

            <View style={styles.TextInputView}>
                <TextInput
                   ref={pin4Ref}
                   style={styles.TextInputText}
                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={(pin4) => {
                        setPin4(pin4)
                    }}
                />
            </View>
        </View>
    )
}

export default OtpInput

const styles = StyleSheet.create({
    conainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    TextInputView: {
        borderBottomWidth: scale(1),
        borderColor:'#FF4D67',
        // borderWidth:1,
        width: scale(40),
        justifyContent: 'center',
        alignItems: 'center'

    },
    TextInputText: {
        fontSize: scale(30)
    }
})