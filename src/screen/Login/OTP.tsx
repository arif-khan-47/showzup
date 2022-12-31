import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import OtpInput from '../../components/ProfileSetup/OtpInput'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { green100 } from 'react-native-paper/lib/typescript/styles/colors';
import { ScrollView } from 'react-native-gesture-handler';







const OTP = ({ navigation }) => {
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    console.log(value)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={{width:'100%', height:'100%', backgroundColor:'black'}}>
            
            <ScrollView style={[{ height:'80%', width:'100%'}, tw`m-auto`]}>
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

            <View style={[{ height:"20%",}, tw`my-auto`]}>
                <TouchableOpacity style={tw`my-auto`} onPress={() => navigation.navigate('NewPswd')}>
                    <View style={tw`bg-[#FF6600] w-[90%] m-auto rounded-full h-12`}>
                        <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>VERIFY</Text>
                    </View>
                </TouchableOpacity>
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
        color:'white',
        borderBottomWidth: 2,
        borderColor: '#C9C9C9',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#FF6600',
    },

});