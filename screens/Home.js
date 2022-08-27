import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function Home() {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name={'search'}
                    size={22}
                    color={'#000'}
                    style={{ marginLeft: 15 }} />
            ),
            headerRight: () => (
                <Image
                    source={require('../assets/user.png')}
                    style={{ marginRight: 15 }}
                />
            )
        })
    }, [navigation])


    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Chat')
                }}
                style={styles.chatButton}
            >
                <Entypo name='chat' size={24} color='#fff' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    chatButton: {
        backgroundColor: '#6c63ff',
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginRight: 20,
    }
})

// export default Home
