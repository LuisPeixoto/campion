import React from 'react'
import {
  Container,
  ContainerFollower,
  ContainerInteraction,
  Content,
  ContentFollower,
  ContentInteraction,
  CountFollower,
  Icon,
  Image,
  Name,
  NickName,
  Separation,
  TextFollower,
  TextInteraction,
} from './styles'

export function Profile() {
  return (
    <Container>
      <Content>
        <Image
          source={{
            uri: 'https://www.iconfinder.com/icons/628298/download/png/512',
          }}
        />

        <Name>Samath Jomacry</Name>

        <NickName>@SamathJomacry</NickName>

        <ContainerFollower>
          <ContentFollower>
            <CountFollower>1800</CountFollower>
            <TextFollower>Seguidores</TextFollower>
          </ContentFollower>

          <Separation />

          <ContentFollower>
            <CountFollower>444</CountFollower>
            <TextFollower>Seguindo</TextFollower>
          </ContentFollower>
        </ContainerFollower>

        <ContainerInteraction>
          <ContentInteraction>
            <Icon name="plus" />
            <TextInteraction>Deixar de {'\n'} Seguir</TextInteraction>
          </ContentInteraction>

          <ContentInteraction>
            <Icon name="send" />
            <TextInteraction>Iniciar {'\n'} Conversa</TextInteraction>
          </ContentInteraction>
        </ContainerInteraction>
      </Content>
    </Container>
  )
}
