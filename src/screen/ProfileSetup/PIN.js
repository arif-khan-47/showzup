
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { TextInput } from 'react-native-gesture-handler'

const PIN = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.23 }}>
                <Text style={tw`text-lg m-auto mx-5 text-center`}>Add a PIN number to make your account more secure.</Text>
            </View>
            <View style={{ flex: 0.2 }}>
                <TextInput
                 keyboardType = 'numeric'
                 secureTextEntry={true}
                style={tw`my-auto border-b-2 border-[#FF4D67] mx-20 text-center text-2xl`} />
            </View>

            <View style={[{ flex: 0.17}, tw`absolute left-0 right-0 bottom-0`]}>
                <TouchableOpacity onPress={() => navigation.navigate('Finger')}>
                    <View style={tw`bg-[#FF4D67] mx-4 my-5 rounded-full h-12`}>
                        <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PIN

const styles = StyleSheet.create({})