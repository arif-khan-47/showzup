import { View, Text, FlatList, Image, Dimensions, Pressable } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const { width, height } = Dimensions.get('window');
const SeriesCard = ({ data, title }) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={{ paddingVertical: 10 }}>
                <Text style={{ color: 'white', marginHorizontal: 10, fontWeight: '700', fontSize: 20, display: title == null || undefined ? 'none' : 'flex' }}>{title}</Text>
                <FlatList
                    data={data}
                    // pagingEnabled
                    keyExtractor={data.id}
                    horizontal
                    renderItem={({ item }) =>
                        <Pressable onPress={() => navigation.navigate("SingleMovie", { name: item.name, poster: item.poster, description: item.description, cast: item.cast, seasons: item.seasons })}>
                            <View style={{
                                height: height / 5,
                                width: width / 2, // width:width*0.8
                                marginVertical: 10
                            }}>
                                <Image
                                    style={{ backgroundColor: '#FF6600', height: '100%', width: '94%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto' }}
                                    source={{
                                        uri: item.poster
                                    }}
                                />
                            </View>
                        </Pressable>
                    }
                />

            </View>
        </>
    )
}

export default SeriesCard
