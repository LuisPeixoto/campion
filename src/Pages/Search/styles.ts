import { RectButton } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
  flex: 1;
`

export const Title = styled.Text`
  font-size: 28px;
  font-family: 'Lato-Light';
  color: #fbf4ee;
  margin-bottom: 24px;
`

export const Input = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #23222a;
  border-radius: 5px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #23222a;
`
export const TextInput = styled.TextInput`
  flex: 1;
  color: #666263;
  font-size: 16px;
  margin-left: 16px;
  font-family: 'Talo-Regular';
`

export const Content = styled.View`
  padding: 16px;
  flex: 1;
`

export const Button = styled(RectButton)``
