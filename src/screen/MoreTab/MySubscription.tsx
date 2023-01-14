import { ScrollView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';


const MySubscription = () => {

  const navigation = useNavigation()

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
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Your current subscription</Text>
          <Text style={{ color: 'gray', fontSize: 25 }}>Platenium</Text>

          <Text style={{ paddingVertical: 10,marginTop:20,  color: 'gray' }}>
            Do you want to cancel your subscription?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('CancelSubscription')} style={{padding:15, backgroundColor:'#ff6600', width:'50%', borderRadius:25}}>
            <Text style={{textAlign:'center', color:'white', fontWeight:'800'}}>Cancel subscription</Text>
          </TouchableOpacity>

        </View>

        {/* <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Support Requests</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity> */}


      </ScrollView>

    </>

  )
}

export default MySubscription
