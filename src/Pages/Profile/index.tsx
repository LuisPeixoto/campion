import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Loading } from '../../components/Loading'
import { useAuth } from '../../hooks/auth'
import Api from '../../services/api'
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

interface Route {
  route: {
    params: string
  }
}

interface UserProfileProps {
  _id: string
  name: string
  avatar: string
  username: string
  followers: object[]
  followings: object[]
}

export function Profile({ route }: Route) {
  const { user } = useAuth()
  const [userProfile, setUserProfile] = useState<UserProfileProps>(
    {} as UserProfileProps,
  )
  const [isLoading, setIsLoading] = useState(true)
  const [isFollowing, setIsFollowing] = useState(false)
  const [isContact, setIsContact] = useState(false)
  const [countFollowers, setCountFollowers] = useState(0)

  const navigation = useNavigation()

  const sumFollow = useCallback(
    (type) => {
      if (type === 'follow') {
        setCountFollowers(countFollowers + 1)
      } else if (type === 'unfollow') {
        setCountFollowers(countFollowers - 1)
      }
    },
    [countFollowers],
  )

  const openChat = useCallback(async () => {
    try {
      const data = {
        senderId: user._id,
        receiverId: userProfile._id,
      }
      const response = await Api.post('/chats', data)

      const { _id, members } = response.data

      navigation.navigate('Chat', {
        _id,
        members,
        user_name: userProfile.username,
      })
    } catch (error) {
      console.log(error)
    }
  }, [userProfile])

  const verifyFollower = useCallback((followers, following) => {
    if (followers.includes(user._id)) {
      setIsFollowing(true)
      following.includes(user._id) && setIsContact(true)
    }
  }, [])

  async function handleFollow(type) {
    try {
      await Api.put(`/user/${userProfile._id}/${type}`, {
        userId: user._id,
      })
      console.log(type)
      setIsFollowing(type === 'follow')
      sumFollow(type)
      return
    } catch (error) {
      console.log(error)
    }
  }

  async function getUser() {
    try {
      const res = await Api.get(`/user/?username=${route.params}`)
      setUserProfile(res.data)
      setCountFollowers(res.data.followers.length)
      verifyFollower(res.data.followers, res.data.followings)
      return
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      getUser()
    }, []),
  )

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <Content>
          <Image
            source={{
              uri:
                userProfile.avatar === ''
                  ? `https://ui-avatars.com/api/?name=${userProfile.name}&lenght=1&size=140&format=png`
                  : userProfile.avatar,
            }}
          />

          <Name>{userProfile.name}</Name>

          <NickName>@{userProfile.username}</NickName>

          <ContainerFollower>
            <ContentFollower>
              <CountFollower>{countFollowers}</CountFollower>
              <TextFollower>Seguidores</TextFollower>
            </ContentFollower>

            <Separation />

            <ContentFollower>
              <CountFollower>{userProfile.followings.length}</CountFollower>
              <TextFollower>Seguindo</TextFollower>
            </ContentFollower>
          </ContainerFollower>

          <ContainerInteraction>
            <ContentInteraction
              onPress={() => handleFollow(isFollowing ? 'unfollow' : 'follow')}
            >
              {isFollowing ? <Icon name="check" /> : <Icon name="plus" />}
              <TextInteraction>
                {isFollowing ? 'Seguindo' : 'Seguir'}
              </TextInteraction>
            </ContentInteraction>

            {isContact && (
              <ContentInteraction onPress={openChat}>
                <Icon name="send" />
                <TextInteraction>Iniciar {'\n'} Conversa</TextInteraction>
              </ContentInteraction>
            )}
          </ContainerInteraction>
        </Content>
      )}
    </Container>
  )
}
