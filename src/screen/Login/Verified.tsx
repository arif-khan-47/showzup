import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux'
import { checkLogin } from '../../Redux/Slice/authReducer';




const Verified = () => {
    const dispatch = useDispatch()


    function Continue() {
        try {

            AsyncStorage.removeItem('hash')
            // console.log('done')
            dispatch(checkLogin())



        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>

            <View style={[{ height: '80%', width: '100%' }, tw`m-auto`]}>
                <View style={tw`my-auto`}>
                    <Image
                        style={tw`w-50 h-50 m-auto`}
                        source={{
                            // uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672400898/showsup/plugins_email-verification-plugin_rh8akt.png',
                            uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672461495/showsup/Eo_circle_orange_checkmark.svg_mqofyk.png',

                        }}
                    />
                    <Text style={tw`text-2xl m-auto text-white text-center mt-5`}>VERIFICATION COMPLETED</Text>


                </View>

            </View>

            <View style={[{ height: "20%", }, tw`my-auto`]}>
                <TouchableOpacity style={tw`my-auto`} onPress={Continue}>
                    <View style={tw`bg-[#FF6600] w-[90%] m-auto rounded-full h-12`}>
                        <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>CONTINUE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Verified

const styles = StyleSheet.create({

    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        color: 'white',
        borderBottomWidth: 2,
        borderColor: '#C9C9C9',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#FF6600',
    },

});