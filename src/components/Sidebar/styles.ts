import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'
import { DrawerItem as drawerItem } from '@react-navigation/drawer'
import icon from 'react-native-vector-icons/Feather'

export const Container = styled(LinearGradient).attrs({
  colors: ['#312E37', '#282829'],
})`
  flex: 1;
`
export const User = styled.View`
  width: auto;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 5px;
`
export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100px;
  height: 100px;
  margin-right: 8px;
  border-radius: 50px;
`
export const Info = styled.View``
export const Name = styled.Text`
  font-size: 16px;
  color: #eee7e2;
  margin-top: 8px;
  text-align: center;

  font-family: 'Lato-Bold';
`
export const NickName = styled.Text`
  font-size: 16px;
  color: #837e81;
  margin-top: 4px;
  text-align: center;

  font-family: 'Lato-Regular';
`
export const Header = styled.View`
  width: 100%;
  padding: 8px 4px;
  flex-direction: row;
  height: auto;
  border-color: #d6d6d6;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #5a5a5a;
  justify-content: center;
`
export const Content = styled.View`
  width: 100%;
  height: 100%;
`
export const DrawerItem = styled(drawerItem).attrs({
  labelStyle: {
    color: '#EEE7E2',
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
})``

export const Icon = styled(icon).attrs({
  color: '#EEE7E2',
})``
