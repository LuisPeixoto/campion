import React, { useCallback, useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Container } from './styles'

import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
} from 'react-native-gifted-chat'
import icon from '../../assets/icon.png'

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

const Chat: React.FunctionComponent = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'Tudo bem?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Luis',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Olá',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Luis',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    )
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
          _id: 1,
        }}
      />
    </View>
  )
}

export default Chat
