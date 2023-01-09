import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { RootState } from '../store/store';

const Routes = () => {
    const Stack = createStackNavigator();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    console.log('isAuthenticated', isAuthenticated)
    // const isAuthenticated = false;
    // const isAuthenticated = true;
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerStyle: tw`bg-transparent dark:bg-black shadow-none`, headerTitleStyle: tw`font-bold text-2xl` }}>
                    {isAuthenticated ?
                        <Stack.Screen name='Home' component={HomeStack} options={{ headerShown: false }} />
                        :
                        <Stack.Screen name='Auth' component={AuthStack} options={{ headerShown: false }} />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes