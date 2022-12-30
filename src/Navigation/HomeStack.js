import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'
import React from 'react'


//Screens

import StatusView from '../components/Home/StatusView'
import FriendProfile from '../screen/FriendsPage/FriendProfile'
import Profile from '../screen/ProfileSetup/Profile'
import HomeScreen from '../screen/HomeScreen'




const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerStyle: tw`bg-transparent dark:bg-black shadow-none`, headerTitleStyle: tw`font-bold text-2xl` }}>

                <Stack.Screen name='Status' component={StatusView} options={{ headerShown: false, title: "Story" }} />
                <Stack.Screen name='FriendProfile' component={FriendProfile} options={{ headerShown: false }} />
                {/* <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} /> */}
                <Stack.Screen name='EditProfile' component={Profile} options={{ headerShown: true }} />

                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />

            </Stack.Navigator>
        </>
    )
}

export default HomeStack


