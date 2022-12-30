import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const NextSkipButton = (props, {navigation}) => {
    return (
        <View style={[styles.container, tw`my-auto flex-row`]}>
            <TouchableOpacity  onPress={()=>navigation.navigate(props.skipTo)}>
                <View style={[tw`bg-[#FFEDF0] py-5 px-15 rounded-full`]}>
                    <Text style={tw`text-[#FF4D67]`}>Skip</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>navigation.navigate(props.nextTo)}>
                <View style={[tw`bg-[#FF4D67] py-5 px-15 rounded-full`]}>
                    <Text style={tw`text-white`}>Continue</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NextSkipButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    }
})