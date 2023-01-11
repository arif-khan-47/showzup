import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import React from 'react'
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
const BigContent = ({ data }) => {
    // console.log(data);
    const navigation = useNavigation();
   const sd = data[0]
   console.log(sd)


    return (
        <>
            <FlatList
                data={data}
                pagingEnabled
                keyExtractor={data.id}
                horizontal
                renderItem={({ item }) =>
                    <View style={{
                        height: height / 1.4,
                        width: width, // width:width*0.8
                        marginVertical: 10
                    }}>

                        <View style={{ height: '100%', width: '100%', position: 'relative' }}>
                            <Image
                                style={{ backgroundColor: '#FF6600', height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                                source={{
                                    uri: item.poster
                                }}
                            />
                            <LinearGradient colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.4)', 'rgba(0,0,0,1)']} style={{ position: 'absolute', height: '100%', width: '100%', bottom: 0 }}>

                                <View style={{ bottom: 0, left: 0, right: 0, top: '60%', position: 'absolute', paddingHorizontal: 10 }}>
                                    <Image
                                        style={{ width: '25%', height: '15%' }}
                                        source={{
                                            uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1672294964/showsup/showzup_logo_1_eouboh.png',
                                        }}
                                    />
                                    <Text style={{ fontWeight: '700', fontSize: 30, marginLeft: 5, color: 'white', paddingTop: 10 }}>{item.name}</Text>
                                    <Text style={{ marginLeft: 5, color: 'white', fontSize: 15 }}>{item.catagory}.<Text style={{ color: '#FF6600' }}> {item.createdAt.slice(0,4)}</Text>. {item.duration}</Text>

                                    <View style={{ position: 'absolute', bottom: '10%', width: '106%', height: '23%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '2%' }}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("SingleMovie",{name:item.name, poster:item.poster, description:item.description, cast:item.cast, seasons:item.seasons})}
                                            style={{ backgroundColor: '#FF6600', width: '48%', height: '100%', borderRadius: 10 }}>
                                            <Text style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', color: 'white', fontWeight: '700', fontSize: 16 }}>
                                                Play Now
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ backgroundColor: 'black', width: '48%', height: '100%', borderRadius: 10 }}>
                                            <Text style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', color: 'white', fontWeight: '700', fontSize: 16 }}>
                                                Trailer
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </LinearGradient>

                        </View>
                    </View>
                }
            />
        </>
    )
}

export default BigContent
