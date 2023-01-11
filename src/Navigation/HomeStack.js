import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'
import React from 'react'


//Screens

import HomeScreen from '../screen/HomeScreen'
import MoviePage from '../components/Home/MoviePage';
import SearchPage from '../screen/Search/SearchPage';
import SingleMoviePage from '../screen/DetailScreen/SingleMoviePage';
import SingleMovieDetail from '../screen/DetailScreen/SingleMovieDetail';
import Settings from '../screen/MoreTab/Settings';
import HelpAndSupport from '../screen/MoreTab/HelpAndSupport';
import Player from '../screen/DetailScreen/Player';




const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerStyle:{backgroundColor:'black'}, headerTitleStyle: {color:'white'}, headerTintColor:'white', headerTitleAlign:'center' }}>

                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='MoviePage' component={MoviePage} options={{ headerShown: false, title: "Story" }} />
                <Stack.Screen name='SearchPage' component={SearchPage} options={{ headerShown: false, title: "Story" }} />
                <Stack.Screen name='SingleMovie' component={SingleMoviePage} options={{ headerShown: false, title: "Story" }} />
                <Stack.Screen name='SingleMovieDetail' component={SingleMovieDetail} options={{ headerShown: false, title: "Story" }} />




                {/* More Tab Screen */}
                <Stack.Screen name='Settings' component={Settings} options={{ headerShown: true, }} />
                <Stack.Screen name='HelpAndSupport' component={HelpAndSupport} options={{ headerShown: false, }} />
                <Stack.Screen name='Player' component={Player} options={{ headerShown: false }} />


            </Stack.Navigator>
        </>
    )
}

export default HomeStack


