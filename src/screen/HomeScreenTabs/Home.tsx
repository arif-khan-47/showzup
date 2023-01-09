import React from 'react'
import { View, SafeAreaView, FlatList, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import tw from 'twrnc'
import Story from '../../components/Home/Story';
import Header from '../../components/Cards/HomeHero';
import ContentTabs from '../../components/Home/ContentTabs';

// Data 



function HomeTab({ navigation }) {
  return (
    <>
      <View style={{ backgroundColor: 'black', height: '100%' }}>
        <StatusBar backgroundColor={'black'} barStyle='light-content' animated={true} />
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 1, alignItems: 'center', }}>
          <Image
            style={tw`w-24 h-15`}
            source={{
              uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
            }}
          />
          <TouchableOpacity onPress={() => { navigation.navigate('SearchPage') }}>
            <Feather name='search' style={{ fontSize: 30, color: '#FF6600' }} />
          </TouchableOpacity>
        </View>



        <View style={[{ backgroundColor: 'black', height: '100%' },]}>
          <ContentTabs />
        </View>
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