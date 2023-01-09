import { View, Text, FlatList, Image, Dimensions, Pressable } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'



const { width, height } = Dimensions.get('window');
const Header = ({ data }) => {
    // console.log(data)
    const navigation = useNavigation();
    return (
        <FlatList
            data={data}
            pagingEnabled
            keyExtractor={data.id}
            horizontal
            renderItem={({ item }) =>
                <Pressable onPress={() => navigation.navigate("SingleMovie",{name:item.name, poster:item.poster, description:item.description, cast:item.cast, seasons:item.seasons})}>
                    <View style={{
                        height: height / 3,
                        width: width, // width:width*0.8
                        marginVertical: 20
                    }}>
                        <Image
                            style={{ backgroundColor: '#FF6600', height: '100%', width: '96%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto' }}
                            source={{
                                uri: item.thumbnail
                            }}
                        />
                    </View>

                </Pressable>
            }
        />
    )
}

export default Header
