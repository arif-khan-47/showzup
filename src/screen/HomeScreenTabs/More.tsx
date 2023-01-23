import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import tw from 'twrnc'
import { logout } from '../../store/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
// import { userData } from '../../http';



const More = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [phone, setPhone] = useState('')
  AsyncStorage.getItem('phone')
    .then(val => {
      setPhone(val);
    })
    .catch(error => {
      console.log(error);
    });

    const loggingOut = async () => {
      try {
        const value = await AsyncStorage.removeItem('accessToken')
        console.log(value)
        if (!value) {
          dispatch(logout())
          console.log('remove')
        }
      }
      catch (err) {
        console.log(err);
      }
  
    };

  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle='light-content' />
      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
        <View style={{ backgroundColor: 'gray', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>
          <Image
            style={[tw`h-15 w-15 border-2 rounded-full`, { borderColor: '#FF6600' }]}
            source={{
              uri: null || 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672320074/showsup/Vector_a8ykvs.png',
            }}
          />
          <View style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 10 }}>
            <Text style={{ color: '#FF6600', fontSize: 25, fontWeight: '700' }}>User</Text>
            <Text style={{ color: 'white' }}>+91 {phone}/ Email</Text>
          </View>
        </View>


        <TouchableOpacity onPress={()=>navigation.navigate('Subscription' as never)} style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Plans</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Watchlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Generes</Text>
        </TouchableOpacity> */}

        

        <View style={{borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'white' }}>      
        <TouchableOpacity onPress={()=>navigation.navigate('Settings' as never)} style={{ paddingHorizontal: 10, paddingVertical: 15,}}>
          <Text style={{ color: 'white', fontSize: 18 }}>Settings</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('TermConditions' as never)} style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Terms & Conditions</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate('Privecy' as never)} style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Privacy Policy</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate('HelpAndSupport' as never)} style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('About' as never)} style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={loggingOut} style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: '#FF6600', fontSize: 18 }}>Logout</Text>
        </TouchableOpacity>


        <View style={{paddingVertical:15, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'gray'}}>Powered by Zezo.</Text>
        </View>

      </ScrollView>
      
    </>

  )
}

export default More
