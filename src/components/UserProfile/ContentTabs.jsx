import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PostGrid from './PostGrid';
import ReelGrid from './ReelGrid';
import TagsGrid from './TagsGrid';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ContentTabs = () => {
    const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator screenOptions={({route})=>({
        tabBarShowLabel:false, tabBarIndicatorStyle:{backgroundColor: '#FF4D67', height:1.5}, tabBarIcon:({focused, color,})=>{
            let iconName;
            if (route.name === 'post') {
                iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
                color = focused ? '#FF4D67' : 'gray';
            }else if (route.name === 'video') {
                iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
                color = focused ? '#FF4D67' : 'gray';
            }else if (route.name === 'tag') {
                iconName = focused ? 'ios-person' : 'ios-person-outline';
                color = focused ? '#FF4D67' : 'gray';
            }
            return(
                <Ionicons name={iconName} color={color} size={25}/>
            )
        },
    })}>
        <Tab.Screen name='post' component={PostGrid} />
        <Tab.Screen name='video' component={ReelGrid} />
        <Tab.Screen name='tag' component={TagsGrid} />
    </Tab.Navigator>
  )
}

export default ContentTabs

const styles = StyleSheet.create({})