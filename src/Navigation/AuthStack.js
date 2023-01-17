import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'
import React from 'react'



//Screens
import Introduction from '../screen/introduction/Introduction'
import LoginHero from '../screen/Login/LoginHero'
import SignUp from '../screen/Login/SignUp';
import SignIn from '../screen/Login/SignIn';
import OTP from '../screen/Login/OTP'
import Verified from '../screen/Login/Verified'




const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerStyle: tw`bg-transparent dark:bg-black shadow-none`, headerTitleStyle: tw`font-bold text-2xl` }}>
                {/* Splash Screen  */}
                <Stack.Screen name='Splash' component={Introduction} options={{ headerShown: false }} />

                {/*Login and sign up pages*/}
                <Stack.Screen name='LoginHero' component={LoginHero} options={{ headerShown: false }} />
                <Stack.Screen name='Signin' component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name='OTP' component={OTP} options={{ headerShown: false, title: "Forget Password" }} />
                <Stack.Screen name='Verified' component={Verified} options={{ headerShown: false, title: "Forget Password" }} />
            </Stack.Navigator>
        </>
    )
}

export default AuthStack


