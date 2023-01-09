import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import tw from 'twrnc'
import ProfileHeader from '../../components/UserProfile/ProfileHeader';
import Profile, { ProfileButtons } from '../../components/UserProfile/FriendProfileInfo';
import Entypo from 'react-native-vector-icons/Entypo';
import { BottomSheetModal, BottomSheetModalProvider, } from '@gorhom/bottom-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { userData } from '../../http';



const UserProfile = () => {
  const [data, setData] = useState([])
  console.log(data);
  const getUserData = async () => {
    try {
      const res = await userData()
      // console.log(res.data.user.phone)
      setData(res.data.user)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUserData()
  }, [])

  const dispatch = useDispatch()

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['80%', '80%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  //logout function
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



  // Loop to create Highlight 

  let circle = [];
  let numberofcircle = 20;
  for (let index = 0; index < numberofcircle; index++) {
    circle.push(
      <View key={index} style={{}}>
        {
          index === 0 ? (
            <View style={{ width: 60, height: 60, borderRadius: 100, borderWidth: 1, opacity: 0.7, marginHorizontal: 5, justifyContent: 'center', borderColor: '#FF4D67', alignItems: 'center' }}>
              <Entypo name='plus' style={[{ fontSize: 40, color: '#FF4D67', }]} />
            </View>
          ) :
            (
              <View style={{ width: 60, height: 60, borderRadius: 100, borderWidth: 1, opacity: 0.5, marginHorizontal: 5, justifyContent: 'center', borderColor: '#FF4D67', alignItems: 'center', backgroundColor: 'black' }}></View>
            )
        }
      </View>)
  }

  return (
    <>
      <BottomSheetModalProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor={'black'} />
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
          <View style={{ paddingVertical: 12 }}>
            <ProfileHeader username={data.username} onPress={handlePresentModalPress} />
          </View>
          <View style={tw`h-[1px] bg-gray-200`}></View>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
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
          {/* <ContentTabs /> */}
          {/* </ScrollView> */}
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          // enableOverDrag
          // enableHandlePanningGesture
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
            {/* <Pressable style={{width:'100%', height:50, justifyContent:'center', alignItems:'center'}} android_ripple={{color:'gray'}}>
              <View style={{width:'90%', height:45, flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='star' size={30}  color={'#FF4D67'}/>
                <Text style={[{fontSize:25, paddingLeft:5, color:'#FF4D67'}]}>Favorites</Text>
              </View>
            </Pressable> */}
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </>

  )
}

export default UserProfile

const styles = StyleSheet.create({})