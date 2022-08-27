import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/config'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    console.log('Login success')
                })
                .catch((err) => {
                    Alert.alert("Login error", err.message)
                })
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/login.png')} style={{ height: 300, width: 300, alignSelf: 'center' }} />
            <SafeAreaView style={styles.loginBox}>
                <TextInput
                    style={styles.input}
                    placeholder="example@gmail.com"
                    autoCapitalize="none"
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                ></TextInput>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={{ fontSize: 18, fontWeight: '900', color: '#fff' }}>Login</Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 8 }}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity
                        style={{ marginLeft: 4 }}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={{ fontWeight: '700', color: '#6c63ff' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    loginBox: {
        marginHorizontal: 32,
        // marginVertical: 64
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#efefef',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#f6f7fb',
    },
    button: {
        backgroundColor: '#6c63ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginVertical: 8,
        borderRadius: 10,
    }
})
