import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import SwiperFlatlist from 'react-native-swiper-flatlist';

import ReelsData from '../../data/ReelsData';
import SingleReel from './SingleReel';
const ReelsComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleChangeIndexValue = ({index}) => {
        setCurrentIndex(index)
    } 
    return (
        <SwiperFlatlist
            data={ReelsData}
            onChangeIndex={handleChangeIndexValue}
            renderItem={({item, index}) => <SingleReel item={item} index={index} currentIndex={currentIndex}/>}
            keyExtractor={(item, index)=>index}
            vertical 
        />
    )
}

export default ReelsComponent

const styles = StyleSheet.create({})