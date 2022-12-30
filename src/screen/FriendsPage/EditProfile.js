import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const EditProfile = ({ route, navigation }) => {
    const { username, avatar } = route.params;
    const TostMessage = () => {
        ToastAndroid.show('Profile Updated Successfully', ToastAndroid.SHORT)
    };

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='close-outline' style={{ fontSize: 35, color: '#FF4D67' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: '#FF4D67' }}>Edit Profile</Text>
                <TouchableOpacity onPress={() => {
                    TostMessage()
                    navigation.goBack()
                }}>
                    <Ionicons name='checkmark' style={{ fontSize: 30, color: '#FF4D67' }} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ padding: 20, alignItems: 'center' }}>
                    <Image
                        source={{
                            uri: avatar
                        }}
                        style={{ width: 80, height: 80, backgroundColor: 'black', borderRadius: 100 }}
                    />
                    <Text style={{ color: '#FF4D67', paddingTop: 1 }}>
                        Change Profile
                    </Text>
                </View>
                <View style={{ padding: 10 }}>
                    <View>
                        <Text style={{ color: '#FF4D67', opacity: 0.5 }}>Name</Text>
                        <TextInput style={{ fontSize: 16, borderBottomWidth: 1, borderColor: '#FF4D67' }} placeholder='Name' />
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <View>
                        <Text style={{ color: '#FF4D67', opacity: 0.5 }}>Username</Text>
                        <TextInput style={{ fontSize: 16, borderBottomWidth: 1, borderColor: '#FF4D67' }} placeholder='Username' defaultValue={username} />
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <View>
                        <Text style={{ color: '#FF4D67', opacity: 0.5 }}>Website</Text>
                        <TextInput style={{ fontSize: 16, borderBottomWidth: 1, borderColor: '#FF4D67' }} placeholder='Website' />
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <View>
                        <Text style={{ color: '#FF4D67', opacity: 0.5 }}>Bio</Text>
                        <TextInput style={{ fontSize: 16, borderBottomWidth: 1, borderColor: '#FF4D67' }} placeholder='Bio' />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({})