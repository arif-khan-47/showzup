import { View, Text, Animated, useWindowDimensions, StyleSheet} from 'react-native'
import { scale,} from 'react-native-size-matters';
import React from 'react'
import tw from 'twrnc'
import NextButton from './NextButton';

const Pagination = ({data, scrollX}) => {
    const {width}=useWindowDimensions()
  return (
    <View style={{flexDirection:'row', marginTop:scale(40)}}>
      {data.map((_,i)=>{
        const inputRange=[(i-1)*width, i*width, (i+1)*width];
        const active= scrollX.interpolate({
            inputRange,
            outputRange:[8,35,8],//width of the pagination dottt
            extrapolate:'clamp',
        })
        const opacity= scrollX.interpolate({
            inputRange,
            outputRange:[0.3,1,0.3],
            extrapolate:'clamp',
        })
        return<Animated.View style={[style.dot, {width:active, opacity}]} key={i.toString()}></Animated.View>
      })}
    </View>
  )
}

export default Pagination

const style =StyleSheet.create({
dot:{
    height:scale(8),
    borderRadius:scale(25),
    backgroundColor:"#FF4D67",
    marginHorizontal:scale(2), 
    
}
})



//E0E0E0