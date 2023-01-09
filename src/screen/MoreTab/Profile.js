import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from 'twrnc'
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { updateProfile, userData } from '../../http';







const Profile = ({ navigation }) => {
  //updating consts
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");




  const [data, setData] = useState([])
  // console.log(data);
  const getUserData = async () => {
    try {
        const res = await userData()
        // console.log(res.data.user.phone)
        setData(res.data.user)
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
  getUserData()
}, [])




  async function editProfile() {
    try {
      const res = await updateProfile({ name, email, username, phone, address });
      // console.log(res.data.message);
      showMessage({
        message: res.data.message,
        type: "success",
      });
    } catch (err) {
      console.log(err)
    }
  }




  return (
    <>
      <FlashMessage position="top" />
      <View style={[{ flex: 1 }]}>
        <ScrollView style={[{}, tw`pt-5 mx-5`]}>
          <View style={{}}>
            <View style={tw`m-auto bg-gray-200 rounded-full p-3`}>
              <TouchableOpacity>
                <Image
                  style={tw`h-25 w-25`}
                  source={{
                    uri: null || 'https://img.icons8.com/material-rounded/384/d1d5db/user.png',
                  }}
                />
                <View>
                  <Image
                    style={tw`h-8 w-8 absolute ml-20 -mt-5 bg-white rounded-lg`}
                    source={{
                      uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1668000159/ELO/image-removebg-preview_erkqtn.png'
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[tw`bg-gray-200 rounded-xl my-2`]}>
            <TextInput style={tw`px-5`}
              placeholder='Name'
              defaultValue={data.name}
              onChangeText={(newName) => { setName(newName) }}
            />
          </View>

          <View style={[tw`bg-gray-200 rounded-xl my-2`]}>
            <TextInput style={tw`px-5`}
              placeholder='Username'
              //  keyboardType='email-address'
              //  textContentType='emailAddress'
              // autoFocus={true}
              defaultValue={data.username}
              onChangeText={(newUsername) => setUsername(newUsername)}
            />
          </View>

          <View style={[tw`bg-gray-200 rounded-xl my-2 flex-row justify-between`]}>
            <TextInput style={tw`px-5`}
              placeholder='Email'
              keyboardType='email-address'
              textContentType='emailAddress'
              // autoFocus={true}
              defaultValue={data.email}
              onChangeText={(newEmail) => setEmail(newEmail)}
            />
            <Image
              style={tw`w-5 h-5 mx-5 my-auto`}
              source={{
                uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/96/null/external-mail-accounting-tanah-basah-glyph-tanah-basah.png',
              }}
            />
          </View>

          <View style={[tw`bg-gray-200 rounded-xl my-2`]}>
            <TextInput style={tw`px-5`}
              placeholder='Phone Number'
             keyboardType='numeric'
             textContentType='telephoneNumber'
             defaultValue={data.phone}
              onChangeText={(newPhone) => setPhone(newPhone)}
            />
          </View>

          <View style={[tw`bg-gray-200 rounded-xl my-2 flex-row justify-between`]}>
            <TextInput style={tw`px-5 w-[80%]`}
              placeholder='Address'
              defaultValue={data.address}
              onChangeText={(newAdd) => setAddress(newAdd)}
            />
            <Image
              style={tw`w-5 h-5 mx-5 my-auto`}
              source={{
                uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/384/null/external-location-library-tanah-basah-glyph-tanah-basah.png',
              }}
            />
          </View>

        </ScrollView>
        <View style={[{ position: 'relative', bottom: 0, left: 0, right: 0 }, tw`py-2 bg-gray-100`]}>
          {/* <NextSkipButton skipTo='Gender' nextTo='Gender'/> */}
          <View style={[styles.container, tw`my-auto flex-row`]}>
            <TouchableOpacity onPress={() => navigation.navigate('PIN')}>
              <View style={[tw`bg-[#FFEDF0] py-4 px-15 rounded-full`]}>
                <Text style={tw`text-[#FF4D67]`}>Skip</Text>
              </View>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => navigation.navigate('PIN')}> */}
            {/* <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}> */}
            <TouchableOpacity onPress={editProfile}>


              <View style={[tw`bg-[#FF4D67] py-4 px-15 rounded-full`]}>
                <Text style={tw`text-white`}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  }
})