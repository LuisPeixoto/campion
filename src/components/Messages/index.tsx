import React from 'react'
import { Text } from 'react-native'

import {
  Container,
  Content,
  Message,
  User,
  Avatar,
  Info,
  Name,
  MessagePreview,
  Date,
  HasNewMessage,
  DateTime,
} from './styles'

import { useNavigation } from '@react-navigation/native'

interface Message {
  _id: string
  date: string
  lastMessage: string
  members: object
  user: {
    username: string
    name: string
    avatar?: string
  }
}

const Messages: React.FunctionComponent<Message> = ({
  _id,
  date,
  members,
  lastMessage,
  user,
}) => {
  const navigation = useNavigation()

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
                  : 'https://www.iconfinder.com/icons/628298/download/png/512',
              }}
            />
            <Info>
              <Name>{user.name}</Name>
              <MessagePreview>{lastMessage}</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>
      </Content>
    </Container>
  )
}

export default Messages
