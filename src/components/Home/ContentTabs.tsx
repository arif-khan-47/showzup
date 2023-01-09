import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Hometab from './Hometab';
import MovieTab from './MovieTab';
import SeriesTab from './SeriesTab';


const ContentTabs = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator screenOptions={({ route }) => ({swipeEnabled:false,
      tabBarShowLabel: true, tabBarStyle: { backgroundColor: 'black' }, tabBarActiveTintColor: '#FF6600', tabBarInactiveTintColor: 'white', tabBarIndicatorStyle: { backgroundColor: '#FF6600' }
    })}>
      <Tab.Screen name='Home' component={Hometab} />
      {/* <Tab.Screen name='Movies' component={MovieTab} /> */}
      <Tab.Screen name='Movies' component={Hometab} />

      {/* <Tab.Screen name='Web Series' component={SeriesTab} /> */}
      <Tab.Screen name='Web Series' component={Hometab} />

    </Tab.Navigator>
  )
}

export default ContentTabs
