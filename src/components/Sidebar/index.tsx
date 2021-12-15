import { useNavigation } from '@react-navigation/core'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { useAuth } from '../../hooks/auth'
import items from './itemsSidebar'
import {
  Container,
  Header,
  Content,
  Image,
  Name,
  NickName,
  Info,
  User,
  DrawerItem,
  Icon,
} from './styles'

const Sidebar: React.FunctionComponent = ({ ...props }) => {
  const { signOut, user } = useAuth()
  const navigation = useNavigation()

  return (
    <Container>
      <Header>
        <User>
          <Image
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
          {items.map((item, index) => (
            <DrawerItem
              key={index}
              label={item.label}
              onPress={() => {
                item.route !== 'logout'
                  ? navigation.navigate(item.route)
                  : signOut()
              }}
              icon={({ size }) => <Icon name={item.icon} size={size} />}
            />
          ))}
        </DrawerContentScrollView>
      </Content>
    </Container>
  )
}
export default Sidebar
