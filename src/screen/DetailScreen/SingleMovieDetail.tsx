import { View, Text, Pressable, ScrollView, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReadMore from '@fawazahmed/react-native-read-more';




const { width, height } = Dimensions.get('window');

const SingleMovieDetail = ({ route, navigation }) => {
  const { name, poster, description, cast } = route.params;

  return (
    <ScrollView style={{ height: '100%', width: '100%', backgroundColor: 'black' }}>
      <View style={{
        height: height / 1.7,
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
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ left: 0, top: '0%', position: 'absolute', padding: 5 }}>
              <Ionicons name='arrow-back' size={35} color={'#FF6600'} style={{ padding: 10, borderRadius: 20 }} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>


      <View style={{ width: '100%', padding: 10, paddingHorizontal: 20 }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: '700' }}>{name}</Text>
        <ReadMore numberOfLines={4} style={{ fontSize: 14, paddingVertical: 2, color: 'white' }}>
          {description}
        </ReadMore>
      </View>

      <View>
        <FlatList
          data={cast}
          pagingEnabled
          keyExtractor={cast.id}
          horizontal
          renderItem={({ item }) =>
            <View style={{ borderColor: '#FF6600', borderRadius: 10, borderWidth: 1 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 20, height: 20 }}
              />
            </View>

          }
        />
      </View>
    </ScrollView>
  )
}

export default SingleMovieDetail