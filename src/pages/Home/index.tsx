import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth';

const Home = () => {

    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    return (
        <SafeAreaView>
            <Text>Home</Text>
            <TouchableOpacity style={{ padding: 10, backgroundColor: 'red' }} onPress={handleLogout}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})