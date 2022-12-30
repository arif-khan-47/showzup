import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FriendProfile from '../../data/FriendProfile'
import tw from 'twrnc'
import AntDesign from 'react-native-vector-icons/AntDesign'



const Notification = ({ navigation }) => {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', borderBottomWidth: 0.5, borderBottomColor: 'rgba(255,77,103,0.4)', padding: 10, color: 'rgb(255,77,103)' }}>Notification</Text>

      <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
        <Text style={{ fontWeight: 'bold' }}>This Week</Text>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          {
            FriendProfile.slice(0, 3).map((data, index) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('FriendProfile', {
                  id: data.id,
                  username: data.username,
                  avatar: data.avatar,
                  isfollow: data.isfollow,
                  follower: data.followers,
                  following: data.following,

                })} key={index}>
                  <Text>{data.username}, </Text>
                </TouchableOpacity>
              )
            })
          }
          <Text> started following you.</Text>
        </View>
        <Text style={{ fontWeight: 'bold' }}>Earlier</Text>
        {
          FriendProfile.slice(3, 6).map((data, index) => {
            const [follow, setFollow] = useState(data.isfollow)
            return (
              <View key={index} style={{ width: '100%', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, width: '100%' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('FriendProfile', {
                    id: data.id,
                    username: data.username,
                    avatar: data.avatar,
                    isfollow: data.isfollow,
                    follower: data.followers,
                    following: data.following,

                  })} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', maxWidth: '64%', }}>
                    <Image
                      source={{
                        uri: data.avatar
                      }}
                      style={{ width: 45, height: 45, borderRadius: 100, marginRight: 10 }}
                    />
                    <Text style={{ fontSize: 15, }}>
                      <Text>
                        {data.username}
                      </Text>
                      <Text style={{ flexWrap: 'wrap' }}>
                        , who you might know, is on Elo.
                      </Text>
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: 72 }} onPress={() => setFollow(!follow)}>
                    <View style={{
                      width: follow ? 70 : 68, height: 30, borderRadius: 5, backgroundColor: follow ? null : 'rgb(255,77,103)', justifyContent: 'center', borderWidth: follow ? 1 : 0, borderColor: follow ? 'rgb(255,77,103)' : null, alignItems: 'center'
                    }}>
                      <Text style={{ color: follow ? 'rgb(255,77,103)' : 'white', }}>
                        {follow ? 'following' : 'follow'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        <Text style={{ fontWeight: 'bold', paddingVertical: 10 }}>Suggestions for you</Text>
        {
          FriendProfile.slice(6, 10).map((data, index) => {
            const [follow, setFollow] = useState(data.isfollow)
            const [close, setClose] = useState(false)
            return (
              <View key={index}>
                {
                  close ? null : (
                    <View style={{ paddingVertical: 10, flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                      <View style={{}}>
                        <TouchableOpacity onPress={() => navigation.navigate('FriendProfile', {
                          id: data.id,
                          username: data.username,
                          avatar: data.avatar,
                          isfollow: data.isfollow,
                          follower: data.followers,
                          following: data.following,

                        })} style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          maxWidth: '64%'
                        }}  >
                          <Image
                            source={{
                              uri: data.avatar
                            }}
                            style={{ width: 45, height: 45, borderRadius: 100, marginRight: 10 }}
                          />
                          <View
                            style={{ width: '100%' }}
                          >
                            <Text style={[{ fontSize: 14, color: 'black' },]}>
                              {data.username}
                            </Text>
                            <Text style={[{ fontSize: 12, opacity: 0.5, }]}>
                              {data.name}
                            </Text>
                            <Text style={[{ fontSize: 12, opacity: 0.5, }]}>
                              Suggesested for you.
                            </Text>

                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                          follow ? (
                            <TouchableOpacity onPress={() => setFollow(!follow)} style={{ width: follow ? 90 : 68 }}>
                              <View style={{
                                width: '100%', height: 30, borderRadius: 5, backgroundColor: follow ? null : 'rgb(255,77,103)', borderWidth: follow ? 1 : 0, borderColor: 'rgb(255,77,103)', justifyContent: 'center', alignItems: 'center'
                              }}>
                                <Text style={{ color: follow ? 'rgb(255,77,103)' : 'white' }}>
                                  {follow ? 'unfollow' : 'follow'}
                                </Text>
                              </View>
                            </TouchableOpacity>
                          )
                            : (
                              <>
                                <TouchableOpacity style={{ width: follow ? 90 : 68 }} onPress={() => setFollow(!follow)}>
                                  <View style={{
                                    width: '100%', height: 30, borderRadius: 5, backgroundColor: follow ? null : 'rgb(255,77,103)', borderWidth: follow ? 1 : 0, borderColor: 'rgb(255,77,103)', justifyContent: 'center', alignItems: 'center'
                                  }}>
                                    <Text style={{ color: follow ? 'rgb(255,77,103)' : 'white' }}>
                                      {follow ? 'following' : 'follow'}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => setClose(true)}>
                                  <AntDesign name='close' style={{ fontSize: 14, color: 'black', opacity: 0.5 }} />
                                </TouchableOpacity>
                              </>
                            )}
                      </View>
                    </View>
                  )}
              </View>
            )
          })}
        <View style={{ padding: 20 }}>
          <Text style={{ color: 'rgb(255,77,103)' }}>
            see all suggestions
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})