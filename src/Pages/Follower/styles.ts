import { RectButton } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
  flex: 1;
`

export const Button = styled(RectButton)`
  width: 100%;
  border-radius: 20px;
`
