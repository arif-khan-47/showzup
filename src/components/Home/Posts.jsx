import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FeedData from '../../data/FeedData'
import ReadMore from '@fawazahmed/react-native-read-more';

const Posts = () => {

    return (
        <View>
            {
                FeedData.map((data, index) => {
                    const [like, setLike] = useState(data.isLiked)
                    return (
                        <View key={index} style={{ paddingBottom: 10, borderBottomColor: '#FF4D67', borderBottomWidth: 0.3, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Image source={{
                                        uri: data.avatar
                                    }}
                                        style={{ width: 40, height: 40, borderRadius: 100 }}
                                    />
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FF4D67' }}>
                                            {data.username}
                                        </Text>
                                    </View>
                                </View>

                                <Feather name='more-vertical' style={{ fontSize: 20, color: '#FF4D67' }} />
                            </View>
                            <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={{
                                        uri: data.photo
                                    }}
                                    style={{ width: '100%', height: 400, resizeMode: 'cover' }}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 10 }}>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                                    <TouchableOpacity onPress={()=>setLike(!like)}>
                                        <AntDesign name={like ? 'heart' : 'hearto'} style={{ paddingRight: 10, fontSize: 30, color: like ? '#FF4D67' : 'gray' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionicons name='ios-chatbubble-outline' style={{ paddingRight: 10, fontSize: 30, }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather name='navigation' style={{ paddingRight: 10, fontSize: 30, }} />
                                    </TouchableOpacity>
                                </View>
                                <Feather name='bookmark' style={{ paddingRight: 10, fontSize: 28, }} />
                            </View>
                            <View style={{paddingHorizontal:20}}>
                                    <Text>Liked by {like ? "You and" : null} {like ? data.totalLikes + 1: data.totalLikes} others.</Text>
                                    <ReadMore numberOfLines={2} style={{fontWeight:'700', fontSize:14, paddingVertical:2}}>
                                        {data.caption}
                                    </ReadMore>
                                    <Text style={{opacity:0.5, paddingVertical:2}}>View all coments</Text>
                                    <View style={{}}>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Image source={{
                                                uri: data.avatar
                                            }}
                                            style={{width:25, height:25, borderRadius:100, backgroundColor:'pink', marginRight: 10}}
                                            />
                                            <TextInput placeholder='add a comment' style={{opacity:0.5}}/>
                                        </View>
                                    </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Posts

const styles = StyleSheet.create({})