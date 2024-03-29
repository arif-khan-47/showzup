import { View, Text, FlatList, Image, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';



const SeasonCard = ({data}) => {
    const navigation = useNavigation();
    console.log(data)
    const [clicked, setClicked] = useState(true);

    return (
        <>
            <FlatList
                data={data}
                keyExtractor={data?._id}
                renderItem={({ item }) =>
                    <View style={{
                        height: '100%',
                        width: '100%',
                        paddingHorizontal: 20,
                        paddingVertical: 10
                    }}>
                        <Pressable style={{}} onPress={() => { setClicked(!clicked); }}>
                            <View style={{ flexDirection: 'row', width: '50%' }}>
                                <Text style={{ fontWeight: '600', color: clicked ? '#FF6600' : 'white', fontSize: 18 }}>
                                    {item.name}
                                </Text>
                                <Feather name={clicked ? 'chevron-up' : 'chevron-down'} style={{ fontSize: 20, color: clicked ? '#FF6600' : 'white', display: item.name == null ? 'none' : 'flex' }} />
                            </View>

                            {clicked ? (
                                <View
                                    style={{
                                        elevation: 5,
                                        marginTop: 20,
                                        height: '100%',
                                        width: '100%',
                                        backgroundColor: 'black',
                                    }}>
                                    <FlatList
                                        data={item.episodes}
                                        // keyExtractor={data.episodes.id}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <TouchableOpacity onPress={() => navigation.navigate("Player", { data: item })}>
                                                    <View style={{ borderColor: '#FF6600', marginVertical: 10, flexDirection: 'row', }}>
                                                        <Image
                                                            style={{ height: 70, width: '40%', borderRadius: 8, marginTop: 'auto', marginBottom: 'auto', backgroundColor:'#FF6600' }}
                                                            source={{
                                                                uri: item.thumbnail,
                                                            }}
                                                        />
                                                        <View style={{ marginTop: 'auto', marginBottom: 'auto', width: '80%', paddingLeft: 20 }}>
                                                            <Text style={{ color: 'white', fontSize: 10, }}>{item.name}</Text>
                                                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '700', }}>{item.description.slice(0, 15)}</Text>
                                                            <Text style={{ color: 'white', fontSize: 12, }}>{item.description.slice(0, 50)}</Text>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            );
                                        }}
                                    />
                                </View>
                            ) : null}

                        </Pressable>





                    </View>
                }
            />

        </>
    )
}

export default SeasonCard
