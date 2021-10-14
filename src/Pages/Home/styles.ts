import { Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`

export const Title = styled.Text`
  font-size: 28px;
  font-family: 'Lato-Light';
  color: #fbf4ee;
`
