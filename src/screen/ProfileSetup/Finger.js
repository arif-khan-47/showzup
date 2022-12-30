
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import Dialog, { DialogContent } from 'react-native-popup-dialog';

const Finger = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.23 }}>
                <Text style={tw`text-lg m-auto mx-5 text-center text-xl`}>Add a fingerprint to make your account more secure.</Text>
            </View>
            <View style={{ flex: 0.5 }}>
               
                <Image
                    style={tw`h-50 w-50 m-auto`}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1668063870/ELO/image-removebg-preview_tmi9vh.png',
                    }}
                />
            </View>
            <View style={{ flex: 0.2 }}>
                <Text style={tw`m-auto mx-5 text-xl text-center`}>Please put your finger on the fingerprint scanner to get started.</Text>
            </View>
            <View style={{ flex: 0.17 }}>
                <View style={[styles.container, tw`my-auto flex-row`]}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <View style={[tw`bg-[#FFEDF0] py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-[#FF4D67]`}>Skip</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreen')}
                    >
                        <View style={[tw`bg-[#FF4D67] py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-white`}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Finger

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    }
})