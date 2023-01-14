import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import tw from "twrnc";

interface ITabView {
    tabs: {
        id: number;
        title: string;
        component: JSX.Element;
    }[]
}

const TabView = ({
    tabs = [],
}: ITabView) => {
    const [activeTab, setActiveTab] = React.useState(1)
    const [currentTab, setCurrentTab] = React.useState(tabs[0].component || <View></View>)
    return (
        <>
<<<<<<< HEAD
            {tabs.length > 0 && (<View style={tw`border-t border-gray-800 mt-5`}></View>)}
=======
            {tabs.length > 0 && (<View style={tw`border-t border-gray-500 mt-5`}></View>)}
>>>>>>> 0f2aa1d4b1d3d72ce8adb8413fb366b84e30e4c8
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={tw`flex-row justify-items-start`}>
                {tabs.map((item, index) => {
                    return (
                        <View key={index} style={tw`flex-1`}>
<<<<<<< HEAD
                            <Pressable
                                // android_ripple={{ color: 'white' }}
=======
                            <View style={activeTab === item.id ? tw`border-t-[5px] border-red-700` : tw`border-t-[5px]`}></View>
                            <Pressable
                                android_ripple={{ color: 'white' }}
>>>>>>> 0f2aa1d4b1d3d72ce8adb8413fb366b84e30e4c8
                                onPress={() => {
                                    setActiveTab(item.id)
                                    setCurrentTab(item.component)
                                }}
                                style={tw`py-2 px-5r`}>
<<<<<<< HEAD
                                <Text style={activeTab === item.id ? tw`text-white text-[15px] tracking-wide capitalize`:tw`text-white text-[15px] tracking-wide capitalize`}>
                                    {item.title}
                                </Text>
                            </Pressable>
                            <View style={activeTab === item.id ? tw`border-t-[2px] mx-5 border-[#ff6600]` : tw`border-t-[2px]`}></View>
=======
                                <Text style={tw`text-white text-lg font-bold tracking-wide uppercase`}>
                                    {item.title}
                                </Text>
                            </Pressable>
>>>>>>> 0f2aa1d4b1d3d72ce8adb8413fb366b84e30e4c8
                        </View>
                    )
                })}
            </ScrollView>
<<<<<<< HEAD
            <View style={tw`m-2`}>
=======
            <View style={tw`mt-2`}>
>>>>>>> 0f2aa1d4b1d3d72ce8adb8413fb366b84e30e4c8
                {currentTab}
            </View>
        </>
    )
}

export default TabView;