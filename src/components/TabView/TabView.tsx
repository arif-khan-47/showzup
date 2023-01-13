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
            {tabs.length > 0 && (<View style={tw`border-t border-gray-500 mt-5`}></View>)}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={tw`flex-row justify-items-start`}>
                {tabs.map((item, index) => {
                    return (
                        <View key={index} style={tw`flex-1`}>
                            <View style={activeTab === item.id ? tw`border-t-[5px] border-red-700` : tw`border-t-[5px]`}></View>
                            <Pressable
                                android_ripple={{ color: 'white' }}
                                onPress={() => {
                                    setActiveTab(item.id)
                                    setCurrentTab(item.component)
                                }}
                                style={tw`py-2 px-5r`}>
                                <Text style={tw`text-white text-lg font-bold tracking-wide uppercase`}>
                                    {item.title}
                                </Text>
                            </Pressable>
                        </View>
                    )
                })}
            </ScrollView>
            <View style={tw`mt-2`}>
                {currentTab}
            </View>
        </>
    )
}

export default TabView;