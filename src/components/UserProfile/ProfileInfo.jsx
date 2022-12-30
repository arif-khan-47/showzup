import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters';
import React from 'react'
import tw from 'twrnc'
import ReadMore from '@fawazahmed/react-native-read-more';


const ProfileInfo = () => {
    return (
        <>
            <View style={tw`mt-5 mb-1 flex-row justify-between mx-5`}>
                <View style={tw`my-auto`}>
                    <Image
                        //  style={tw`w-5 h-5 mx-2 my-auto`}
                        style={[styles.DP, tw`m-auto rounded-full bg-white dark:bg-black`]}
                        source={{
                            uri: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1664867856/m20/Natalie_imt532.jpg',
                        }}
                    />
                    {/* <Text style={[styles.UsernameStyle, tw`my-auto`]}>
                    arif_khan
                </Text> */}
                </View>
                <View style={tw`m-auto flex-row justify-around`}>
                    <Pressable style={tw`mx-3`}>
                        <Text style={[tw`font-bold mx-auto mb-[1px] text-lg`]}>
                            99
                        </Text>
                        <Text style={[]}>
                            Posts
                        </Text>
                    </Pressable>
                    <Pressable style={tw`mx-3`}>
                        <Text style={[tw`font-bold mx-auto mb-[1px] text-lg`]}>
                            99
                        </Text>
                        <Text style={[]}>
                            Followers
                        </Text>
                    </Pressable>

                    <Pressable style={tw`ml-3`}>
                        <Text style={[tw`font-bold mx-auto mb-[1px] text-lg`]}>
                            999
                        </Text>
                        <Text style={[]}>
                            Following
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={tw`mx-3 mb-3`}>
                <Text style={tw`text-lg`}>Arif Khan</Text>
                <ReadMore numberOfLines={2}>
                    {"This is Bioooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooo"}
                </ReadMore>
            </View>
        </>
    )
}

export default ProfileInfo

const styles = StyleSheet.create({

    DP: {
        height: scale(90),
        width: scale(90)
    },
})