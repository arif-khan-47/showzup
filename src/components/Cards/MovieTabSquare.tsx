import { View, Text, FlatList, Image, Dimensions, ScrollView,Pressable } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const { width, height } = Dimensions.get('window');
const MovieTabSquare = ({ data, title }) => {
    // console.log(data)
    const navigation = useNavigation();
    return (
        <>
            <ScrollView style={{}}>
                <Text style={{ color: 'white', marginHorizontal: 10, marginVertical: 10, fontWeight: '700', fontSize: 20, display: title == null || undefined ? 'none' : 'flex' }}>{title}</Text>
                <FlatList
                    data={data}
                    // style={{}}
                    // pagingEnabled
                    keyExtractor={data.id}
                    // horizontal
                    // style={{flexDirection:'row'}}
                    contentContainerStyle={{
                        // justifyContent: 'flex-start',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                    renderItem={({ item }) =>
                        <Pressable onPress={() => navigation.navigate("SingleMovie", { name: item.name, poster: item.poster, description: item.description, cast: item.cast, seasons:item.seasons, id:item._id, slug:item.slug  })}>
                            <View style={{
                                height: height / 7,
                                width: width / 3, // width:width*0.8
                                marginVertical: 10
                            }}>
                                <Image
                                    style={{ backgroundColor: '#FF6600', height: '100%', width: '90%', borderRadius: 10, marginLeft: 'auto', marginRight: 'auto' }}
                                    source={{
                                        uri: item.poster
                                    }}
                                />
                            </View>

                        </Pressable>
                    }
                />

            </ScrollView>
        </>
    )
}

export default MovieTabSquare
