import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Container } from './styles'

import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
} from 'react-native-gifted-chat'
import icon from '../../assets/icon.png'
import io from 'socket.io-client'
import { useAuth } from '../../hooks/auth'

import Api from '../../services/api'
import { useNavigation } from '@react-navigation/core'

const renderSend: React.FunctionComponent = (props) => {
  return (
    <Send
      {...props}
      containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Container icon={icon}>
        <Image source={icon} style={{ width: 30, height: 27 }} />
      </Container>
    </Send>
  )
}

const renderBubble: React.FunctionComponent = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          padding: 8,
          borderRadius: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 20,
          backgroundColor: '#C1C1C1',
        },
        left: {
          padding: 8,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 0,
          backgroundColor: '#23222A',
        },
      }}
      textStyle={{
        right: {
          fontSize: 16,
          fontFamily: 'Lato-Regular',
          color: '#000000',
        },

        left: {
          fontSize: 16,
          fontFamily: 'Lato-Regular',
          color: '#C1C1C1',
        },
      }}
    />
  )
}

const renderInputToolbar: React.FunctionComponent = (props) => {
  return (
    <InputToolbar
      {...props}
      primaryStyle={{
        borderRadius: 10,
        padding: 5,
      }}
      containerStyle={{
        borderTopWidth: 0,
        backgroundColor: '#312E37',
        padding: 10,
      }}
    />
  )
}

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
    return io('http://10.0.10.213:3000', {
      query: { user_id: user._id },
    })
  }, [user])

  useEffect(() => {
    socket.on('response', (data) => {
      console.log(data)
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
    <View style={{ flex: 1, backgroundColor: '#312E37' }}>
      <GiftedChat
        listViewProps={{
          style: {
            backgroundColor: '#312E37',
          },
        }}
        renderAvatar={() => null}
        showAvatarForEveryMessage={true}
        placeholderTextColor="#676266"
        placeholder="Digite uma mensagem"
        minInputToolbarHeight={80}
        renderInputToolbar={renderInputToolbar}
        messages={messages}
        alwaysShowSend
        textInputProps={{
          style: {
            backgroundColor: '#23222A',
            borderRadius: 8,
            fontSize: 16,
            marginRight: 15,
            paddingHorizontal: 20,
            paddingVertical: 10,
            color: '#C1C1C1',
            flex: 1,
          },
        }}
        timeTextStyle={{
          right: {
            color: '#000',
          },
        }}
        renderSend={renderSend}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: user._id,
        }}
      />
    </View>
  )
}

export default Chat
