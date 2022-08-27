import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

const Home = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                <FontAwesome name="search" size={24} color='#000' style={{ marginLeft: 15 }} />
            },
            headerRight: () => {
                <Image
                    source={require('../assets/user.png')}
                    style={{ width: 50, height: 50, marginRight: 15 }}
                />
            }
        })
    }, [nav])


    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Chat')
                }}
                style={styles.chatButton}
            >
                <Entypo name='chat' size='24' color='#000' />
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    chatButton: {
        backgroundColor: '#6c63ff',
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

// export default Home
