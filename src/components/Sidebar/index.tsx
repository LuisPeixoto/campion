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
  const { signOut } = useAuth()
  const navigation = useNavigation()

  return (
    <Container colors={['#312E37', '#282829']}>
      <Header>
        <User>
          <Image
            style={{ resizeMode: 'cover' }}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/49557710?v=4',
            }}
          />
          <Info>
            <Name>Luis Fernando Peixoto</Name>
            <NickName>@LuisPeixoto</NickName>
          </Info>
        </User>
      </Header>
      <Content>
        <DrawerContentScrollView {...props}>
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
