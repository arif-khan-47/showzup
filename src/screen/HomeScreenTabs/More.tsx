import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import tw from 'twrnc'
import ProfileHeader from '../../components/UserProfile/ProfileHeader';
import Profile, { ProfileButtons } from '../../components/UserProfile/FriendProfileInfo';
import Entypo from 'react-native-vector-icons/Entypo';
import { BottomSheetModal, BottomSheetModalProvider, } from '@gorhom/bottom-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons'
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


        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Buy Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>My Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>My Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Watchlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Have a Prepaid Code?</Text>
        </TouchableOpacity>



        <View style={{borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'white' }}>      
        <TouchableOpacity onPress={()=>navigation.navigate('Settings')} style={{ paddingHorizontal: 10, paddingVertical: 15,}}>
          <Text style={{ color: 'white', fontSize: 18 }}>Settings</Text>
        </TouchableOpacity>
        </View>


        <View style={{borderBottomWidth: 0.5, borderColor: 'white' }}>
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15,}}>
          <Text style={{ color: 'white', fontSize: 18 }}>Invite a Friend</Text>
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Content Redressal Mechanism</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={loggingOut} style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ color: '#FF6600', fontSize: 18 }}>Logout</Text>
        </TouchableOpacity>

      </ScrollView>
      {/* <BottomSheetModalProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor={'black'} />
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
          <View style={{ paddingVertical: 12 }}>
            <ProfileHeader username={data.username} onPress={handlePresentModalPress} />
          </View>
          <View style={tw`h-[1px] bg-gray-200`}></View>
          <View style={{ width: '100%' }}>
            <Profile
              username={data.username}
              name={data.name}
              avatar='https://img.icons8.com/fluency-systems-filled/144/FF4D67/guest-male.png'
              follower={data?.followers?.length}
              following={data?.followings?.length}
              posts={data?.posts?.length}

            />
          </View>
          <ProfileButtons id={0} username='arif_khan' avatar='https://img.icons8.com/fluency-systems-filled/144/FF4D67/guest-male.png' />
          <View>
            <Text style={{ padding: 10, letterSpacing: 1, fontSize: 14 }}>Story Highlights</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
              {circle}
            </ScrollView>
          </View>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}

          >
            <Pressable style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }} android_ripple={{ color: 'gray' }}>
              <View style={{ width: '90%', height: 45, flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name='ios-settings-sharp' size={30} color={'#FF4D67'} />
                <Text style={[{ fontSize: 25, paddingLeft: 5, color: '#FF4D67' }]}>settings</Text>
              </View>
            </Pressable>
            <Pressable style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }} android_ripple={{ color: 'gray' }}>
              <View style={{ width: '90%', height: 45, flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name='bookmark' size={30} color={'#FF4D67'} />
                <Text style={[{ fontSize: 25, paddingLeft: 5, color: '#FF4D67' }]}>Saved</Text>
              </View>
            </Pressable>
            <Pressable style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }} android_ripple={{ color: 'gray' }} onPress={loggingOut}>
              <View style={{ width: '90%', height: 45, flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name='log-out-outline' size={30} color={'#FF4D67'} />
                <Text style={[{ fontSize: 25, paddingLeft: 5, color: '#FF4D67' }]}>Logout</Text>
              </View>
            </Pressable>

          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider> */}



    </>

  )
}

export default More
