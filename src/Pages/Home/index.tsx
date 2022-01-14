import AsyncStorage from '@react-native-community/async-storage'
import { useIsFocused } from '@react-navigation/core'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Messages from '../../components/Messages'
import NoItem from '../../components/NoItem'
import { useAuth } from '../../hooks/auth'
import Api from '../../services/api'
import { Container, Title } from './styles'

const Home: React.FunctionComponent = () => {
  const { user } = useAuth()
  const [chats, setChats] = useState([])
  const [loading, setLoading] = useState(true)
  const [newMessage, setNewMessage] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    const getChats = async () => {
      try {
        console.log(user._id)
        const res = await Api.get('/chats/' + user._id)
        setChats(res.data)
        VerifyNewMessageNotification()
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getChats()
  }, [isFocused, user])

  const VerifyNewMessageNotification = useCallback(async () => {
    try {
      const key = `@campion:message:user${user._id}`
      const data = await AsyncStorage.getItem(key)
      const dataJson = [
        {
          _id: '61be52bf07cdc8ad359928d7',
          date: '2021-12-10T21:57:46.413Z',
          lastMessage: 'Oi',
        },
      ]

      const difference = (obj1, obj2) => {
        let keyFound = false
        Object.keys(obj1).forEach((key) => {
          if (obj1[key] !== obj2[key]) {
            return (keyFound = key)
          }
        })
        return keyFound || false
      }

      const currentChats = chats.map((chat: any) => {
        return {
          _id: chat._id,
          lastMessage: chat.lastMessage,
          date: chat.createdAt,
        }
      })

      if (!dataJson) {
        return currentChats
      }

      currentChats.forEach((chat) => {
        dataJson.forEach((chatJson: any) => {
          difference(chat, chatJson) &&
            setNewMessage((prev) => [...prev, chat._id])
        })
      })
    } catch (error) {
      console.log(error)
    }
  }, [chats, user])

  return (
    <Container colors={['#312E37', '#282829']}>
      {loading ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <FlatList
          style={{ padding: 12 }}
          data={chats}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={<NoItem type="chat" />}
          renderItem={({ item, index }) => (
            <>
              {index === 0 && <Title>Mensagens recentes</Title>}
              <Messages
                _id={item._id}
                date={item.createdAt}
                lastMessage={item.lastMessage}
                members={item.members}
                user={item.user}
                newMessage={newMessage.includes(item._id)}
              />
            </>
          )}
        />
      )}
    </Container>
  )
}

export default Home
