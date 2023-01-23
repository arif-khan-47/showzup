import { Dimensions, Image, Pressable, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-anchor-carousel'
import { getTrending } from '../../http'
import MovieTabSquare from '../../components/Cards/MovieTabSquare'
import { useNavigation } from '@react-navigation/native'



const Search = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([])
  // console.log(data)

  async function getAllTrends() {
    // console.log('Getting all movies');
    try {
      const response = await getTrending();
      // console.log(response.data.data);
      setData(response.data.data)
    } catch (error) {

    }

  }

  useEffect(() => {
    getAllTrends()
  }, [])











  const carouselRef = useRef(null);

  const { width } = Dimensions.get('window')

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          // style={tw`shadow-lg shadow-[#FF6600]`}
          onPress={() => navigation.navigate("SingleMovie" as never, { name: item.name, poster: item.poster, description: item.description, cast: item.cast, seasons: item.seasons, slug: item.slug } as never)}
        >
          <Image source={{ uri: item.poster }} style={[{
            width: 200,
            height: 250,
            borderRadius: 15,
            alignSelf: 'center',
            backgroundColor: 'rgba(255, 102, 0,0.9)'
          }]} />
          <Text style={{
            paddingLeft: 14,
            color: '#FF6600',
            position: 'absolute',
            bottom: 10,
            left: 2,
            fontWeight: 'bold'
          }}>{item.name}</Text>
        </TouchableOpacity>

      </View>

    )
  }

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'black', position: 'relative' }}>
      <Pressable onPress={() => navigation.navigate('SearchPage' as never)} style={{ backgroundColor: 'white', height: '8%', borderRadius: 25, marginVertical: '2%', marginHorizontal: 10, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: '5%' }}>
        <Text style={{ marginTop: 'auto', marginBottom: "auto", fontSize: 15 }}>Search Movies, Shows Etc</Text>
        <Ionicons name='search' style={{ fontSize: 25, marginTop: 'auto', marginBottom: "auto", color: '#FF6600' }} />
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%', width: '100%' }}>


        <View style={{
          // flex: 1,
          backgroundColor: '#000',
          height: 350,
        }}>
          <Text style={{ color: '#FF6600', fontSize: 20, padding: 20 }}>Trending Search</Text>
          <View style={{
            width: '100%',
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Carousel style={{
              // flex: 1,
              overflow: 'visible',
            }}
              data={data}
              renderItem={renderItem}
              itemWidth={200}
              containerWidth={width - 20}
              separatorWidth={20}
              ref={carouselRef}
              inActiveOpacity={0.4}
              // pagingEnable={true}
              minScrollDistance={20}
            />
          </View>
        </View>




        <View style={{ backgroundColor: 'rgba(211, 211, 211, 0.5)', width: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
          <Text style={{ paddingHorizontal: 10, paddingTop: 15, color: '#FF6600', fontWeight: '800', fontSize: 18 }}>Top Search</Text>
          <MovieTabSquare title='' data={data} />
        </View>
      </ScrollView>

    </View>
  )
}

export default Search


