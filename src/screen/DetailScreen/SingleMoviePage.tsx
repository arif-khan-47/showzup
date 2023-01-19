import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import ReadMore from '@fawazahmed/react-native-read-more';
import SeasonCard from '../../components/Cards/SeasonCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrailerCard from '../../components/Cards/Rectangle';
import { getSinglePageData } from '../../http';
// custom tabview components written by Pukhraj Dhamu
import TabView from '../../components/TabView/TabView';

const { width, height } = Dimensions.get('window');

interface ISingleMovieProps {
  route: {
    params: {
      // name: string;
      // description: string;
      slug: string;
      id: string;
      seasons: any;
    }
  }
}

export interface IAllContentResponse {
  message: string;
  data: {
    _id: string,
    name: string,
    slug: string,
    u_age: string,
    description: string,
    duration: string,
    rating: number,
    source_link: string | null,
    source_type: 'HLS' | 'MP4' | 'LIVE_STREAM_HLS'
    trailer_source_link: string | null,
    trailer_source_type: 'HLS' | 'MP4',
    language: {
      _id: string,
      name: string,
    }[] | null,
    cast: {
      _id: string,
      name: string,
      avatar: string | null,
      type: string,
    }[] | null,
    poster: string,
    thumbnail: string,
    tags: string[],
    seasons: {
      _id: string,
      name: string,
      content_id: string,
      order: number,
      episodes: {
        _id: string,
        name: string,
        description: string,
        duration: number,
        source_link: string,
        source_type: 'HLS' | 'MP4',
        content_offering_type: 'FREE' | 'PREMIUM',
        thumbnail: string,
        createdAt: string,
        updatedAt: string,
      }[] | null,
      status: boolean,
      created_by: string,
      createdAt: string,
      updatedAt: string,
    }[] | null,
    type: 'series' | 'movie' | 'live_stream',
    content_offering_type: 'FREE' | 'PREMIUM',
    updated_by: string,
    created_by: string,
    createdAt: string,
    updatedAt: string,
    category: {
      _id: string,
      name: string,
    }[] | null,
    genres: {
      _id: string,
      name: string,
    }[] | null,
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    },
    report: {
      total: number;
      totalPublic: number;
      totalPrivate: number;
    }
  } | null;
}


const SingleMoviePage = ({ route }: ISingleMovieProps) => {
  // const [data, setData] = useState([])
  const [data, setData] = useState<IAllContentResponse['data'][0]>()
  const [activeSeason, setActiveSeason] = useState<any>([]);
  const [activeSeasonNumber, setActiveSeasonNumber] = useState(1);

  console.log("bchdbd", activeSeason)

  console.log(data)

  const { seasons, id, slug } = route.params;
  console.log(id, slug);
  const navigation = useNavigation()


  const PlayButtonContetnt = seasons[0].episodes[0];




  const getSingleMovies = async () => {
    console.log('Getting all movies');
    try {
      const response = await getSinglePageData(slug);
      console.log("data is coming", response.data);
      setData(response.data.data[0])
      // setSeason(response.data.data[0].seasons[0])
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    if (data) {
      if (data?.type === 'series') {
        console.log('its working', data.type)
        if (!data?.seasons) return
        if (data?.seasons?.length > 0) {
          setActiveSeason(data.seasons[0])
        }
      }
    }
  }, [data])

  useEffect(() => {
    getSingleMovies()
    console.log('useeffect console log')
  }, [slug])


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
                uri: data?.poster
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
                <Text style={{ fontWeight: '700', fontSize: 30, marginLeft: 5, color: 'white', paddingTop: 10 }}>{data?.name}</Text>
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
              { name: data?.name, poster: data?.poster, description: data?.description, cast: data?.cast } as never
            )}>
            <ReadMore numberOfLines={3} style={{ fontSize: 14, paddingVertical: 2, color: 'white' }}>
              {data?.description}
            </ReadMore>
          </TouchableOpacity>
        </View>

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