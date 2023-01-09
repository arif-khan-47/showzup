import { View, Text, Pressable, ScrollView, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import ReadMore from '@fawazahmed/react-native-read-more';
import SeasonCard from '../../components/Cards/SeasonCard';




const { width, height } = Dimensions.get('window');


const SingleMoviePage = ({ route }) => {

  const { name, poster, description,cast,seasons } = route.params;
  console.log(seasons);
  const navigation = useNavigation()

  return (
    <>
      <ScrollView style={{ height: '100%', width: '100%', backgroundColor: 'black' }}>
        <View style={{
          height: height / 1.5,
          width: width, // width:width*0.8
          // marginVertical: 10,
          // backgroundColor:'blue'
        }}>
          <View style={{ height: '100%', width: '100%', position: 'relative', }}>
            <Image
              style={{ backgroundColor: '#FF6600', height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
              source={{
                uri: poster
              }}
            />

            <LinearGradient colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.4)', 'rgba(0,0,0,1)']} style={{ position: 'absolute', height: '100%', width: '100%', bottom: 0 }}>

              <View style={{ bottom: 0, left: 0, right: 0, top: '60%', position: 'absolute', paddingHorizontal: 10 }}>
                <Image
                  style={{ width: '25%', height: '15%' }}
                  source={{
                    uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
                  }}
                />
                <Text style={{ fontWeight: '700', fontSize: 30, marginLeft: 5, color: 'white', paddingTop: 10 }}>{name}</Text>
                <Text style={{ marginLeft: 5, color: 'white', fontSize: 15 }}>Catagories.<Text style={{ color: '#FF6600' }}> 2000</Text>. 2h9m</Text>

                <View style={{ position: 'absolute', bottom: '10%', width: '106%', height: '23%', flexDirection: 'row', paddingHorizontal: '2%' }}>
                  {/* <TouchableOpacity
                    style={{ backgroundColor: '#FF6600', width: '98%', height: '100%', borderRadius: 10 }}>
                    <Text style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', color: 'white', fontWeight: '700', fontSize: 16 }}>
                      Play Now
                    </Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View style={{ width: width, paddingHorizontal:20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("SingleMovieDetail",{name, poster, description, cast})}>
          <ReadMore numberOfLines={3} style={{ fontSize: 14, paddingVertical: 2, color:'white' }}>
          {description}
        </ReadMore>
          </TouchableOpacity>
          <SeasonCard data={seasons}/>

        </View>
      </ScrollView>
    </>
  )
}

export default SingleMoviePage

// 