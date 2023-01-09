import { View, Text, FlatList, Image, Dimensions, Pressable } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const FullPortrait = ({ data, title }) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={{ paddingVertical: 10 }}>
                <Text style={{ color: '#FF6600', marginHorizontal: 10, fontWeight: '700', fontSize: 20, display: title == null || undefined ? 'none' : 'flex' }}>{title}</Text>
                <FlatList
                    data={data}
                    // style={{}}
                    // pagingEnabled
                    keyExtractor={data.id}
                    horizontal
                    renderItem={({ item }) =>
                        <Pressable onPress={() => navigation.navigate("SingleMovie", { name: item.name, poster: item.poster, description: item.description, cast: item.cast, seasons:item.seasons })}>

                            <View style={{
                                height: height / 5,
                                width: width / 4 * 0.9, // width:width*0.8
                                marginVertical: 10
                            }}>
                                <Image
                                    style={{ backgroundColor: '#FF6600', height: '100%', width: '90%', borderRadius: 2, marginLeft: 'auto', marginRight: 'auto' }}
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

export default FullPortrait 
