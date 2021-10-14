import { useIsFocused } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Messages from '../../components/Messages'
import NoItem from '../../components/NoItem'
import { useAuth } from '../../hooks/auth'
import Api from '../../services/api'
import { Container, Title } from './styles'

const Home: React.FunctionComponent = () => {
  const { user } = useAuth()
  const [chats, setChats] = useState([])
  const [loading, setLoading] = useState(true)
  const isFocused = useIsFocused()

  useEffect(() => {
    const getChats = async () => {
      try {
        console.log(user._id)
        const res = await Api.get('/chats/' + user._id)
        setChats(res.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getChats()
  }, [isFocused, user])

  console.log(chats)

  return (
    <Container colors={['#312E37', '#282829']}>
      {loading ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <FlatList
          style={{ padding: 12 }}
          data={chats}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={NoItem}
          renderItem={({ item, index }) => (
            <>
              {index === 0 && <Title>Mensagens recentes</Title>}
              <Messages
                _id={item._id}
                date={item.createdAt}
                lastMessage={item.lastMessage}
                members={item.members}
                user={item.user}
              />
            </>
          )}
        />
      )}
    </Container>
  )
}

export default Home
