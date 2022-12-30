import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Checkbox } from 'react-native-paper';


const NewPswd = ({navigation}) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.43 }}>
                <Image
                    style={tw`w-50 h-50 mx-2 m-auto`}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1668073669/ELO/image-removebg-preview_jmcohe.png',
                    }}
                />
            </View>

            <View style={{ flex: 0.1 }}>
                <Text style={tw`text-xl mx-5 my-auto text-black`}>Create Your New Password</Text>
            </View>
            <View style={[{ flex: 0.1 }]}>
                <View style={tw`bg-gray-200 mx-5 my-auto flex-row rounded-lg border-gray-300 border`}>
                    <Image
                        style={tw`w-5 h-5 mx-2 my-auto`}
                        source={{
                            uri: 'https://img.icons8.com/material-rounded/24/null/lock--v1.png',
                        }}
                    />
                    <TextInput
                        style={tw`w-full`}
                        placeholder="New Password"
                        secureTextEntry={true}
                        autoFocus={true}
                    // style={styles.input}
                    // onChangeText={setPassword}
                    // value={password}
                    />
                    {/* <Image
                    style={tw`w-5 h-5 mx-2 my-auto`}
                    source={{
                        uri: 'https://img.icons8.com/material-rounded/24/null/lock--v1.png',
                    }}
                /> */}
                </View>
            </View>
            <View style={{ flex: 0.1 }}>
                <View style={tw`bg-gray-200 mx-5 my-auto flex-row rounded-lg border-gray-300 border`}>
                    <Image
                        style={tw`w-5 h-5 mx-2 my-auto`}
                        source={{
                            uri: 'https://img.icons8.com/material-rounded/24/null/lock--v1.png',
                        }}
                    />
                    <TextInput
                        style={tw`w-full`}
                        placeholder="Confirm New Password"
                        secureTextEntry={true}
                    // style={styles.input}
                    // onChangeText={setPassword}
                    // value={password}
                    />
                    {/* <Image
                    style={tw`w-5 h-5 mx-2 my-auto`}
                    source={{
                        uri: 'https://img.icons8.com/material-rounded/24/null/lock--v1.png',
                    }}
                /> */}
                </View>
            </View>
            <View style={[{ flex: 0.1 }]}>
                <View style={tw`flex-row m-auto`}>
                    <Checkbox
                    style={tw`my-auto`}
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color={'#FF4D67'}
                    uncheckColor={'#FF4D67'}
                />
                <Text style={tw`my-auto`}>Remember me</Text>
                </View>
            </View>
            <View style={[{ flex: 0.17 }, tw`absolute left-0 right-0 bottom-0`]}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <View style={tw`bg-[#FF4D67] mx-4 my-5 rounded-full h-12`}>
                        <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewPswd

const styles = StyleSheet.create({})