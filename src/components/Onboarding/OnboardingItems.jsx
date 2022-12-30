import { View, Text, Image, useWindowDimensions, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { scale,} from 'react-native-size-matters';
import React from 'react'
import tw from 'twrnc'
import NextButton from './NextButton';
import Pagination from './Pagination';


const Wheight = Dimensions.get('screen').height - StatusBar.length;
export default OnboardingItems = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[style.container, { width }]}>
            <Image
                style={[style.image, { width, resizeMode: 'contain'}]}
                source={{
                    uri: item.image
                }}
            />

            <View style={{ flex: 0.4 }}>
                <Text style={[style.title, tw`text-4xl text-black mt-3 mx-5`]}>{item.title}</Text>
            </View>
        </View>
    );
};



const style = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        backgroundColor: 'white',
        height: Wheight,
    },
    image: {
        flex: 0.4,
        justifyContent: "center",
        marginTop:scale(-40)

    },
    title: {
        fontWeight: "700",
        textAlign: "center",
        // marginTop:scale(10)
    }
})