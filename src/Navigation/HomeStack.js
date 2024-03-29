import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'
import React from 'react'


//Screens

import HomeScreen from '../screen/HomeScreen'
import SearchPage from '../screen/Search/SearchPage';
import SingleMoviePage from '../screen/DetailScreen/SingleMoviePage';
import SingleMovieDetail from '../screen/DetailScreen/SingleMovieDetail';
import Settings from '../screen/MoreTab/Settings';
import HelpAndSupport from '../screen/MoreTab/HelpAndSupport';
import Player from '../screen/DetailScreen/Player';
import About from '../screen/MoreTab/About';
import Privacy from '../screen/MoreTab/Privacy';
import TermConditions from '../screen/MoreTab/TermConditions';
import Subscription from '../screen/MoreTab/Subscription';
import MySubscription from '../screen/MoreTab/MySubscription';
import CancelSubscription from '../screen/MoreTab/CancelSubscription';
import Notifications from '../screen/MoreTab/Notifications';
import Profile from '../screen/MoreTab/Profile';




const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerStyle:{backgroundColor:'black'}, headerTitleStyle: {color:'white'}, headerTintColor:'white', headerTitleAlign:'center' }}>

                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SearchPage' component={SearchPage} options={{ headerShown: false, title: "Story" }} />
                <Stack.Screen name='SingleMovie' component={SingleMoviePage} options={{ headerShown: false, title: "Story" }} />
                <Stack.Screen name='SingleMovieDetail' component={SingleMovieDetail} options={{ headerShown: false, title: "Story" }} />
                <Stack.Screen name='Player' component={Player} options={{ headerShown: false }} />




                {/* More Tab Screen */}
                <Stack.Screen name='Settings' component={Settings} options={{ headerShown: true, }} />
                <Stack.Screen name='HelpAndSupport' component={HelpAndSupport} options={{ headerShown: false, }} />
                <Stack.Screen name='About' component={About} options={{ headerShown: false, }} />
                <Stack.Screen name='Privecy' component={Privacy} options={{ headerShown: false, }} />
                <Stack.Screen name='TermConditions' component={TermConditions} options={{ headerShown: false, }} />
                <Stack.Screen name='Subscription' component={Subscription} options={{ headerShown: false, }} />
                <Stack.Screen name='MySubscription' component={MySubscription} options={{ headerShown: false, }} />
                <Stack.Screen name='CancelSubscription' component={CancelSubscription} options={{ headerShown: false, }} />
                <Stack.Screen name='Notifications' component={Notifications} options={{ headerShown: false, }} />
                <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false, }} />
               
            </Stack.Navigator>
        </>
    )
}

export default HomeStack


