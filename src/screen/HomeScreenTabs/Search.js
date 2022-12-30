import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import SearchHeader from '../../components/Search/SearchHeader'
import Discover from '../../components/Search/Discover'
import SearchContent from '../../components/Search/SearchContent'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'




const Search = () => {
  const [image, setImage] = useState(null)

  const getData = data =>{
    setImage(data)
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{width:'100%', height:'100%', backgroundColor:'white', position:'relative'}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <SearchHeader/>
        {/* <Discover/> */}
        <SearchContent data={getData}/>
        </ScrollView>
        {/* {
          image? 
          (
            <View style={{position:'absolute', zIndex:1, width:'100%', height:'100%'}}>
              <StatusBar backgroundColor={'#525252'} barStyle='dark-content'/>
              <View style={{position:'absolute', top:windowHeight/6, left:windowWidth/18, back:'white', width:'90%', height:'80%', borderRadius:15, zIndex:1, elevation:50, backgroundColor:'white'}}>
                <View style={{flexDirection:'row', alignItems:'center', paddingVertical:10, paddingHorizontal:15}}>
                  <Image 
                  source={{
                    uri:image
                  }}
                  style={{width:30, height:30, borderRadius:100}}
                  />
                  <View style={{paddingLeft:8}}>
                    <Text style={{fontSize:12, fontWeight:'600'}}>
                      username
                    </Text>
                  </View>
                </View>

                <Image
                source={{
                  uri:image
                }}
                style={{width:'100%', height:'80%'}}
                />
                <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:'center', padding:8}}>
                  <Ionicons name='ios-heart-outline' style={{fontSize:26}} />
                  <Ionicons name='ios-person-circle-outline' style={{fontSize:26}} />
                  <Feather name='navigation' style={{fontSize:26}}/>
                </View>
                </View>
            </View>
          ):null
        } */}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})