import React from 'react'

import {
  Container,
  Content,
  Message,
  User,
  Avatar,
  Info,
  Name,
  MessagePreview,
  InfoLastMessage,
  HasNewMessage,
  DateTime,
} from './styles'

import { useNavigation } from '@react-navigation/native'
import { format, differenceInHours } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Message {
  _id: string
  date: string
  lastMessage: string
  members: object
  newMessage: boolean
  user: {
    username: string
    name: string
    avatar?: string
  }
}

export default function Messages({
  _id,
  date,
  members,
  lastMessage,
  newMessage,
  user,
}: Message) {
  const navigation = useNavigation()
  function formatDate() {
    const currentDate = new Date()
    const dateMessage = new Date(date)
    const diff = differenceInHours(currentDate, dateMessage)
    return diff > 24
      ? format(dateMessage, 'dd/MM/yyyy', { locale: ptBR })
      : format(dateMessage, 'HH:mm', { locale: ptBR })
  }

  return (
    <Container>
      <Content>
        <Message
          onPress={() =>
            navigation.navigate('Chat', {
              _id,
              date,
              members,
              user_name: user.name,
            })
          }
        >
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: user.avatar
                  ? user.avatar
                  : `https://ui-avatars.com/api/?name=${user.name}&lenght=1&size=140&format=png`,
              }}
            />
            <Info>
              <Name>{user.name}</Name>
              <MessagePreview numberOfLines={1}>{lastMessage}</MessagePreview>
            </Info>
          </User>

          <InfoLastMessage>
            {newMessage && (
              <HasNewMessage style={{ textAlignVertical: 'center' }}>
                1
              </HasNewMessage>
            )}

            <DateTime>{formatDate()}</DateTime>
          </InfoLastMessage>
        </Message>
      </Content>
    </Container>
  )
}
