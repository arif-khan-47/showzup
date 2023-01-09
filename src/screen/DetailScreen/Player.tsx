import { View, Text, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import Video from 'react-native-video';

const Player = ({ route }) => {
    const { data } = route.params;
    const videoNode = useRef(null)
    console.log(data)
    return (
        <>
            <View style={{ width: '100%', height: '50%' }}>
                <Video
                    ref={videoNode}
                    style={{ width: '100%', height: '100%' }}
                    source={{
                        uri: data.source_link
                        // 'https://shree-data.s3.ap-south-1.amazonaws.com/Drugo%60tsav/Drugo%20tsav2/1080p.m3u8'
                        // 'https://shree-data.s3.ap-south-1.amazonaws.com/Drugo%60tsav/Drugo%20tsav2/1080p.m3u'

                    }}
                    autoplay
                />
            </View>
            <ScrollView style={{ width: '100%', height: '50%', backgroundColor: 'black' }}>
                <Text style={{ fontSize: 25, color: '#ff6600', paddingHorizontal: 10, paddingTop: 15, fontWeight: '800' }}>
                    {data.name}
                </Text>
                <Text style={{ fontSize: 20, color: 'white', paddingHorizontal: 10, paddingVertical: 2 }}>
                    {data.description}
                </Text>
                <Text style={{ fontSize: 20, color: 'white', paddingHorizontal: 10, paddingVertical: 10 }}>
                    Duration: {data.duration} s
                </Text>
                <Text style={{ fontSize: 20, color: 'gray', paddingHorizontal: 10, paddingVertical: 10 }}>
                    {data.content_offering_type}
                </Text>
            </ScrollView>
        </>
    )
}

export default Player


// import React, { useRef } from 'react';
// import { View, Text } from 'react-native';
// import Video from 'react-native-video';

// const Video = () => {
//   const videoRef = useRef(null);

//   return (
//     <View style={{ flex: 1 }}>
//       <Video
//         ref={videoRef}
//         source={{ uri: 'https://your-hls-video-url.m3u8' }}
//         style={{ flex: 1 }}
//       />
//     </View>
//   );
// };

// export default Video;