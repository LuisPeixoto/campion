import { useNavigation, useFocusEffect } from '@react-navigation/core'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, View, FlatList } from 'react-native'
import Contact from '../../components/Contact'
import { useAuth } from '../../hooks/auth'
import Api from '../../services/api'
import Chat from '../Chat'
import { Container, Title, Content } from './styles'

const Contacts: React.FunctionComponent = () => {
  const { user } = useAuth()
  const [chats, setChats] = useState([])
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      const getChats = async () => {
        try {
          const res = await Api.get(`user/followers/${user._id}`)
          console.log('dasdadadsa' + res.data)

          setChats(res.data)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
      getChats()
    }, []),
  )

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
          style={{ padding: 16, flex: 1 }}
          data={chats}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => (
            <>
              {index === 0 && <Title>Lista de usuários</Title>}
              <Contact
                id={item._id}
                avatar={item.avatar}
                name={item.name}
                nickname={item.username}
              />
            </>
          )}
        />
      )}
    </Container>
  )
}

export default Contacts
