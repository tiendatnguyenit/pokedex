import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../assets/images'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../routes/routeParams'
import auth from '@react-native-firebase/auth';


interface Iprops {
    navigation: NativeStackNavigationProp<AuthStackParamList, 'Register'>;
}


const Register = (props: Iprops) => {
    const { navigation } = props;
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');

    const handleRegister = () => {
        console.log('Register');
        if (email.trim() != '' && password.trim() != '') {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created!');
                    Alert.alert('Success', 'Register success', [
                        {
                            text: 'OK',
                            onPress: () => navigation.navigate('Login'),
                        },
                    ]);

                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
                    console.error(error);
                });
        }
    }

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: 'gray', flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{ flex: 1, paddingHorizontal: 20, alignItems: 'center' }}
                >
                    <Image source={Images.Icons.IconNoBg} style={{ height: 250, width: 250 }} />
                    <TextInput
                        placeholder='Email'
                        style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10, padding: 10, marginBottom: 10, }}
                        onChangeText={text => setEmail(text.trim())}
                        value={email}
                    />
                    <TextInput
                        placeholder='Password'
                        style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10, padding: 10, marginBottom: 10, }}
                        onChangeText={text => setPassword(text.trim())}
                        value={password}
                    />
                    <TextInput
                        placeholder='Re-Password'
                        style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10, padding: 10, marginBottom: 10, }}
                        onChangeText={text => setRePassword(text.trim())}
                        value={rePassword}
                    />
                    <TouchableOpacity
                        style={{ width: '100%', padding: 10, borderRadius: 10, backgroundColor: '#D2232A', marginTop: 30, marginBottom: 16 }}
                        onPress={handleRegister}
                    >
                        <Text style={{ textAlign: 'center', color: '#fff' }}>
                            Register
                        </Text>
                    </TouchableOpacity>

                    <Text style={{ textAlign: 'center', color: '#fff' }}>Already have an account?</Text>
                    <TouchableOpacity
                        style={{ marginBottom: 10, padding: 10 }}
                        onPress={() => { navigation.navigate('Login') }}
                    >
                        <Text style={{ textAlign: 'center', color: '#D2232A' }}>Login</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default Register

const styles = StyleSheet.create({})