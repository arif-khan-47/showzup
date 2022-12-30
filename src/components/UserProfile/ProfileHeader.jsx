import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const ProfileHeader = ({username, onPress}) => {
    return (
        <View style={tw`my-auto flex-row justify-between mx-5`}>
            <View><Text style={tw`text-2xl text-[#FF4D67]`}>{username}</Text></View>
            <View style={tw`flex-row`}>
                <TouchableOpacity onPress={() => {console.log('Add Post Button Clicked')}}>
                <Image
                        style={tw`w-7 h-7 mx-2 my-auto`}
                        source={{
                            uri: 'https://img.icons8.com/glyph-neue/100/FF4D67/plus-2-math.png',
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                <Image
                        style={tw`w-8 h-8 mx-2 my-auto`}
                        source={{
                            uri: 'https://img.icons8.com/sf-black/512/FF4D67/menu.png',
                        }}
                    />
                    {/* <View style={tw`absolute bg-red-200 left-6 rounded-full text-xs px-1 m-auto -mt-1`}>
                        <Text>20</Text>
                    </View> */}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({})