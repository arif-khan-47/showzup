import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { search } from '../../http';


const SearchPage = ({ navigation }) => {

    const [searchInput, setSearchInput] = useState("");
    // console.log(searchInput)
    const [data, setData] = useState([])
    // console.log(data)

    async function getSearchContent() {
        // console.log('Getting all movies');
        try {
            const response = await search(searchInput);
            // console.log(response.data.data);
            setData(response.data.data)
        } catch (error) {

        }

    }

    useEffect(() => {
        getSearchContent()
    }, [])
    // console.log(data)

    return (
        <>

            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingVertical: 10, position: 'relative', flexDirection: 'row', backgroundColor: 'black' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '20%' }}>

                    <Ionicons name='chevron-back-outline' style={{ fontSize: 25, color: '#FF6600', backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', padding: 10, borderRadius: 25 }} />
                </TouchableOpacity>


                <View style={{ width: '80%' }}>
                    <Pressable onPress={getSearchContent}>
                        <Ionicons name='search' style={{ fontSize: 26, position: 'absolute', zIndex: 1, right: 10, color: '#FF6600', backgroundColor: 'white', width: '20%', padding: 10, paddingLeft: 20, borderTopRightRadius: 25, borderBottomRightRadius: 25 }} />
                    </Pressable>

                    <TextInput style={{ width: '80%', backgroundColor: 'white', borderTopLeftRadius: 25, borderBottomLeftRadius: 25, alignItems: 'center', justifyContent: 'center', fontSize: 15, padding: 10.2, paddingLeft: 20, right: 0, }}
                        placeholder="Search Movies, Shows Etc"
                        placeholderTextColor={'gray'}
                        autoFocus={true}
                        onChange={getSearchContent}
                        defaultValue={searchInput}
                        onChangeText={(newText) => setSearchInput(newText)}
                    />
                </View>


            </View>
            <ScrollView style={{ width: '100%', height: '100%', backgroundColor: 'black', }}>

                {
                    searchInput == '' ?
                        <>
                            <View style={{ paddingVertical: 20, }}>
                                <Text style={{ color: 'gray', textAlign: 'center', fontSize: 18 }}>Please type something in input feild and click on search icon</Text>
                            </View>
                        </>
                        :
                        <>
                            <FlatList
                                data={data}
                                keyExtractor={data.id}
                                // pagingEnabled
                                // horizontal
                                renderItem={({ item }) =>
                                    <TouchableOpacity onPress={() => navigation.navigate("SingleMovie", { name: item.name, poster: item.poster, description: item.description, cast: item.cast, seasons:item.seasons, id:item._id, slug:item.slug })}>
                                        <View style={{ width: '100%', paddingHorizontal: 10, flexDirection: 'row', paddingVertical: 5 }}>
                                            <View style={{ width: '20%', padding: 2 }}>
                                                <Image
                                                    style={{ height: 60, width: '100%', borderRadius: 10 }}
                                                    source={{
                                                        uri: item.poster,
                                                    }}
                                                />
                                            </View>

                                            <View style={{ width: '80%', padding: 2 }}>
                                                <Text style={{ color: 'white', marginLeft: 10, marginTop: 'auto', marginBottom: 'auto', fontSize: 20 }}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }

                            />

                        </>
                }
            </ScrollView>
        </>
    )
}

export default SearchPage