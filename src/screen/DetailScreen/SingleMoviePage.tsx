import { View, Text, Pressable, ScrollView, FlatList, Image, Dimensions, TouchableOpacity, TextInput, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import ReadMore from '@fawazahmed/react-native-read-more';
import SeasonCard from '../../components/Cards/SeasonCard';
import Ionicons from 'react-native-vector-icons/Ionicons';





const { width, height } = Dimensions.get('window');


const SingleMoviePage = ({ route }) => {

  const { name, poster, description, cast, seasons } = route.params;
  // console.log(seasons);
  const navigation = useNavigation()

  // console.log(seasons[0].episodes[1]);
  const PlayButtonContetnt = seasons[0].episodes[0];
 console.log(PlayButtonContetnt)




  return (
    <>
      <ScrollView style={{ height: '100%', width: '100%', backgroundColor: 'black' }}>
        <View style={{
          height: height / 1.5,
          width: width,
        }}>
          <View style={{ height: '100%', width: '100%', position: 'relative', }}>
            <Image
              style={{ backgroundColor: '#FF6600', height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
              source={{
                uri: poster
              }}
            />

            <LinearGradient colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.4)', 'rgba(0,0,0,1)']} style={{ position: 'absolute', height: '100%', width: '100%', bottom: 0 }}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ left: 0, top: '0%', position: 'absolute', padding: 5 }}>
                <Ionicons name='arrow-back' size={35} color={'#FF6600'} style={{ padding: 10, borderRadius: 20 }} />
              </TouchableOpacity>

              <View style={{ bottom: 0, left: 0, right: 0, top: '60%', position: 'absolute', paddingHorizontal: 10 }}>
                <Image
                  style={{ width: '25%', height: '15%' }}
                  source={{
                    uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
                  }}
                />
                <Text style={{ fontWeight: '700', fontSize: 30, marginLeft: 5, color: 'white', paddingTop: 10 }}>{name}</Text>
                <Text style={{ marginLeft: 5, color: 'white', fontSize: 15 }}>Catagories.<Text style={{ color: '#FF6600' }}> 2000</Text>. 2h9m</Text>

                <View style={{ position: 'absolute', bottom: '15%', width: '106%', height: '23%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '2%' }}>
                  <TouchableOpacity
                  onPress={() => navigation.navigate("Player", { data: PlayButtonContetnt })}
                    // onPress={() => navigation.navigate("SingleMovie", { name: item.name, poster: item.poster, description: item.description, cast: item.cast, seasons: item.seasons })}
                    style={{ backgroundColor: '#FF6600', width: '98%', height: '100%', borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', color: 'white', fontWeight: '700', fontSize: 16 }}>
                      <Ionicons name='play' size={18}/>
                      Play
                    </Text>
                  </TouchableOpacity>
                 
                </View>




                <View style={{ position: 'absolute', bottom: '10%', width: '106%', height: '23%', flexDirection: 'row', paddingHorizontal: '2%' }}>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>


        <View style={{ width: width, paddingHorizontal: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("SingleMovieDetail", { name, poster, description, cast })}>
            <ReadMore numberOfLines={3} style={{ fontSize: 14, paddingVertical: 2, color: 'white' }}>
              {description}
            </ReadMore>
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 25, marginTop: 15 }}>Episodes</Text>
          <View style={{ backgroundColor: '#ff6600', padding: 0.8, marginTop: 5, width: '25%' }}></View>
        </View>
        <SeasonCard data={seasons} />

      </ScrollView>
    </>
  )
}

export default SingleMoviePage

// 