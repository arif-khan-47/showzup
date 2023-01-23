import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieTabSquare from '../../components/Cards/MovieTabSquare'
import { allMovies } from '../../http'
import { useNavigation } from '@react-navigation/native'


const Movies = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([])
  // console.log(data)

  async function getAllMovies() {
    console.log('Getting all movies');
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
      <View style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
        <MovieTabSquare data={data} title={'All Movies'} />
      </View>
    </>
  )
}

export default Movies

const styles = StyleSheet.create({})