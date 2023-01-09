import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native'
import { scale, } from 'react-native-size-matters';
import React, { useState } from 'react';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { login } from '../../http/index';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc'
import { useDispatch } from 'react-redux'
import { checkLogin } from '../../store/authReducer';


const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [valEmail, setValEmail] = useState(false);
    const [seePassword, setSeePassword] = useState(true);
    // console.log(phone);
    const dispatch = useDispatch()

    // const type = 'email';
    const type = 'phone';


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



    async function logIn() {
        // alert('clicked')

        try {
            const response = await login({ phone });
            // console.log(response.data)
            try {
                await AsyncStorage.setItem('hash', response.data.hash);
                await AsyncStorage.setItem('phone', phone);
                console.log('set to AsyncStorage')


            } catch (error) {
                console.log(error)
            }

            if (type == 'email') {
                const checkPassword = checkPasswordValidity(password)
                if (!checkPassword) {
                    // console.log('Password Validation secceed')
                } else {
                    return showMessage({
                        message: checkPassword,
                        type: "danger",
                    });
                }
            } else {
                setTimeout(() => {
                    navigation.navigate('OTP')

                }, 2000)
                return showMessage({
                    message: 'Verification code send to your phone',
                    type: "success",
                });
            }
        } catch (error) {
            console.log(error);
        }
        // try {

        // await AsyncStorage.setItem('token', response.data.token)
        // try {
        // alert(response.data.token)
        // } catch (e) {
        // console.log(e)

        // dispatch({ type: "login" })
        // dispatch(checkLogin())


        // showMessage({
        //     message: response.data.message,
        //     type: "success",
        // });
        // navigation.navigate('HomeScreen')
        // navigation.navigate('HomeStack')



        // } catch (error) {
        //     // console.log(error.response.data.message)
        //     showMessage({
        //         message: error.response.data.message,
        //         type: "danger",
        //     });
        // }

        // }
    }








    return (
        <>
            <FlashMessage position="top" />
            <StatusBar backgroundColor={'black'} barStyle="default" />
            <View style={{ height: "100%", width: '100%', backgroundColor: 'black' }}>
                {type == 'email' ?
                    <>
                        <View style={[{ height: '40%', width: '80%' }, tw`m-auto`]}>
                            <View style={tw`m-auto`}>
                                <Image
                                    style={tw`w-50 h-20 mx-auto my-auto`}
                                    source={{
                                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
                                    }}
                                />
                                <Text style={tw`text-2xl text-white text-center`}>LET'S SIGN IN</Text>
                            </View>
                        </View>


                        <ScrollView style={[{ height: '40%', width: '100%' }, tw`m-auto`]}>

                            {/* {type=='email'? */}
                            <View style={tw`my-auto`}>

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

                            </View>
                            {/* :
                    <View style={tw`my-auto`}>
                        
                    <View style={[tw`my-2 border-gray-300 border-b m-auto flex-row`, { borderColor: valEmail ? 'red' : 'gray', width: '90%' }]}>
                        <Text style={tw`text-white text-xl my-auto`}>+91</Text>
                    <TextInput
                        style={tw`w-full text-xl text-white`}
                        placeholder="Phone Number"
                        placeholderTextColor={'rgba(210, 210, 210, 0.5)'}
                        keyboardType='number-pad'
                        textContentType='telephoneNumber'
                        autoFocus={true}
                        defaultValue={email}
                        onChangeText={(newEmail) => emailValidations(newEmail)}
                        // style={styles.input}
                        // onChangeText={setPassword}
                        // value={password}
                        />
                        </View>
                        </View>
                        
                    } */}
                        </ScrollView>
                        <View style={[{ height: '20%', width: '90%' }, tw`m-auto my-2`]}>
                            <View style={tw`my-auto`}>
                                {
                                    email == '' || password == '' || valEmail == true ?
                                        <TouchableOpacity disabled onPress={logIn}>
                                            <View style={tw`bg-gray-700 rounded-full h-14`}>
                                                <Text style={tw`text-white text-2xl mx-auto my-auto`}>SIGN IN</Text>
                                            </View>
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={logIn}>
                                            <View style={tw`bg-[#FF6600] rounded-full h-14`}>
                                                <Text style={tw`text-white text-2xl mx-auto my-auto`}>SIGN IN</Text>
                                            </View>
                                        </TouchableOpacity>
                                }

                                <View style={tw`mx-auto py-2 flex-row`}>
                                    <Text style={tw`text-lg text-white`}>Don't have an account? </Text>
                                    <TouchableOpacity>
                                        <View>
                                            <Text style={[tw`text-[#FF6600] text-lg`]} onPress={() => navigation.navigate('Signup')}>Sign up</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </>
                    :
                    <>
                        <View style={[{ height: '40%', width: '80%' }, tw`m-auto`]}>
                            <View style={tw`m-auto`}>
                                <Image
                                    style={tw`w-50 h-20 mx-auto my-auto`}
                                    source={{
                                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
                                    }}
                                />
                                <Text style={tw`text-2xl text-white text-center`}>LET'S SIGN IN</Text>
                            </View>
                        </View>


                        <ScrollView style={[{ height: '40%', width: '100%' }, tw`m-auto`]}>

                            {/* {type=='email'? */}
                            <View style={tw`my-auto`}>

                                <View style={[tw`my-2 border-gray-300 border-b m-auto flex-row`, { borderColor: valEmail ? 'red' : 'gray', width: '90%' }]}>
                                    <Text style={tw`text-white text-xl my-auto`}>+91</Text>
                                    <TextInput
                                        style={tw`w-full text-xl text-white`}
                                        placeholder="Phone Number"
                                        placeholderTextColor={'rgba(210, 210, 210, 0.5)'}
                                        keyboardType='number-pad'
                                        textContentType='telephoneNumber'
                                        autoFocus={true}
                                        defaultValue={phone}
                                        onChangeText={(newPhone) => setPhone(newPhone)}
                                    // style={styles.input}
                                    // onChangeText={setPassword}
                                    // value={password}
                                    />
                                </View>
                            </View>
                            {/* :
                    
                        
                    } */}
                        </ScrollView>
                        <View style={[{ height: '20%', width: '90%' }, tw`m-auto my-2`]}>
                            <View style={tw`my-auto`}>
                                {
                                    phone.length !== 10 ?
                                        <TouchableOpacity disabled onPress={logIn}>
                                            <View style={tw`bg-gray-700 rounded-full h-14`}>
                                                <Text style={tw`text-white text-2xl mx-auto my-auto`}>SIGN IN</Text>
                                            </View>
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={logIn}>
                                            <View style={tw`bg-[#FF6600] rounded-full h-14`}>
                                                <Text style={tw`text-white text-2xl mx-auto my-auto`}>SIGN IN</Text>
                                            </View>
                                        </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </>

                }

            </View>

        </>
    )
}

export default SignIn



