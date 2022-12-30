import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Pressable, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import tw from 'twrnc'



const StatusView = ({ route, navigation }) => {

  const { name } = route.params;
  const { image } = route.params;

  useEffect(() => {
    let timer = setTimeout(()=>{
      navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue:5,
      duration: 5000,
      useNativeDriver: false
    }).start();
    return()=> clearTimeout(timer)
  }, [])
  

  const [progress, setProgress] = useState(new Animated.Value(0))
  const progressAnimation = progress.interpolate({
    inputRange:[0, 5],
    outputRange:['0%', '100%']
  })

  return (
    <View style={{ backgroundColor: 'black', height: '100%', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar backgroundColor={'black'} barStyle='light-content' />
      <View style={{ height: 3, width: '95%', borderWidth: 1, backgroundColor: 'gray', position: 'absolute', top: 18, zIndex:1 }}>
        <Animated.View style={{ height: '100%', backgroundColor: 'white', width: progressAnimation, }}></Animated.View>
      </View>
      <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 12, left: 0, width: '90%', zIndex:1 }}>
          <View style={{ borderRadius: 100, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{
              uri: image
            }}
            style={{ borderRadius: 100, backgroundColor: 'pink', resizeMode: 'cover', width: '92%', height: '92%' }}
            />
        </View>
        <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%'}}>
          <Text style={[{color:'white', fontSize:15, paddingLeft:8}, tw`my-auto`]}>{name}</Text>
          <View>
          <Pressable onPress={()=>navigation.goBack()} style={{borderRadius:100}}>
            <Ionicons name='close' style={{fontSize:25, color:'white', opacity:0.5}}/>
          </Pressable>
          </View>
        </View>
      </View>
      <Image 
      source={{
        uri:image
      }}
      style={{position:'absolute', width:'100%', height:'100%', resizeMode:'contain',}}
      />
      <View style={{position:'absolute', bottom:0, left:0, flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginVertical:10, width:'100%'}}>
        <TextInput placeholder='send message' placeholderTextColor='white' style={{borderColor:'white', borderRadius:25, width:'85%', height:50, paddingLeft:20, borderWidth:1, color:'white'}} />
        <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Feather name='navigation' style={{fontSize:30, color:'white', }}/>
        </TouchableOpacity>

      </View>

    </View> 
  )
}

export default StatusView

const styles = StyleSheet.create({})