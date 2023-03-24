import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './auth';
import AppStack from './app';
import { useAuth } from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    const { user } = useAuth();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'AuthStack'}
                screenOptions={{
                    presentation: 'card',
                    headerShown: false,
                    animationTypeForReplace: 'push',
                }}
            >
                {user ? (
                    <Stack.Screen
                        name={'AppStack'}
                        component={AppStack}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <Stack.Screen
                        name={'AuthStack'}
                        component={AuthStack}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack

const styles = StyleSheet.create({})