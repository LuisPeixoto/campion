import { useNavigation } from '@react-navigation/core'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useAuth } from '../../hooks/auth'
import {
  Container,
  Header,
  Content,
  Image,
  Name,
  NickName,
  Info,
  User,
} from './styles'

const Sidebar: React.FunctionComponent = ({ ...props }) => {
  const { signOut, user } = useAuth()
  const navigation = useNavigation()

  return (
    <Container colors={['#312E37', '#282829']}>
      <Header>
        <User>
          <Image
            style={{ resizeMode: 'cover' }}
            source={{
              uri: user.avatar
                ? user.avatar
                : 'https://www.iconfinder.com/icons/628298/download/png/512',
            }}
          />
          <Info>
            <Name>{user.name}</Name>
            <NickName>@{user.username}</NickName>
          </Info>
        </User>
      </Header>
      <Content>
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label="Seguidores"
            onPress={() => {
              navigation.navigate('Profile')
            }}
            labelStyle={styles.text}
            icon={({ color, size }) => (
              <Icon name="user-plus" color="#EEE7E2" size={size} />
            )}
          />
          <DrawerItem
            label="Seguindo"
            onPress={() => {
              navigation.navigate('Following')
            }}
            labelStyle={styles.text}
            icon={({ color, size }) => (
              <Icon name="user-check" color="#EEE7E2" size={size} />
            )}
          />

          <DrawerItem
            label="Contatos"
            onPress={() => {
              navigation.navigate('Contacts')
            }}
            labelStyle={styles.text}
            icon={({ color, size }) => (
              <Icon name="users" color="#EEE7E2" size={size} />
            )}
          />
          <DrawerItem
            label="Configurações"
            onPress={() => {}}
            labelStyle={styles.text}
            icon={({ color, size }) => (
              <Icon name="settings" color="#EEE7E2" size={size} />
            )}
          />

          <DrawerItem
            label="Sair"
            onPress={signOut}
            labelStyle={styles.text}
            icon={({ color, size }) => (
              <Icon name="log-out" color="#EEE7E2" size={size} />
            )}
          />
        </DrawerContentScrollView>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#EEE7E2',
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
})

export default Sidebar
