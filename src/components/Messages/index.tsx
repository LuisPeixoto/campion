import React from 'react'
import { Text } from 'react-native'
import {
  Container,
  Title,
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

const Messages: React.FunctionComponent = () => {
  const navigaton = useNavigation()
  return (
    <Container>
      <Title>Mensagens recentes</Title>
      <Content>
        <Message onPress={() => navigaton.navigate('Chat')}>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1594616838951-c155f8d978a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
              }}
            />
            <Info>
              <Name>Luís Ribeiro</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>
        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
              }}
            />
            <Info>
              <Name>Gabriel Sousa</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>
        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
              }}
            />
            <Info>
              <Name>Danilo Ribeiro</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>
        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1624298087118-aaefd4421092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
              }}
            />
            <Info>
              <Name>Gabriel Castro</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>
        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1544724107-6d5c4caaff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1347&q=80',
              }}
            />
            <Info>
              <Name>Luis Ferreira</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>
        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
              }}
            />
            <Info>
              <Name>Douglas Sousa</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>
        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
              }}
            />
            <Info>
              <Name>Ana Fernandes</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>

        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80',
              }}
            />
            <Info>
              <Name>Luiza Almeida</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>

        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1339&q=80',
              }}
            />
            <Info>
              <Name>Kauê Pereira</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>

        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
            />
            <Info>
              <Name>Erick Araujo</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>

        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
              }}
            />
            <Info>
              <Name>Isabela Melo</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>

        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
            />
            <Info>
              <Name>Miguel Melo</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>

        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
            />
            <Info>
              <Name>Yasmin Rocha</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
            </Info>
          </User>

          <Date>
            <HasNewMessage style={{ textAlignVertical: 'center' }}>
              1
            </HasNewMessage>

            <DateTime>2:15 PM</DateTime>
          </Date>
        </Message>

        <Message>
          <User>
            <Avatar
              style={{ resizeMode: 'cover' }}
              source={{
                uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
              }}
            />
            <Info>
              <Name>Tomás Rodrigues</Name>
              <MessagePreview>Lorem ipsum nibh, nunc.</MessagePreview>
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
