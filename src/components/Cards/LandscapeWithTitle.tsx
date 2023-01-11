import { View, Text, FlatList, Image, Dimensions, Pressable } from 'react-native';
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import tw from 'twrnc'



const { width, height } = Dimensions.get('window');
const LandscapeWithTitle = ({ data }) => {
    const navigation = useNavigation()
    return (
        <>
            <FlatList

                data={data}
                // pagingEnabled
                keyExtractor={data.id}
                horizontal
                renderItem={({ item }) =>
                    <Pressable onPress={()=>navigation.navigate(item.navigate)}>
                        <View style={{
                            height: height / 8,
                            width: width / 2 * 0.9,
                            marginVertical: 20,
                        }}>
                            <View style={[{ position: 'relative', height: '100%', width: '90%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto' }]}>
                                <Image
                                    style={{ backgroundColor: '#FF6600', height: '100%', width: '100%', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto' }}
                                    source={{
                                        uri: item.img
                                    }}
                                />
                                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 15 }}>
                                    <Text style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontWeight: '700', color: 'white', fontSize: 20 }}>{item.title}</Text>
                                </View>
                            </View>
                        </View>

                    </Pressable>
                }
            />

        </>
    )
}

export default LandscapeWithTitle
