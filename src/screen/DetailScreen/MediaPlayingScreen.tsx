import { View, Text, Pressable, ScrollView, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ReadMore from '@fawazahmed/react-native-read-more';




const { width, height } = Dimensions.get('window');

const MediaPlayingScreen = ({ route, navigation }) => {
  const { episodes } = route.params;
  console.log(episodes)

  return (
    <>
      {/* <View style={{height:'30%', width:'100%', backgroundColor:'#FF6600'}}>
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>
        njklnjkbk
      </Text>

    </View> */}
      <ScrollView style={{ height: '100%', width: '100%', backgroundColor: 'black' }}>
        {/* <EpisodeCard data={episodes}/> */}
        <View>
          <FlatList
            style={{ marginVertical: 20 }}
            data={episodes}
            pagingEnabled
            keyExtractor={episodes.id}
            // horizontal  
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => navigation.navigate("Player",{data:item})}>
                <View style={{ borderColor: '#FF6600', borderRadius: 10, borderWidth: 1, padding: 15, marginVertical: 10, marginHorizontal: 5, flexDirection:'row',}}>
                <Image
                style={{height:40, width:60}}
                source={{
                  uri: item.thumbnail,
                }}
                />
                  <Text style={{ color: 'white', fontSize: 25, paddingLeft: 20, marginTop:'auto', marginBottom:'auto', fontWeight:'700' ,width:'100%' }}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            }
          />
        </View>
      </ScrollView>
    </>
  )
}

export default MediaPlayingScreen