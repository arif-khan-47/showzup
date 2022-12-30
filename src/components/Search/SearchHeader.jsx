import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'


const SearchHeader = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingVertical: 10, position: 'relative' }}>
      <Ionicons name='search' style={{ fontSize: 18, opacity: 0.7, position: 'absolute', zIndex: 1, left: 25 }} />
      <TextInput style={{ width: '94%', backgroundColor: '#EBEBEB', borderRadius: 10, alignItems: 'center', justifyContent: 'center', fontSize: 15, padding: 4, paddingLeft: 40 }}
        placeholder="Search"
        placeholderTextColor={'rgba(255,77,103,0.5)'}
      />
    </View>
  )
}

export default SearchHeader

const styles = StyleSheet.create({})