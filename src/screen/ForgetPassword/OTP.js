import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import OtpInput from '../../components/ProfileSetup/OtpInput'

const OTP = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <View style={{ flex: 0.23 }}>
                <Text style={tw`text-lg m-auto text-black mx-5 text-center`}>Code has been sent to +91********76</Text>
            </View>
            <View style={[{ flex: 0.2 }, tw`mx-5`]}>
                {/* <TextInput
                 keyboardType = 'numeric'
                style={tw`my-auto border-b-2 border-[#FF4D67] mx-20 text-center text-2xl`} /> */}
                {/* <View style={} > */}

                <OtpInput />
                {/* </View> */}
            </View>
            <View style={{ flex: 0.1 }}>
                <Text style={tw`text-lg m-auto text-black mx-5 text-center mt-2`}>Resend code in <Text style={tw`text-[#FF4D67]`}>55</Text> s</Text>
            </View>

        <View style={[{ flex: 0.17}, tw`absolute left-0 right-0 bottom-0`]}>
                <TouchableOpacity onPress={() => navigation.navigate('NewPswd')}>
                    <View style={tw`bg-[#FF4D67] mx-4 my-5 rounded-full h-12`}>
                        <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>Verify</Text>
                    </View>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default OTP

const styles = StyleSheet.create({})