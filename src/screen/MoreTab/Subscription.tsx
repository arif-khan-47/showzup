import { ScrollView, StatusBar, Text, View, TouchableOpacity, Dimensions, Image, Pressable, Linking, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import navgiationStrings from '../../components/Constants/navgiationStrings';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState, useRef } from 'react'
import Colors from '../../Styles/Colors';
import Carousel from 'react-native-anchor-carousel';
import RazorpayCheckout from 'react-native-razorpay';
import { showMessage } from 'react-native-flash-message';
import { RootState } from '../../components/Redux/store';
import { checkout, getSubscriptions, verifyPayment } from '../../http'
import tw from 'twrnc'



const Subscription = () => {
  const dispatch = useDispatch();
  const [fetchdata, setFetchdata] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { subscriptions, status } = useSelector((state: RootState) => state.subscription)
  const navigation = useNavigation()
  const { user, whoami: { isPremium } } = useSelector((state: RootState) => state.auth)
  useEffect(() => {
      dispatch(fetchSubscriptions() as any)
      dispatch(whoamiFunc() as any)
  }, []);
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






  const verifyPaymentEntry = async (data) => {
    try {
        const response = await verifyPayment(data)
        if (response.status === 200) {
            navigation.navigate(navgiationStrings.MAIN as never)
            // dispatch(setScreen(5))
            showMessage({
                message: 'Payment Successful',
                type: 'success',
                icon: 'success',
                backgroundColor: Colors.primary,
                color: Colors.white,
                duration: 3000,
                position: 'top',
                animationDuration: 500,
                floating: true,
            })
        }
    } catch (error) {

    }
}

const initPayment = (data, rozerpay_api_key, item) => {
    var options = {
        amount: data.amount,
        currency: data.currency,
        name: item.name,
        description: item.description,
        image: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
        order_id: data.id,
        key: rozerpay_api_key,
        prefill: {
            email: user.email,
            contact: user.phone ? user.phone : '9191919191',
        },
        theme: { color: Colors.primary }
    }
    RazorpayCheckout.open(options).then((res) => {
        // handle success
        verifyPaymentEntry({
            order_id: res.razorpay_order_id,
            payment_id: res.razorpay_payment_id,
            signature: res.razorpay_signature
        });
    }).catch((error) => {
        // handle failure
        showMessage({
            message: 'Payment Failed. Please try again!',
            type: "danger",
            icon: "danger",
            duration: 3000,
            position: 'top',
            animationDuration: 500,
            floating: true,
        });
    });
};

const handlePayment = async (item: any) => {
    setIsLoading(true)
    try {
        const response = await checkout({ subscriptionId: item._id })
        const { data: { data, rozerpay_api_key } } = response
        if (response.status === 201) {
            initPayment(data, rozerpay_api_key, item);
            setIsLoading(false)
        }
    } catch (error: any) {
        showMessage({
            message: error?.response?.data?.error?.message || 'Something went wrong. Please try again!',
            type: "danger",
            icon: "danger",
            duration: 3000,
            position: 'top',
            animationDuration: 500,
            floating: true,
        });
        setIsLoading(false)
    }
};

    const substatus = false

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
              substatus ?
                <TouchableOpacity disabled style={{ marginVertical: 10, paddingVertical: 10, backgroundColor: '#ff6600', borderRadius: 25, borderWidth:2, borderColor:'white', opacity:0.5 }}>
                  <Text style={{ color: 'white', textAlign: 'center', fontWeight: '700', fontSize: 18, }}>Sunscribed</Text>
                </TouchableOpacity> 
                :
                <TouchableOpacity onPress={() => { Platform.OS === 'android' ? handlePayment(item) : Linking.openURL('https://futuretv.app/subscribe')}} style={{ marginVertical: 10, paddingVertical: 10, backgroundColor: 'white', borderRadius: 25 }}>
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
