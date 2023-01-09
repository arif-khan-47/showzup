import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { ScrollView } from 'react-native'
import InterestMenu from '../../components/ProfileSetup/InterestMenu'
import NextSkipButton from '../../components/ProfileSetup/NextSkipButton'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Interest = ({ navigation }) => {
    

    useEffect( async () => {
        try {
          const value = await AsyncStorage.getItem('token')
        //   alert(value)
        } catch(e) {
          alert(e)
        }
    }, [])
    
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.13 }}>
                <Text style={tw`text-lg m-auto mx-5`}>Choose your interest and get the best video recommendations.</Text>
            </View>
            <View style={{ flex: 0.7 }}>
                <InterestMenu />
            </View>
            <View style={{ flex: 0.17 }}>
                {/* <View style={[styles.container, tw`my-auto flex-row`]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Gender')}>
                        <View style={[tw`bg-[#FFEDF0] py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-[#FF4D67]`}>Skip</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Gender')}>
                        <View style={[tw`bg-[#FF4D67] py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-white`}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
                {/* <TouchableOpacity onPress={() => navigation.navigate('Gender')} style={[styles.container, tw`my-auto`]}> */}
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={[styles.container, tw`my-auto`]}>
                    <View style={tw`bg-[#FF4D67] mx-4 my-5 rounded-full h-12`}>
                        <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Interest

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    }
})