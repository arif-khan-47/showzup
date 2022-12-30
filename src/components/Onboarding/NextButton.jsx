import { View, Text, TouchableOpacity, Animated } from 'react-native'
import {React, useEffect, useRef} from 'react'
import { Link } from '@react-navigation/native'
import tw from 'twrnc'
import OnboardingData from '../../data/OnboardingData'



const NextButton = ({scrollTo}) => {
// const progressAnimation = useRef(new Animated.Value(0)).current;
// const progressRef=useRef(null);

  return (
        <TouchableOpacity onPress={scrollTo}>
      <View style={tw`bg-[#FF4D67] mx-4 my-5 rounded-full h-12`}>
        <Text style={tw`text-white mx-auto my-auto text-lg font-semibold`}>Next</Text>
      </View>
       </TouchableOpacity>
    )
}

export default NextButton