import { ScrollView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'



const HelpAndSupport = () => {


  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle='light-content' />

      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>

        <View style={{marginTop:'10%'}}>
          <Text style={{fontSize:30, fontWeight:'900', padding:20, color:'white'}}>Help</Text>
        </View>

        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Help Centre</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Privacy and security help</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Support Requests</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>
      </ScrollView>

    </>

  )
}

export default HelpAndSupport
