import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'
import React from 'react'



//Screens
import Introduction from '../screen/introduction/Introduction'
import LoginHero from '../screen/Login/LoginHero'
import SignUp from '../screen/Login/SignUp';
import SignIn from '../screen/Login/SignIn';
import Interest from '../screen/ProfileSetup/Interest'
import Gender from '../screen/ProfileSetup/Gender'
import DOB from '../screen/ProfileSetup/DOB'
import Profile from '../screen/ProfileSetup/Profile'
import PIN from '../screen/ProfileSetup/PIN'
import Finger from '../screen/ProfileSetup/Finger'
import ForgetPswdHero from '../screen/ForgetPassword/ForgetPswdHero'
import OTP from '../screen/Login/OTP'
import NewPswd from '../screen/ForgetPassword/NewPswd'




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
                <Stack.Screen name='Interest' component={Interest} options={{ headerShown: true, title: "Choose Your Interest" }} />

                {/* Connect to Backend */}
                <Stack.Screen name='Gender' component={Gender} options={{ headerShown: true, title: "Tell Us About Yourself" }} />

                <Stack.Screen name='DOB' component={DOB} options={{ headerShown: true, title: "When is Your Birthday?" }} />
                {/* Connect to Backend & adding logic*/}
                <Stack.Screen name='Profile' component={Profile} options={{ headerShown: true, title: "Fill Your Profile" }} />
                <Stack.Screen name='PIN' component={PIN} options={{ headerShown: true, title: "Create New PIN" }} />
                <Stack.Screen name='Finger' component={Finger} options={{ headerShown: true, title: "Set Your Fingerprint" }} />
                <Stack.Screen name='ForgetPswdHero' component={ForgetPswdHero} options={{ headerShown: true, title: "Forget Password" }} />
                <Stack.Screen name='OTP' component={OTP} options={{ headerShown: false, title: "Forget Password" }} />
                <Stack.Screen name='NewPswd' component={NewPswd} options={{ headerShown: true, title: "Create New Password" }} />

            </Stack.Navigator>
        </>
    )
}

export default AuthStack


