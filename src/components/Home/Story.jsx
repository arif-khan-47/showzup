import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import StoriesData from '../../data/StoriesData'
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native'


const Story = () => {
    const navigation = useNavigation()
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 20, paddingHorizontal: 15, borderBottomColor:'rgba(255,77,103,0.4)', borderBottomWidth:0.3,}}>
            {
                StoriesData.map((data, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={()=> navigation.push("Status",{name:data.username, image:data.avatar})}>
                            <View style={{ flexDirection: 'column', paddingHorizontal: 8, position: 'relative' }}>
                                {
                                    data.id == 1 ? (
                                        <View style={{ position: 'absolute', bottom: 15, right: 10, zIndex: 1 }}>
                                            <Entypo name='circle-with-plus' style={{ fontSize: 20, color: '#FF4D67', backgroundColor: 'white', borderRadius: 100 }} />
                                        </View>
                                    ) : null}
                                <View style={{ width: 68, height: 68, backgroundColor: 'white', borderWidth: 1.8, borderRadius: 100, borderColor: '#FF4D67', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={{
                                            uri: data.avatar
                                        }}
                                        style={{ resizeMode: 'cover', width: '92%', height: '92%', borderRadius: 100, backgroundColor: 'gray' }}
                                    />
                                </View>
                            <Text style={{textAlign:'center', fontSize:12, opacity: data.id == 0 ? 1: 0.5}}>{data.username}</Text>
                            </View>
                        </TouchableOpacity>
                    )

                })
            }
        </ScrollView>
    )
}

export default Story

const styles = StyleSheet.create({})