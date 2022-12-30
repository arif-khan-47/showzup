import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { interest } from '../../http'



const InterestMenu = () => {
    const [data, setData] = useState([])
    const [selectedInterest, setSelectedInterest] = useState({
        items: []
    })
    console.log(selectedInterest)


    const getAllintersts = async () => {
        try {
            const response = await interest()
            // console.log(response.data)
            setData(response.data.interest)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllintersts()
    }, [])


    const onSelect = (i, selected) => {
        const tempData = data
        var newArray = [...data]
        let obj = newArray[i]
        console.log(obj)
        obj['selected'] = selected
        newArray[i] = obj

        setData(newArray)
    }



    return (
        <FlatList
            data={data}
            contentContainerStyle={[{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }, tw`mx-5`]}

            renderItem={({ item, index }) => {
                console.log(item)
                return (

                    <TouchableOpacity key={index} onPress={() => onSelect(index, item.selected ? false : true)}>
                        <View style={[tw`border-[#FF4D67] my-2 border-2 mx-1 px-2 rounded-full`, { backgroundColor: item.selected ? '#FF4D67' : null }
                        ]}>
                            <Text style={[tw`mx-auto p-2 my-auto font-semibold`,
                            { color: item.selected ? 'white' : '#FF4D67' }
                            ]}>{item.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            }}

        />

    )
}

export default InterestMenu