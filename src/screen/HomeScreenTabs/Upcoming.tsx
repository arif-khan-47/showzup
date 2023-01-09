import { hasProxies } from 'immer/dist/internal';
import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView, } from 'react-native'
import { hideMessage } from 'react-native-flash-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc'
import FullPortrait from '../../components/Cards/FullPortrait ';
import Header from '../../components/Cards/HomeHero';
import ReelsComponent from '../../components/Reels/ReelsComponent';
import { allMovies } from '../../http';
import Category from '../Upcoming/Category';





const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const header = [
  {
    id: '1',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672656643/showsup/Rectangle_121_vvhyp7.png',
  },
  {
    id: '2',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672656643/showsup/Rectangle_121_vvhyp7.png',
  },
  {
    id: '3',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672656643/showsup/Rectangle_121_vvhyp7.png',
  },
];
const trendingData = [
  {
    id: '1t',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672725399/showsup/Rectangle_124_ixahde.png',
  },
  {
    id: '2t',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672725399/showsup/Rectangle_125_xblhrf.png',
  },
  {
    id: '3t',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672725400/showsup/Rectangle_126_g4q3nw.png',

  },
  {
    id: '4t',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672725399/showsup/Rectangle_124_ixahde.png',
  },
  {
    id: '5t',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672725399/showsup/Rectangle_125_xblhrf.png',
  },
  {
    id: '6t',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672725400/showsup/Rectangle_126_g4q3nw.png',

  },
]


const Upcoming = () => {
  const [data, setData] = useState([])
    // console.log(data)
  
    async function getAllMovies() {
      // console.log('Getting all movies');
      try {
        const response = await allMovies();
        // console.log(response.data.data);
        setData(response.data.data)
      } catch (error) {
  
      }
  
    }
  
    useEffect(() => {
      getAllMovies()
    }, [])

  return (
    <>
    <ScrollView style={{height:'100%', width:'100%', backgroundColor:'black'}}>
    <Header data={data} />
    <FullPortrait data={data} title={'Fantacy'}/>
    <FullPortrait data={data} title={'Horror'}/>  
    <Category/>
    </ScrollView>

      {/* <View style={{ width: width, height: height, backgroundColor: 'black', position: 'relative' }}>

        <View style={[{ flexDirection: 'row', justifyContent: 'space-between'}, tw`px-5 mt-5 absolute top-0 left-0 right-0`]}>

          <Text style={[tw`text-[#FF4D67] text-2xl font-bold w-15`]}>Reels</Text>
          
          <TouchableOpacity style={tw`my-auto`} onPress={() => { console.log('Create Reel Button Pressed') }}>
            <MaterialCommunityIcons name='camera' size={30} color={'#FF4D67'} />
          </TouchableOpacity>
        
        </View>

        <ReelsComponent/>
      
      </View> */}


      
    </>
  )
}

export default Upcoming
