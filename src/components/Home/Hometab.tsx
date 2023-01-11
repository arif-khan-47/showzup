import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Cards/HomeHero'
import SeriesCard from '../Cards/Rectangle';
import Trending from '../Cards/Portrait';
import LandscapeWithTitle from '../Cards/LandscapeWithTitle';
import Square from '../Cards/Square';
import BigContent from '../Cards/BigContent';
import { allMovies } from '../../http';



const catagoriesData = [
  {
    id: '1c',
    title: 'TV Shows',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672737084/showsup/Rectangle_57_rkylob.png',
    navigate:'TV Shows'
  },
  {
    id: '2c',
    title: 'Movies',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672737435/showsup/Rectangle_58_u9aywh.png',
    navigate:'Movies'

  },
  {
    id: '3c',
    title: 'Series',
    img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672737583/showsup/32aabcad7656582e47e47da92317718e-700_zpgqmy.jpg',
    navigate:'Web Series'

  },
];


const bigContentData =
{
  _id: 1,
  poster: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672740130/showsup/23_1_iwf8eo.png',
  name: 'The Walking Dead',
  catagory: 'Fantacy, Action',
  createdAt: '2009',
  duration: '1h 52m',
  star: 4,
  cast: []

}


const Hometab = () => {

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




    // console.log(data)


    // const firstData = data[0]
    // console.log(firstData)

  // const bigContentDataSclice = data.slice(1,2)
  return (
    <ScrollView style={[{ backgroundColor: 'black', height: '100%', width: '100%', marginBottom: '15%' }]}>
      {/* <TouchableOpacity> */}
      <Header data={data} />
      {/* </TouchableOpacity> */}


      <SeriesCard data={data} title={'Series'} />
      <Trending data={data} title={'Trending'} />
      <BigContent data={data} />
      <LandscapeWithTitle data={catagoriesData} />
      <Square data={data} />
    </ScrollView>
  )
}

export default Hometab
