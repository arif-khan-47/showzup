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
    const [activeTab, setActiveTab] = React.useState(2)
    const [currentTab, setCurrentTab] = React.useState(tabs[0].component || <View></View>)
    return (
        <>
            {tabs.length > 0 && (<View style={tw`border-t border-gray-800 mt-5`}></View>)}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={tw`flex-row justify-items-start`}>
                {tabs.map((item, index) => {
                    return (
                        <View key={index} style={tw`flex-1`}>
                            <Pressable
                                // android_ripple={{ color: 'white' }}
                                onPress={() => {
                                    setActiveTab(item.id)
                                    setCurrentTab(item.component)
                                }}
                                style={tw`py-2 px-5r`}>
                                <Text style={activeTab === item.id ? tw`text-white text-[15px] tracking-wide capitalize` : tw`text-white text-[15px] tracking-wide capitalize`}>
                                    {item.title}
                                </Text>
                            </Pressable >
                            <View style={activeTab === item.id ? tw`border-t-[2px] mx-5 border-[#ff6600]` : tw`border-t-[2px]`}></View>
                        </View >
                    )
                })}
            </ScrollView >
            <View style={tw`m-2`}>
                {currentTab}
            </View>
        </>
    )
}

export default TabView;