import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/config'

export default function Register({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = () => {
        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    // console.log('Registration success')
                })
                .catch((err) => {
                    Alert.alert("Login error", err.message)
                })
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/register.png')} style={{ height: 300, width: 300, alignSelf: 'center' }} />
            <SafeAreaView style={styles.registerBox}>
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
                    onPress={handleRegister}
                >
                    <Text style={{ fontSize: 18, fontWeight: '900', color: '#fff' }}>Register</Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 8 }}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity
                        style={{ marginLeft: 4 }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ fontWeight: '700', color: '#6c63ff' }}>Login</Text>
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
    registerBox: {
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
