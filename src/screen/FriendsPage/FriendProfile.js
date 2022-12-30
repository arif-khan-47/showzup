import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FriendProfileInfo, { ProfileButtons } from '../../components/UserProfile/FriendProfileInfo'
import FriendProfileData from '../../data/FriendProfile'
import AntDesign from 'react-native-vector-icons/AntDesign'



const FriendProfile = ({ route, navigation }) => {
  const { username, avatar, isfollow, follower, following } = route.params
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'white', padding: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' style={{ color: 'black', fontSize: 20, color: '#FF4D67', }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '92%' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', width: 200, marginLeft: 10 }}>{username}</Text>
          <Feather name='more-vertical' style={{ fontSize: 20, color: '#FF4D67' }} />
        </View>
      </View>
      <FriendProfileInfo
        username={username}
        avatar={avatar}
        isfollow={isfollow}
        follower={follower}
        following={following}
      />
      <ProfileButtons id={1} />
      <Text style={{
        paddingVertical: 10, fontSize: 15, fontWeight: 'bold'
      }}>
        Suggested for you
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
        {
          username === FriendProfile.username ? null :
            FriendProfileData.map((data, index) => {
              const [isFollow, setIsFollow] = useState(false)
              const [close, setClose] = useState(false)

              return (
                <View key={index}>
                  {
                    data.username === username || close ? null :
                      (
                        <View style={{ height: 200, width: 160, margin: 3, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#FF4D67', borderRadius: 2, position: 'relative' }}>
                          <Pressable style={{ position: 'absolute', top: 10, right: 10 }} onPress={()=>setClose(!close)}>
                            <AntDesign name='close' style={{ fontSize: 18, color: '#FF4D67' }} />
                          </Pressable>
                          <Image
                            source={{
                              uri: data.avatar
                            }}
                            style={{
                              width: 80,
                              height: 80,
                              borderRadius: 100,
                              margin: 10
                            }}
                          />
                          <Text style={{ fontSize: 16 }}>{data.name}</Text>
                          <Text style={{ fontSize: 12 }}>{data.username}</Text>
                          <TouchableOpacity style={{ width: '80%', paddingVertical: 10 }} onPress={() => setIsFollow(!isFollow)}>
                            <View style={{width:'100%', height:30, justifyContent:'center', alignItems:'center', borderRadius:5 , borderWidth:isFollow?0:1, borderColor:'#FF4D67',backgroundColor: isFollow ? '#FF4D67':'white'}}>
                              <Text style={{color:isFollow?'white':'#FF4D67', paddingHorizontal:30}}>
                                {isFollow ? 'Follow' : 'Unfollow'}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      )
                  }
                </View>
              )

            })}
      </ScrollView>
    </View>
  )
}

export default FriendProfile

const styles = StyleSheet.create({})