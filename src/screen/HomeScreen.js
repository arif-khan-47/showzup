import React from 'react'
import tw from 'twrnc'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import Search from './HomeScreenTabs/Search';
import Reel from './HomeScreenTabs/Reel';
import Notification from './HomeScreenTabs/Notification';
import UserProfile from './HomeScreenTabs/UserProfile';
import HomeTab from './HomeScreenTabs/Home';
import { Text } from 'react-native';
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarStyle: tw`bg-black py-3 h-17`,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FF6600',
        tabBarInactiveTintColor: 'white',
        headerStyle: tw`bg-black shadow-sm`,
        headerTitleStyle: tw`font-bold text-2xl`,
        headerTintColor: '#FF6600'
      })}
      >

      <Tab.Screen name="Home" component={HomeTab} 
      options={{ headerShown: false, tabBarHideOnKeyboard: true, 
      tabBarIcon: ({ focused, color }) => <Feather name='home' focused={focused} size={30} color={color} />, }} />

      <Tab.Screen name="Search" component={Search}
        options={{ tabBarHideOnKeyboard: true, headerShown: false, tabBarIcon: ({ focused, color }) => <FontAwesome name='search' focused={focused} size={23} color={color} /> }} />


      <Tab.Screen name="Reel" component={Reel}
        options={{ title:'Upcoming', headerShown: false, tabBarIcon: ({ focused, color }) => <Ionicons name='newspaper-outline' focused={focused} size={25} color={color} /> }} />

      <Tab.Screen name="Movies" component={Notification}
        options={{ headerShown: false, title:'Movie', tabBarIcon: ({ focused, color }) => <Feather name='tv' focused={focused} size={25} color={color} />, title: 'Notifications' }} />
        
      <Tab.Screen name="UserProfile" component={UserProfile}
        options={{ headerShown: false, title:'More', tabBarIcon: ({ focused, color }) => <Feather name='more-horizontal' focused={focused} size={25} color={color} /> }} />

    </Tab.Navigator>


  )
}


export default HomeScreen
