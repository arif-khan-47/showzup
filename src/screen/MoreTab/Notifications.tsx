import { ScrollView, StatusBar, Text, View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Notifications = () => {

  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle='light-content' />

      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ left: 0, top: '0%', position: 'absolute', padding: 5 }}>
          <Ionicons name='arrow-back' size={35} color={'#FF6600'} style={{ padding: 10, borderRadius: 20 }} />
        </TouchableOpacity>

        <View style={{ marginTop: '15%' }}>
          <Text style={{ fontSize: 30, fontWeight: '900', padding: 20, color: 'white' }}>Notifications</Text>
        </View>


        <View style={{ paddingVertical: 10, paddingHorizontal: 20, }}>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 18, paddingBottom:20 }}>Receive notifications about TV shows and movies you love. {`\n`}
            You can easily customize all your notifications setting below.</Text>

          <View style={{ paddingVertical: 10,marginBottom:10, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor:'white', borderBottomWidth:1, borderTopWidth:1, borderTopColor:'white'}}>
            <Text style={{ color: 'white', fontSize: 18 }}>Allow Notifications</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'white' }}
              thumbColor={isEnabled ? '#ff6600' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor:'gray', borderBottomWidth:1}}>
            <Text style={{ color: 'white', fontSize: 18 }}>Allow Notifications</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'white' }}
              thumbColor={isEnabled ? '#ff6600' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor:'gray', borderBottomWidth:1}}>
            <Text style={{ color: 'white', fontSize: 18 }}>Allow Notifications</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'white' }}
              thumbColor={isEnabled ? '#ff6600' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor:'gray', borderBottomWidth:1}}>
            <Text style={{ color: 'white', fontSize: 18 }}>Allow Notifications</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'white' }}
              thumbColor={isEnabled ? '#ff6600' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor:'gray', borderBottomWidth:1}}>
            <Text style={{ color: 'white', fontSize: 18 }}>Allow Notifications</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'white' }}
              thumbColor={isEnabled ? '#ff6600' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor:'gray', borderBottomWidth:1}}>
            <Text style={{ color: 'white', fontSize: 18 }}>Special Offer</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'white' }}
              thumbColor={isEnabled ? '#ff6600' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

        </View>
      </ScrollView>

    </>

  )
}

export default Notifications
