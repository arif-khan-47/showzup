
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const ForgetPswdHero = ({navigation}) => {
  return (
    <View style={{flex:1}}>

        <View style={{flex:0.4}}>
        <Image
                    style={tw`w-50 h-50 mx-2 m-auto`}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1668069635/ELO/image-removebg-preview_1_ovtk0e.png',
                    }}
                />
        </View>
          <Text style={tw`text-lg mx-5 leading-tight my-1`}>Select which contact details should we use to reset your password</Text>
        <View style={[{flex:0.43}]}>
          <View style={tw`my-auto`}>
          <TouchableOpacity><View style={tw`border-[#FF4D67] flex-row border-2 rounded-3xl p-1 bg-white mx-5 mb-2`}>
            <View>
              <Image
                    style={tw`w-8 h-8 mx-6 my-6`}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1668072092/ELO/image-removebg-preview_bchpdu.png',
                    }}
                />
            </View>
            <View style={tw`my-auto`}>
              <Text style={tw``}>via SMS:</Text>
              <Text style={tw`text-black text-lg`}>+91******797</Text>
            </View>

          </View>
          </TouchableOpacity>
          <TouchableOpacity><View style={tw`border-[#FF4D67] flex-row border-2 rounded-3xl p-1 bg-white mx-5 mb-1`}>
            <View>
              <Image
                    style={tw`w-8 h-8 mx-6 my-6`}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1668072143/ELO/image-removebg-preview_2_b3jbgj.png',
                    }}
                />
            </View>
            <View style={tw`my-auto`}>
              <Text style={tw``}>via Email:</Text>
              <Text style={tw`text-black text-lg`}>sample****@gmail.com</Text>
            </View>

          </View>
          </TouchableOpacity>
          </View>
        </View>
        <View style={[{ flex: 0.17}, tw`absolute left-0 right-0 bottom-0`]}>
                <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
                    <View style={tw`bg-[#FF4D67] mx-4 my-5 rounded-full h-12`}>
                        <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View> 
    </View>
  )
}

export default ForgetPswdHero

const styles = StyleSheet.create({})