import React from 'react'
import tw from 'twrnc'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';




import Search from './HomeScreenTabs/Search';
import Reel from './HomeScreenTabs/Reel';
import Notification from './HomeScreenTabs/Notification';
import UserProfile from './HomeScreenTabs/UserProfile';
import HomeTab from './HomeScreenTabs/Home';
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator 
    initialRouteName='Home' 
    screenOptions={({route })=>({ 
      tabBarStyle: tw`dark:bg-black py-1 rounded-t-lg`, 
      tabBarShowLabel: false, 
      tabBarActiveTintColor: '#FF4D67', 
      tabBarInactiveTintColor: 'gray', 
      headerStyle: tw`bg-transparent dark:bg-black shadow-sm`, 
      headerTitleStyle: tw`font-bold text-2xl`, 
      headerTintColor: '#FF4D67'})}>

<Tab.Screen name="Home" component={HomeTab}
        options={{ headerShown: false, tabBarHideOnKeyboard:true,  tabBarIcon: ({ focused, color }) => <FontAwesome name='home' focused={focused} size={30} color={color} />,}} />

      <Tab.Screen name="Search" component={Search}
        options={{ tabBarHideOnKeyboard: true, headerShown: false, tabBarIcon: ({ focused, color }) => <FontAwesome name='search' focused={focused} size={23} color={color} /> }} />


      <Tab.Screen name="Reel" component={Reel}
        options={{ headerShown: false, tabBarIcon: ({ focused, color }) => <Entypo name='clapperboard' focused={focused} size={23} color={color} /> }} />

      <Tab.Screen name="Notification" component={Notification}
        options={{ headerShown: false, tabBarIcon: ({ focused, color }) => <Ionicons name='notifications' focused={focused} size={25} color={color} />, title: 'Notifications' }} />
      <Tab.Screen name="UserProfile" component={UserProfile}
        options={{ headerShown: false, tabBarIcon: ({ focused, color }) => <FontAwesome name='user' focused={focused} size={25} color={color} />}} />

    </Tab.Navigator>


  )
}


export default HomeScreen
