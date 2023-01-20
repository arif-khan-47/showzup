import { ScrollView, StatusBar, Text, View, TouchableOpacity, Dimensions, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react'
import Carousel from 'react-native-anchor-carousel'
import { getSubscriptions } from '../../http'
import tw from 'twrnc'



const Subscription = () => {

  const [fetchdata, setFetchdata] = useState([])
  const navigation = useNavigation()
  const { width } = Dimensions.get('window')

  const carouselRef = useRef(null);

  const data = [
    {
      id: 1,
      plan: 'Static',
      rupees: '99',
      period: 'Monthly',
      description: 'iOS, Android, Appie TV, Roku, Amazon Fire TV, web browser'
    },
    // {
    //   id: 2,
    //   plan: 'Silver',
    //   rupees: '199',
    //   period: 'Monthly',
    //   description: 'iOS, Android, Appie TV, Roku, Amazon Fire TV, web browser'
    // },
    // {
    //   id: 3,
    //   plan: 'Gold',
    //   rupees: '299',
    //   period: 'Monthly',
    //   description: 'iOS, Android, Appie TV, Roku, Amazon Fire TV, web browser'
    // },
    // {
    //   id: 4,
    //   plan: 'Premium',
    //   rupees: '1999',
    //   period: 'Annualy',
    //   description: 'iOS, Android, Appie TV, Roku, Amazon Fire TV, web browser'
    // },
    // {
    //   id: 5,
    //   plan: 'Diamond',
    //   rupees: '2999',
    //   period: 'Annualy',
    //   description: 'iOS, Android, Appie TV, Roku, Amazon Fire TV, web browser'
    // },
  ]
  const getSingleMovies = async () => {
    try {
      const response = await getSubscriptions();
      setFetchdata(response.data.data)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getSingleMovies()
  }, [])


  // const renderItem = ({ item, index }) => {
  //   return (
  //     <View>
  //       <View
  //         // style={tw`shadow-lg shadow-[#FF6600]`}
  //         onPress={() => console.log('clicked')}
  //       >
  //         <View style={[{
  //           width: 200,
  //           height: 220,
  //           borderRadius: 15,
  //           alignSelf: 'center',
  //           backgroundColor: '#ff6600',
  //           padding: 20,
  //         }]}>
  //           <Text style={{
  //             color: 'white',
  //             textAlign: 'center',
  //             fontSize: 18,
  //             fontWeight: 'bold'
  //           }}>{item.plan}</Text>
  //           <Text style={{
  //             color: 'white',
  //             textAlign: 'center',
  //             fontSize: 50,
  //             fontWeight: 'bold'
  //           }}>₹ {item.rupees}</Text>
  //           <Text style={{
  //             color: 'white',
  //             textAlign: 'center',
  //             fontSize: 12,
  //           }}>{item.period}</Text>

  //           <Text style={{
  //             color: 'white',
  //             textAlign: 'center',
  //             paddingTop: 10,
  //             fontSize: 12,
  //           }}>{item.description}</Text>

  //           <TouchableOpacity style={{marginVertical:10, paddingVertical:10, backgroundColor:'white', borderRadius:25}}>
  //             <Text style={{color:'#ff6600', textAlign:'center', fontWeight:'700', fontSize:18}}>Sunscribe</Text>
  //           </TouchableOpacity>


  //         </View>
  //       </View>

  //     </View>

  //   )
  // }
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <View>
          <View style={[{
            width: 200,
            height: 220,
            borderRadius: 15,
            alignSelf: 'center',
            backgroundColor: '#ff6600',
            padding: 20,
          }]}>
            <Text style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold'
            }}>{item.name}</Text>
            <Text style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 50,
              fontWeight: 'bold'
            }}>₹ {item.price}</Text>
            <Text style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 12,
            }}>{item.duration}</Text>

            <Text style={{
              color: 'white',
              textAlign: 'center',
              paddingTop: 10,
              fontSize: 12,
            }}>{item.description}</Text>

            {
              item.status ?
                <TouchableOpacity disabled style={{ marginVertical: 10, paddingVertical: 10, backgroundColor: '#ff6600', borderRadius: 25, borderWidth:2, borderColor:'white', opacity:0.5 }}>
                  <Text style={{ color: 'white', textAlign: 'center', fontWeight: '700', fontSize: 18, }}>Sunscribed</Text>
                </TouchableOpacity> 
                :
                <TouchableOpacity style={{ marginVertical: 10, paddingVertical: 10, backgroundColor: 'white', borderRadius: 25 }}>
                  <Text style={{ color: '#ff6600', textAlign: 'center', fontWeight: '700', fontSize: 18 }}>Sunscribe</Text>
                </TouchableOpacity>
            }


          </View>
        </View>

      </View>

    )
  }

  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle='light-content' />

      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ left: 0, top: '0%', position: 'absolute', padding: 5 }}>
          <Ionicons name='arrow-back' size={35} color={'#FF6600'} style={{ padding: 10, borderRadius: 20 }} />
        </TouchableOpacity>

        <View style={{ marginTop: '15%' }}>
          <Text style={{ fontSize: 30, fontWeight: '900', padding: 20, color: 'white' }}>My Subscription</Text>
        </View>



        <View style={{ paddingVertical: 10, paddingHorizontal: 20, }}>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 25, textAlign: 'center' }}>Subscribe to enjoy your lovely Movies or Series</Text>
          <Text style={{ color: 'gray', fontSize: 18, textAlign: 'center' }}>We will help you to book your lovely movies computerize and instantly.</Text>
        </View>




        <View style={{
          // flex: 1,
          backgroundColor: '#000',
          height: 280,
          paddingTop: 20
        }}>
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
              data={fetchdata}
              key={fetchdata._id}
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

        <View style={{ paddingHorizontal: 20, }}>

          <Text style={{
            color: 'white',
            textAlign: 'center',
            paddingTop: 10,
            fontSize: 12,
          }}>If you are not setisfied with our service, you can cancel your subscription within 7 days and get full refund.</Text>
          <Text style={{
            color: 'white',
            paddingTop: 10,
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
          }}>Please note that refund are processed within 7 days of cancellation.</Text>

        </View>

      </ScrollView>

    </>

  )
}

export default Subscription
