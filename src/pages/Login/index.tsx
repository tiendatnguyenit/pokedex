import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../routes/routeParams';
import images from '../../assets/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface IProps {
    navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
}
const Login = (props: IProps) => {
    const { navigation } = props;
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

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
                    <Image source={images.Icons.IconNoBg} style={{ height: 250, width: 250 }} />
                    <TextInput
                        placeholder='Email'
                        style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10, padding: 10, marginBottom: 10, }}
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                    <TextInput
                        placeholder='Password'
                        style={{ backgroundColor: '#fff', width: '100%', borderRadius: 10, padding: 10, marginBottom: 10, }}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                    <TouchableOpacity
                        style={{ width: '100%', padding: 10, borderRadius: 10, backgroundColor: '#D2232A', marginTop: 30, marginBottom: 16 }}
                        onPress={() => { navigation.navigate('Login') }}
                    >
                        <Text style={{ textAlign: 'center', color: '#fff' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 10, padding: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}> Forgot Password?</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
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
                            onPress={() => { navigation.navigate('Login') }}
                        >
                            <Text style={{ textAlign: 'center' }}>
                                Facebook SignIn
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({})