import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { scale, } from 'react-native-size-matters';
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Gender = ({ navigation }) => {
    const [selected, setSelected] = useState("")
    console.log(selected)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.13 }}>
                <Text style={tw`text-lg m-auto mx-5`}>Choose your identity & help us to find accurate component for you.</Text>
            </View>
            <View style={[{ flex: 0.4 }]}>
                <View style={[tw`rounded-full ${selected === "male" ? `bg-[#FF4D67]` : `bg-gray-400`} m-auto`, styles.GenderContainer]}>
                    <TouchableOpacity style={tw`py-20`} onPress={() => setSelected("male")}>
                        <View style={tw`m-auto`}>
                            <Image
                                style={tw`h-20 w-20`}
                                source={{
                                    uri: 'https://img.icons8.com/ios-filled/500/ffffff/male.png',
                                }}
                            />
                            <Text style={tw`mx-auto text-white text-2xl`}>Male</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 0.4 }}>
                <View style={[tw`rounded-full ${selected === "female" ? `bg-[#FF4D67]` : `bg-gray-400`} m-auto`, styles.GenderContainer]}>
                    <TouchableOpacity style={tw`py-20`} onPress={() => setSelected("female")}>
                        <View style={tw`m-auto`}>
                            <Image
                                style={tw`h-20 w-20`}
                                source={{
                                    uri: 'https://img.icons8.com/ios-filled/500/ffffff/female.png',
                                }}
                            />
                            <Text style={tw`mx-auto text-white text-2xl`}>Female</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 0.17 }}>
                <View style={[styles.container, tw`my-auto flex-row`]}>
                    <TouchableOpacity onPress={() => navigation.navigate('DOB')}>
                        <View style={[tw`bg-[#FFEDF0] py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-[#FF4D67]`}>Skip</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={selected === "" ? true : false} onPress={() => navigation.navigate('DOB')}>
                        <View style={[tw`${selected === "" ? 'bg-gray-400' : 'bg-[#FF4D67]'} py-5 px-15 rounded-full`]}>
                            <Text style={tw`text-white`}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Gender

const styles = StyleSheet.create({
    GenderContainer: {
        height: scale(170),
        width: scale(170)
    },
    container: {
        justifyContent: 'space-evenly'
    }
})