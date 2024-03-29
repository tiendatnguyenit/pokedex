import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../routes/routeParams';
import Images from '../../assets/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


interface IProps {
    navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
}
const Login = (props: IProps) => {
    const { navigation } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('login');
        if (email.trim() != '' && password.trim() != '') {
            auth()
                .signInWithEmailAndPassword(email.trim(), password.trim())
                .then(() => {
                    console.log('User account signed in!');
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
    };
    const facebookLogin = async () => {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }

    const handleLoginFb = () => {
        console.log('login fb');
        facebookLogin()
            .then((res) => {
                console.log('res login fb', res);
                // setUserData(res?.data || null);
            })
            .catch((err) => {
                console.log('err', err);
            });
    };

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
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                    <TextInput
                        placeholder='Password'
                        style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10, padding: 10, }}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />

                    <TouchableOpacity
                        style={{ width: '100%', padding: 10, borderRadius: 10, backgroundColor: '#D2232A', marginTop: 30 }}
                        onPress={handleLogin}
                    >
                        <Text style={{ textAlign: 'center', color: '#fff' }}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, marginBottom: 20 }}>
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', textAlign: 'center', paddingBottom: 10 }}>Or</Text>


                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, borderRadius: 10, backgroundColor: '#fff', marginBottom: 16, marginRight: 20 }}
                            onPress={() => { navigation.navigate('Login') }}
                        >
                            <Text style={{ textAlign: 'center' }}>
                                Google SignIn
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, borderRadius: 10, backgroundColor: '#4267B2', marginBottom: 16 }}
                            onPress={handleLoginFb}
                        >
                            <Text style={{ textAlign: 'center' }}>
                                Facebook SignIn
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ textAlign: 'center', color: '#fff' }}>Don't have an account?</Text>
                    <TouchableOpacity
                        style={{ marginBottom: 10, padding: 10 }}
                        onPress={() => { navigation.navigate('Register') }}
                    >
                        <Text style={{ textAlign: 'center', color: '#D2232A' }}>Register</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({})