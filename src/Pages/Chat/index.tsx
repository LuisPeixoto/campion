import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import io from 'socket.io-client'
import { GiftedChat } from 'react-native-gifted-chat'

import { API_URL } from 'react-native-dotenv'
import { useAuth } from '../../hooks/auth'
import Api from '../../services/api'

import { useNavigation } from '@react-navigation/core'
import { ButtonSend } from '../../components/Chat/ButtonSend'
import { Bubble } from '../../components/Chat/Bubble'
import { InputToolbar } from '../../components/Chat/InputToolbar'
import { Container, ChatContent } from './styles'

interface Route {
  route: {
    params: {
      _id: string
      date: string
      members: object
      user_name: string
    }
  }
}

const Chat: React.FunctionComponent<Route> = ({ route }) => {
  const [messages, setMessages] = useState([])

  const { _id, date, members, user_name } = route.params
  const { user } = useAuth()
  const navigation = useNavigation()

  navigation.setOptions({
    title: user_name,
  })

  const [currentChat, setCurrentChat] = useState({
    _id,
    members,
  })

  const socket = useMemo(() => {
    return io(API_URL, {
      query: { user_id: user._id },
    })
  }, [user])

  useEffect(() => {
    socket.on('response', (data) => {
      setMessages((prevState) => GiftedChat.append(prevState, data))
    })
  }, [socket])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await Api.get('/message/' + currentChat?._id)
        setMessages(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMessages()
  }, [currentChat])

  const onSend = useCallback(async (messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    )
    const receiverId = currentChat.members.find((member) => member !== user._id)

    const message = {
      sender: user._id,
      receiver: receiverId,
      text: messages[0].text,
      chatId: currentChat._id,
    }

    try {
      await Api.post('/message', message)
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <Container>
      <ChatContent
        renderAvatar={() => null}
        showAvatarForEveryMessage={true}
        placeholder="Digite uma mensagem"
        renderInputToolbar={InputToolbar}
        messages={messages}
        alwaysShowSend
        renderSend={ButtonSend}
        renderBubble={Bubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: user._id,
        }}
      />
    </Container>
  )
}

export default Chat
