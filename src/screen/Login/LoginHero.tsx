import { View, Text, TouchableOpacity, StyleSheet, Button, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Image } from 'react-native'

const LoginHero = ({ }) => {
    return (
        <View style={[{ height: '100%', width: '100%', backgroundColor: 'black' }, tw`m-auto`]}>
            <StatusBar backgroundColor={'black'} barStyle='default' />
            <View style={[tw`m-auto`, { width: '90%', height: '55%' }]}>
                <Image
                    style={tw`w-50 h-20 mx-auto my-auto`}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
                    }}
                />
            </View>

            <View style={[tw`m-auto`, { width: '90%', height: '35%' }]}>

                <TouchableOpacity
                // onPress={() => navigation.navigate('Login')}
                >
                    <View style={tw`bg-[#FF6600] rounded-full h-14 my-4`}>
                        <Text style={[tw`text-white text-xl mx-auto my-auto`]}>SIGN IN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={() => navigation.navigate('Login')}
                >
                    <View style={tw`bg-white rounded-full h-14 my-4`}>
                        <Text style={[tw`text-black text-xl mx-auto my-auto`]}>SIGN UP</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginHero


