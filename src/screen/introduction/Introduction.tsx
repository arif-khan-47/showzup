import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import tw from 'twrnc'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { checkLogin, logout } from '../../store/authReducer'

const Introduction = ({ navigation }) => {
    const dispatch = useDispatch()

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                // console.log("ye value hai..",value);
                // dispatch({type:"login"})
                // dispatch(checkLogin())


            } else {
                // dispatch(logout())
                navigation.navigate('LoginHero');
                // console.log("token not set")
                // dispatch({type:"logout"})
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const time = setTimeout(() => {
        retrieveData();
        }, 4000)
        return () => {
            clearTimeout(time);
        }
    }, [])



    // const [timePassed, setTimePassed] = useState(false);
    // setTimeout(function () {
    //     // retrieveData();
    //     setTimePassed(true);
    // }, 5000);

    // if (!timePassed) {

    return (
        <View style={tw`bg-black h-full w-full`}>
            <StatusBar backgroundColor='black' barStyle={'default'}/>
            
            <View style={tw`m-auto`}>
                <Image
                    style={[tw`w-80 h-30`]}
                    source={{
                        uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
                    }}
                />
            </View>
        </View>
    )
}
// navigation.navigate('LoginHero');
// return null;
// }

export default Introduction