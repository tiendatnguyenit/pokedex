import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../routes/routeParams'

interface IProps {
    navigation: NativeStackNavigationProp<AuthStackParamList, 'Welcome'>;
}
const Welcome = (props: IProps) => {
    const { navigation } = props;
    return (
        <View style={{ backgroundColor: 'gray', flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={Images.Icons.IconNoBg} style={{ height: 300, width: 300 }} />
                    <TouchableOpacity
                        style={{ width: '100%', padding: 10, borderRadius: 10, backgroundColor: '#fff' }}
                        onPress={() => { navigation.navigate('Login') }}
                    >
                        <Text style={{ textAlign: 'center' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '100%', padding: 10, borderRadius: 10, backgroundColor: '#fff', marginTop: 15 }}
                        onPress={() => { navigation.navigate('Register') }}
                    >
                        <Text style={{ textAlign: 'center' }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({})