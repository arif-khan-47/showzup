import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import ReadMore from '@fawazahmed/react-native-read-more';
import SeasonCard from '../../components/Cards/SeasonCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrailerCard from '../../components/Cards/Rectangle';
import { allMovies } from '../../http';
// custom tabview components written by Pukhraj Dhamu
import TabView from '../../components/TabView/TabView';




const { width, height } = Dimensions.get('window');


interface ISingleMovieProps {
  route: {
    params: {
      name: string;
      poster: string;
      description: string;
      cast: string;
      seasons: any;
    }
  }
}


const SingleMoviePage = ({ route }: ISingleMovieProps) => {

  const { name, poster, description, cast, seasons } = route.params;
  // console.log(seasons);
  const navigation = useNavigation()

  // console.log(seasons[0].episodes[1]);
  const PlayButtonContetnt = seasons[0].episodes[0];
  //  console.log(PlayButtonContetnt)

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



  // const FirstRoute = () => (
  //   <View style={{ flex: 1 }}>
  //     <SeasonCard data={seasons} />
  //   </View>
  // );

  // const SecondRoute = () => (
  //   <View style={{ flex: 1 }}>
  //     <TrailerCard data={data} title='' />
  //   </View>
  // );

  // const ThirdRoute = () => (
  //   <View style={{ flex: 1 }}>
  //     <TrailerCard data={data} title='' />
  //   </View>
  // );








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
                    onPress={() => navigation.navigate("Player" as never, { data: PlayButtonContetnt } as never)}
                    style={{ backgroundColor: '#FF6600', width: '98%', height: '100%', borderRadius: 10, }}>
                    <Text style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', color: 'white', fontWeight: '700', fontSize: 16 }}>
                      <Ionicons name='play' size={18} />
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
          <TouchableOpacity onPress={() =>
            navigation.navigate("SingleMovieDetail" as never,
              { name, poster, description, cast } as never
            )}>
            <ReadMore numberOfLines={3} style={{ fontSize: 14, paddingVertical: 2, color: 'white' }}>
              {description}
            </ReadMore>
          </TouchableOpacity>
        </View>


        {/* <View style={{ width: width, paddingHorizontal: 20 }}>
          <Text style={{ color: 'white', fontSize: 25, marginTop: 15 }}>Episodes</Text>
          <View style={{ backgroundColor: '#ff6600', padding: 0.8, marginTop: 5, width: '25%' }}></View>
        </View>
        <SeasonCard data={seasons} />
        <View style={{ width: width, paddingHorizontal: 20, marginBottom:-25 }}>
          <Text style={{ color: 'white', fontSize: 25, marginTop: 15 }}>Trailer & More</Text>
          <View style={{ backgroundColor: '#ff6600', padding: 0.8, marginTop: 5, width: '40%' }}></View>
        </View>
        <TrailerCard data={data} title=''/>
        <View style={{ width: width, paddingHorizontal: 20, marginBottom:-25 }}>
          <Text style={{ color: 'white', fontSize: 25, marginTop: 15 }}>More Like This</Text>
          <View style={{ backgroundColor: '#ff6600', padding: 0.8, marginTop: 5, width: '40%' }}></View>
        </View>
        */
        }

        {/* <View style={{ paddingVertical: 20 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </View> */}

        <TabView
          tabs={
            [
              {
                id: 1,
                title: 'Episodes',
                component: <SeasonCard data={seasons} />
              },
              {
                id: 2,
                title: 'Trailer & More',
                component: <TrailerCard data={data} title='Watch Trailer' />
              },
              {
                id: 3,
                title: 'More Like This',
                component: <TrailerCard data={data} title='Watch Like this' />
              }
            ]}
        />




      </ScrollView>
    </>
  )
}

export default SingleMoviePage