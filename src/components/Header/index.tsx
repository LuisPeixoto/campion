import { useNavigation } from '@react-navigation/core'
import React from 'react'

import Icon from 'react-native-vector-icons/Feather'
import logoText from '../../assets/logoText.png'

import {
  Container,
  Logo,
  Search,
  NewPosts,
  Menu,
  Image,
  Buttons,
} from './styles'

const Header: React.FunctionComponent = ({ navigation }) => {
  const Navigation = useNavigation()
  return (
    <Container
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.03,
        shadowRadius: 0,

        elevation: 3,
      }}
    >
      <Menu
        onPress={() => {
          navigation.openDrawer()
        }}
      >
        <Icon name="menu" color="#fff" size={32} />
      </Menu>
      <Logo>
        <Image style={{ resizeMode: 'contain' }} source={logoText} />
      </Logo>

      <Buttons>
        <Search
          onPress={() => {
            Navigation.navigate('Search')
          }}
        >
          <Icon name="search" color="#fff" size={24} />
        </Search>

        <NewPosts>
          <Icon name="plus" color="#fff" size={32} />
        </NewPosts>
      </Buttons>
    </Container>
  )
}

export default Header
