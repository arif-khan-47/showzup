import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Header = () => {
    return (
        <View style={tw`my-auto flex-row justify-between mx-5`}>
            <View><Text style={tw`text-2xl font-bold text-[#FF4D67]`}>ELO</Text></View>
            <View style={tw`flex-row`}>
                <TouchableOpacity onPress={() => {console.log('Add Post Button Clicked')}}>
                <Image
                        style={tw`w-7 h-7 mx-2 my-auto`}
                        source={{
                            uri: 'https://img.icons8.com/glyph-neue/50/FF4D67/plus-2-math.png',
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {console.log('Message Button Clicked')}}>
                <Image
                        style={tw`w-7 h-7 mx-2 my-auto`}
                        source={{
                            uri: 'https://img.icons8.com/ios-filled/50/FF4D67/speech-bubble-with-dots.png',
                        }}
                    />
                    <View style={tw`absolute bg-red-200 left-6 rounded-full text-xs px-1 m-auto -mt-1`}>
                        <Text>20</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})