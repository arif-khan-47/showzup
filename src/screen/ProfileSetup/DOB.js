
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
const DOB = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    console.log(date)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.13 }}>
                <Text style={tw`text-lg m-auto mx-5`}>Your birthday will not be shown to the public.</Text>
            </View>
            <View style={{ flex: 0.4 }}>
                <Image
                    style={tw`h-50 w-50 m-auto`}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1667996246/ELO/image-removebg-preview_lwvzdf.png',
                    }}
                />
            </View>

            <View style={{ flex: 0.4 }}>
                <DatePicker style={tw`bg-transparent m-auto m-auto`} date={date} mode='date' androidVariant='nativeAndroid' textColor='#FF4D67' onDateChange={setDate} />
            </View>
            <View style={{ flex: 0.17 }}>
                {/* <NextSkipButton skipTo='Gender' nextTo='Gender'/> */}
                <View style={[styles.container, tw`my-auto flex-row`]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <View style={[tw`bg-[#FFEDF0] py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-[#FF4D67]`}>Skip</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} disabled={date === Date.now() ? true : false}>
                        <View style={[tw`${date === Date.now() ? 'bg-gray-400' : 'bg-[#FF4D67]'} py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-white`}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DOB

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly'
    }
})