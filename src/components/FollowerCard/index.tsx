import { useNavigation } from '@react-navigation/core'
import React, { useCallback } from 'react'
import { useAuth } from '../../hooks/auth'
import Api from '../../services/api'
import {
  Container,
  Content,
  User,
  Avatar,
  Info,
  Name,
  NickName,
} from './styles'

interface UserProps {
  id: string
  name: string
  avatar?: string
  nickname: string
}

const FollowerCard: React.FunctionComponent<UserProps> = ({
  id,
  avatar,
  name,
  nickname,
}) => {
  const navigation = useNavigation()
  const { user } = useAuth()

  const newChat = useCallback(async (receiverId, name) => {
    try {
      const data = {
        senderId: user._id,
        receiverId,
      }
      const response = await Api.post('/chats', data)

      const { _id, createdAt, members } = response.data

      navigation.navigate('Chat', {
        _id,
        date: createdAt,
        members: members,
        user_name: name,
      })
    } catch (err) {
      console.log(err)
    }
  }, [])
  return (
    <Container>
      <Content>
        <Avatar
          style={{ resizeMode: 'cover' }}
          source={{
            uri:
              avatar === ''
                ? `https://ui-avatars.com/api/?name=${name}&lenght=1&size=140&format=png`
                : avatar,
          }}
        />
        <Info>
          <Name>{name}</Name>
          <NickName>@{nickname}</NickName>
        </Info>
      </Content>
    </Container>
  )
}

export default FollowerCard
