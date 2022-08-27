import React, { useState, useLayoutEffect, useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { auth, db } from '../config/config'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

export default function Chat() {
    const [messages, setMessages] = useState([])
    const navigation = useNavigation()

    const onSignOut = () => {
        signOut(auth).catch((error) => {
            console.log(error)
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: 15 }}
                    onPress={onSignOut}>
                    <AntDesign name='logout' size={22} color='#000' style={{ marginRight: 15 }} />
                </TouchableOpacity>
            )
        })
    }, [navigation])

    useLayoutEffect(() => {
        const collectionRef = collection(db, 'chats')
        const q = query(collectionRef, orderBy('createdAt', 'desc'))

        const unSubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map((doc) => ({
                _id: doc.id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            })))
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

        const { _id, createdAt, text, user } = messages[0]
        addDoc(collection(db, 'chats'), { _id, createdAt, text, user })
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                avatar: 'https://i.pravatar.cc/300',
            }}
            messagesContainerStyle={{
                backgroundColor: '#fff',
            }}
            showAvatarForEveryMessage={false}
            placeholder='Type something 🙈'
        />
    )
}
