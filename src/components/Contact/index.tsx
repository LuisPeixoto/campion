import React from 'react'
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
  name: string
  avatar: string
  nickname: string
}

const Contact: React.FunctionComponent<UserProps> = ({
  avatar,
  name,
  nickname,
}) => {
  return (
    <Container>
      <Content>
        <Avatar
          style={{ resizeMode: 'cover' }}
          source={{
            uri: avatar,
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

export default Contact
