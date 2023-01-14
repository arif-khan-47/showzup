import { ScrollView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';



const Settings = () => {
const navigation = useNavigation();

  const issubscribed = true;
  // const issubscribed = false;



  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle='light-content' />
      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>

        <TouchableOpacity onPress={()=> navigation.navigate('Profile')} style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Account</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Notifications')} style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Notifications</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> issubscribed? navigation.navigate('MySubscription') : navigation.navigate('Subscription')} style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>My Subscription</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <Text style={{ color: 'red', fontSize: 18 }}>Delete Account</Text>
        </TouchableOpacity>

      </ScrollView>

    </>

  )
}

export default Settings
