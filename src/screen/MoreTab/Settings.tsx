import { ScrollView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';



const Settings = () => {
const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle='light-content' />
      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>

        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Account</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Notifications</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Appearance</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Privacy & Security</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('HelpAndSupport')} style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Help and Support</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>About</Text>
          <Ionicons name='chevron-forward-outline' style={{ fontSize: 20, color: '#FF6600' }} />
        </TouchableOpacity>

      </ScrollView>

    </>

  )
}

export default Settings
