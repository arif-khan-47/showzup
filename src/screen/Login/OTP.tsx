import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { green100 } from 'react-native-paper/lib/typescript/styles/colors';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verifyOTP } from '../../http';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";





const OTP = ({ navigation }) => {

    const [hash, setHash] = useState('')
    const [value, setValue] = useState('');
    const [phone, setPhone] = useState('');

    AsyncStorage.getItem('hash')
        .then(val => {
            setHash(val);
        })
        .catch(error => {
            console.error(error);
        });
    AsyncStorage.getItem('phone')
        .then(val => {
            setPhone(val);
        })
        .catch(error => {
           console.log(error);
        });


    console.log(hash)

    async function verifyOtp() {
        try {
            const response = await verifyOTP({ hash, phone, otp: value });
            console.log(response.data.data.accessToken)
            AsyncStorage.setItem('accessToken', response.data.data.accessToken)
            AsyncStorage.setItem('refreshToken', response.data.data.refreshToken)
            navigation.navigate('Verified')
        } catch (error) {
            console.log(error);
            showMessage({
                message: "You entered wrong OTP.",
                type: "danger",
            });
        }
    }








    const CELL_COUNT = 4;
    console.log(value)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
            <FlashMessage position="top" />

            <ScrollView style={[{ height: '80%', width: '100%' }, tw`m-auto`]}>
                <View style={tw`my-auto`}>
                    <Image
                        style={tw`w-30 h-30 m-auto mt-25`}
                        source={{
                            // uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672400898/showsup/plugins_email-verification-plugin_rh8akt.png',
                            uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672403248/showsup/sms-alert-icon-15_s3vm3p.png',

                        }}
                    />
                    <Text style={tw`text-2xl m-auto text-white text-center mt-5`}>OTP VERIFICATION</Text>
                    <Text style={tw`text-lg m-auto text-white text-center mt-2 mb-20`}>Enter 4-digit OTP sent to your number.</Text>


                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={tw`mx-10`}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell,]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                    {/* <OtpInput /> */}
                    {/* <Text style={tw`text-lg m-auto text-white text-center mt-5`}>Resend code in <Text style={tw`text-[#FF6600]`}>55</Text> s</Text> */}
                </View>

            </ScrollView>

            <View style={[{ height: "20%", }, tw`my-auto`]}>
                {value.length !== CELL_COUNT ?
                    <TouchableOpacity disabled style={tw`my-auto`} onPress={() => navigation.navigate('Verified')}>
                        <View style={tw`bg-gray-800 w-[90%] m-auto rounded-full h-12`}>
                            <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>VERIFY</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={tw`my-auto`} onPress={verifyOtp}>
                        <View style={tw`bg-[#FF6600] w-[90%] m-auto rounded-full h-12`}>
                            <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>VERIFY</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default OTP

const styles = StyleSheet.create({

    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        color: 'white',
        borderBottomWidth: 2,
        borderColor: '#C9C9C9',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#FF6600',
    },

});