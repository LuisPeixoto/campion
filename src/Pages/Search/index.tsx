import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import FollowerCard from '../../components/FollowerCard'
import { Loading } from '../../components/Loading'
import NoItem from '../../components/NoItem'
import Api from '../../services/api'
import { Container, Input, TextInput, Content, Button } from './styles'

interface UserProps {
  _id: string
  name: string
  avatar: string
  username: string
}

const Search: React.FunctionComponent = () => {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<UserProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  const handleSearchText = useCallback((text) => {
    setSearch(text)
  }, [])

  const getUsers = useCallback(async (text) => {
    try {
      setIsLoading(true)
      const response = await Api.get(`/user/search?user=${text}`)
      return setUsers(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getUsers(search)
  }, [search])

  console.log(users)

  return (
    <Container colors={['#312E37', '#282829']}>
      <Content>
        <Input>
          <Icon name="search" color="#666263" size={20} />
          <TextInput
            placeholder="Faça uma pesquisa"
            keyboardAppearance="light"
            onChangeText={(text) => handleSearchText(text)}
            placeholderTextColor="#666263"
          />
        </Input>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={search === '' ? [] : users}
            ListEmptyComponent={
              <View>
                {search === '' ? (
                  <NoItem type="searchInitial" />
                ) : (
                  <NoItem type="search" />
                )}
              </View>
            }
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Button
                onPress={() => navigation.navigate('Profile', item.username)}
              >
                <FollowerCard
                  id={item.id}
                  avatar={item.avatar}
                  name={item.name}
                  nickname={item.username}
                />
              </Button>
            )}
          />
        )}
      </Content>
    </Container>
  )
}

export default Search
