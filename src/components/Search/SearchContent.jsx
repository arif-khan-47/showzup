import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SearchData from '../../data/SearchData'


const SearchContent = (props) => {
    return (
        <View style={{}}>
            {
                SearchData.map((data, index) => {
                    return (
                        <>
                            {data.id === 0 ? (
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                    {
                                        data.image.map((imgData, imgIndex) => {
                                            return (
                                                <TouchableOpacity
                                                onPressIn={()=>props.data(imgData)}
                                                onPressOut={()=>props.data(null)}
                                                style={{ paddingBottom: 2 , paddingHorizontal:2 }}>
                                                    <Image
                                                        source={{
                                                            uri: imgData
                                                        }}
                                                        style={{ width: 110, height: 110, resizeMode:'stretch',}}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                            ) : null}
                            {
                                data.id === 1 ? (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{flexDirection:'row', flexWrap:'wrap', width:261}}>
                                            {
                                                data.image.slice(0, 4).map((imgData, imgIndex) => {
                                                    return (
                                                        <TouchableOpacity 
                                                        onPressIn={()=>props.data(imgData)}
                                                onPressOut={()=>props.data(null)}
                                                        style={{ paddingBottom: 2, paddingHorizontal:2  }}>
                                                            <Image
                                                                source={{
                                                                    uri: imgData
                                                                }}
                                                                style={{ width: 100, height: 100 }}
                                                            />
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </View>
                                        
                                        <TouchableOpacity style={{paddingLeft:1}}>
                                            <Image 
                                            source={{
                                                uri: data.image[4]
                                            }}
                                            style={{width:129, height:200, backgroundColor:"green"}}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ) : null
                            }
                            {data.id === 0 ? (
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                    {
                                        data.image.map((imgData, imgIndex) => {
                                            return (
                                                <TouchableOpacity
                                                onPressIn={()=>props.data(imgData)}
                                                onPressOut={()=>props.data(null)}
                                                style={{ paddingBottom: 2 , paddingHorizontal:2 }}>
                                                    <Image
                                                        source={{
                                                            uri: imgData
                                                        }}
                                                        style={{ width: 110, height: 110, resizeMode:'stretch',}}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                            ) : null}
                        </>
                    )
                })
            }
        </View>
    )
}

export default SearchContent

const styles = StyleSheet.create({})