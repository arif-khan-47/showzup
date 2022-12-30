import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { scale, } from 'react-native-size-matters';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import tw from 'twrnc'
import { register } from '../../http/index';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// https://www.youtube.com/watch?v=vfHekEsxgRk&ab_channel=CharismaKurniawanAji

const SignUp = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conformPass, setConfirmPass] = useState("");
    const [phone, setPhone] = useState("");
    const [valEmail, setValEmail] = useState(false);
    const [seePassword, setSeePassword] = useState(true);



    const emailValidations = (newEmail) => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        setEmail(newEmail);
        if (re.test(newEmail) || regex.test(newEmail)) {
            setValEmail(false);
        } else {
            setValEmail(true);
        }
    };


    const checkPasswordValidity = value => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            return 'Password must not contain Whitespaces.';
        }

        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
            return 'Password must have at least one Uppercase Character.';
        }

        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
            return 'Password must have at least one Lowercase Character.';
        }

        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return 'Password must contain at least one Digit Number.';
        }

        const isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(value)) {
            return 'Password must be 8-16 Characters Long.';
        }

        // const isContainsSymbol =
        //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        // if (!isContainsSymbol.test(value)) {
        //   return 'Password must contain at least one Special Symbol.';
        // }

        return null;
    };



    async function signIn() {

        const checkPassword = checkPasswordValidity(password)
        if (!checkPassword) {
            console.log('Password Validation secceed')
        } else {
            return showMessage({
                message: checkPassword,
                type: "danger",
            });
        }
        try {

            const response = await register({ email, password });
            await AsyncStorage.setItem('token', response.data.token)
            try {
                // console.log(response.data.token)
            } catch (e) {
                console.log(e)
            }
            // console.log(response.data.token)
            showMessage({
                message: response.data.message,
                type: "success",
            });
            navigation.navigate('Interest')


        } catch (error) {
            // console.log(error.response.data)
            showMessage({
                message: "something wrong",
                type: "danger",
            });
        }

    }










    // const [checked, setChecked] = useState(false);
    return (
        <>
            <FlashMessage position="top" />
            <StatusBar backgroundColor={'black'} barStyle="default" />
            <View style={{ height: "100%", width: '100%', backgroundColor: 'black' }}>
                <View style={[{ height: '25%', width: '80%' }, tw`m-auto`]}>
                    <View style={tw`m-auto`}>
                        <Image
                            style={tw`w-50 h-20 mx-auto my-auto`}
                            source={{
                                uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
                            }}
                        />
                        <Text style={tw`text-2xl text-white text-center`}>CREATE ACCOUNT</Text>
                    </View>
                </View>


                <ScrollView style={[{ height: '60%', width: '100%' }, tw`m-auto`]}>
                    <View style={[tw`m-auto border-2 border-[#fff] rounded-full p-1 mb-5 `]}>
                        <TouchableOpacity>
                            <Image
                                style={tw`h-15 w-15`}
                                source={{
                                    uri: null || 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672320074/showsup/Vector_a8ykvs.png',
                                }}
                            />
                            <View>
                                <Image
                                    style={tw`h-6 w-6 absolute ml-13 -mt-5 bg-white rounded-lg`}
                                    source={{
                                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672336778/showsup/111_j18yvb.png'
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[tw`my-2 border-gray-300 border-b m-auto`, { borderColor: 'gray', width: '90%' }]}>
                        <TextInput
                            style={tw`w-full text-xl text-white`}
                            placeholder="Name"
                            placeholderTextColor={'white'}
                            keyboardType='default'
                            // autoFocus={true}
                            defaultValue={name}
                            onChangeText={(newName) => setName(newName)}
                        // style={styles.input}
                        // onChangeText={setPassword}
                        // value={password}
                        />
                    </View>
                    <View style={[tw`my-2 border-gray-300 border-b m-auto`, { borderColor: valEmail ? 'red' : 'gray', width: '90%' }]}>
                        <TextInput
                            style={tw`w-full text-xl text-white`}
                            placeholder="Email"
                            placeholderTextColor={'white'}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            autoFocus={true}
                            defaultValue={email}
                            onChangeText={(newEmail) => emailValidations(newEmail)}
                        // style={styles.input}
                        // onChangeText={setPassword}
                        // value={password}
                        />
                    </View>
                    <View style={[tw`my-2 border-gray-300 border-b m-auto`, { borderColor: 'gray', width: '90%' }]}>
                        <TextInput
                            style={tw`w-full text-xl text-white`}
                            placeholder="Phone Number"
                            placeholderTextColor={'white'}
                            keyboardType='numeric'
                            textContentType='telephoneNumber'
                            // autoFocus={true}
                            defaultValue={phone}
                            onChangeText={(newPhone) => setPhone(newPhone)}
                        // style={styles.input}
                        // onChangeText={setPassword}
                        // value={password}
                        />
                    </View>
                    <View style={[tw`flex-row my-2 border-gray-300 border-b m-auto`, { position: 'relative', alignItems: 'center', borderColor: 'gray', width: '90%' }]}>
                        <TextInput
                            style={tw`w-full text-xl text-white`}
                            placeholder="Password"
                            placeholderTextColor={'white'}
                            secureTextEntry={seePassword}
                            value={password}
                            onChangeText={(newPass) => setPassword(newPass)}
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        // style={styles.input}
                        // onChangeText={setPassword}
                        // value={password}
                        />
                        <TouchableOpacity onPress={() => setSeePassword(!seePassword)} style={[{ position: 'absolute', right: 0, paddingRight: 10 }]}>
                            <Ionicons name={seePassword ? 'eye' : 'eye-off'} size={23} color={'white'} />
                        </TouchableOpacity>
                    </View>
                    <View style={[tw`flex-row my-2 border-gray-300 border-b m-auto`, { position: 'relative', alignItems: 'center', borderColor: 'gray', width: '90%' }]}>
                        <TextInput
                            style={tw`w-full text-xl text-white`}
                            placeholder="Confirm Password"
                            placeholderTextColor={'white'}
                            secureTextEntry={seePassword}
                            value={conformPass}
                            onChangeText={(newPass) => setConfirmPass(newPass)}
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        // style={styles.input}
                        // onChangeText={setPassword}
                        // value={password}
                        />
                        <TouchableOpacity onPress={() => setSeePassword(!seePassword)} style={[{ position: 'absolute', right: 0, paddingRight: 10 }]}>
                            <Ionicons name={seePassword ? 'eye' : 'eye-off'} size={23} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={[{ height: '15%', width: '90%' }, tw`m-auto my-2`]}>
                    <View style={tw`my-auto`}>
                        {
                            email == '' || password == '' || conformPass == '' || valEmail == true ?
                                <TouchableOpacity disabled onPress={signIn}>
                                    <View style={tw`bg-gray-700 rounded-full h-14`}>
                                        <Text style={tw`text-white text-2xl mx-auto my-auto`}>Sign up</Text>
                                    </View>
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={signIn}>
                                    <View style={tw`bg-[#FF6600] rounded-full h-14`}>
                                        <Text style={tw`text-white text-2xl mx-auto my-auto`}>Sign up</Text>
                                    </View>
                                </TouchableOpacity>
                        }

                    </View>
                </View>

            </View>




        </>
    )
}

export default SignUp



const style = StyleSheet.create({
})

