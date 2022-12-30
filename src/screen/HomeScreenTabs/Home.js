import React from 'react'
import { View, SafeAreaView, FlatList, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import tw from 'twrnc'
import Story from '../../components/Home/Story';
import Posts from '../../components/Home/Posts';

// Data 



function HomeTab() {
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar backgroundColor={'white'} barStyle='dark-content' animated={true} />
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center', }}>
        <TouchableOpacity>
          <FontAwesome name='plus-square-o' style={{ fontSize: 30, color: '#FF4D67' }} /></TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FF4D67' }}>ELO</Text>
        <TouchableOpacity>
          <Feather name='navigation' style={{ fontSize: 24, color: '#FF4D67' }} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Story />
        <Posts />
      </ScrollView>


    </View>
  )
}


export default HomeTab
