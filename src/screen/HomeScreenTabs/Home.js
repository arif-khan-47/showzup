import React from 'react'
import { View, SafeAreaView, FlatList, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import tw from 'twrnc'
import Story from '../../components/Home/Story';
import Posts from '../../components/Home/Posts';
import Header from '../../components/Home/Header';

// Data 



function HomeTab() {
  return (
    <>
      <View style={{ backgroundColor: 'black', height: '100%' }}>
        <StatusBar backgroundColor={'white'} barStyle='dark-content' animated={true} />
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 1, alignItems: 'center', }}>
          <Image
            style={tw`w-24 h-15`}
            source={{
              uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
            }}
          />
          <TouchableOpacity onPress={()=>{console.log("Search button clicked")}}>
            <Feather name='search' style={{ fontSize: 30, color: '#FF6600' }} />
          </TouchableOpacity>
        </View>



        <ScrollView style={{ backgroundColor: 'white' }}>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>
            <Text>hcdhbhbvilb</Text>

        </ScrollView>
      </View>
    </>

  )
}


export default HomeTab


    //   <ScrollView>
    //     <Story />
    //     <Posts />
    //   </ScrollView>


    // </View>