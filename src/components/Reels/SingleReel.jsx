import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Pressable, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import tw from 'twrnc'
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';






const SingleReel = ({ item, index, currentIndex }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const videoRef = useRef(null)
    const onBuffer = buffer => {
        console.log('Buffering', buffer)
    }
    const onError = error => {
        console.log('error....', error)
    }


    const [muting, setMuting] = useState(false)
    const [like, setLike] = useState(item.isLike)




    return (
        <View style={{ height: windowHeight, width: windowWidth, position: 'relative' }}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => setMuting(!muting)}
                style={{ height: '100%', width: '100%', position: 'absolute', }}
            >
                <Video
                    videoRef={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat
                    resizeMode='contain'
                    paused={currentIndex === index ? false : true}
                    muted={muting}
                    poster='https://res.cloudinary.com/drtldr4nl/image/upload/v1668667983/ELO/Loading_hvuzua.png'
                    source={{
                        uri: item.video
                    }}
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',

                    }}
                />
            </TouchableOpacity>
            <Ionicons name='volume-mute' style={[{ fontSize: muting ? 20 : 0, color: 'white', position: 'absolute', top: windowHeight / 2.3, left: windowWidth / 2.3, backgroundColor: 'rgba(52, 52, 52, 0.6)', borderRadius: 100, padding: muting ? 15 : 0 }]} />
            <View style={{ position: 'absolute', width: windowWidth, zIndex: 1, bottom: 80, padding: 10 }}>
                <View style={{}}>
                    <TouchableOpacity style={{ width: 150 }}>
                        <View style={[{ width: 100, flexDirection: 'row', alignItems: 'center' }]}>
                            <View style={[{ width: 32, height: 32, borderRadius: 100, backgroundColor: 'white', margin: 10 }]}>

                                <Image
                                    source={{
                                        uri: item.avatar
                                    }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100 }}
                                />
                            </View>
                            <Text style={[tw`text-white`, { fontSize: 16 }]}>{item.username}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={[tw`text-white`, { fontSize: 14, margin: 10 }]}>{item.caption}</Text>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Ionicons name='ios-musical-note' style={{ color: 'white', fontSize: 16 }} />
                        <Text style={{ color: 'white', fontSize: 16 }}>Original Audio</Text>
                    </View>
                </View>
            </View>



            <View style={{ position: 'absolute', bottom: 80, right: 10, alignItems: 'center', flexDirection: 'column' }}>
                <TouchableOpacity onPress={() => setLike(!like)} style={{ padding: 10 }}>
                    <AntDesign name={like ? "heart" : "hearto"} style={{ color: like ? 'red' : 'white', fontSize: 25 }} />
                    <Text style={{ color: 'white', textAlign: 'center' }}>{item.likeCount}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10 }}>
                    <Ionicons name='ios-chatbubble-outline' style={{ color: 'white', fontSize: 25 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10 }}>
                    <Ionicons name='paper-plane-outline' style={{ color: 'white', fontSize: 25 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10 }}>
                    <Feather name='more-vertical' style={{ color: 'white', fontSize: 25 }} />
                </TouchableOpacity>
                {/*

                <TouchableOpacity style={{padding:10}}>
                    <AntDesign name='hearto' style={{color:'white', fontSize:25}} />
                </TouchableOpacity> */}
                <View style={{ width: 30, height: 30, borderRadius: 10, borderWidth: 2, borderColor: 'white' }}>
                    <Image
                        style={{ width: '100%', height: '100%', borderRadius: 10, resizeMode: 'cover' }}
                        source={{
                            uri: item.avatar
                        }}
                    />
                </View>
            </View>

        </View>
    )
}

export default SingleReel

const styles = StyleSheet.create({})