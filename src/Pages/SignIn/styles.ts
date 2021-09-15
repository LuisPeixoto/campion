import { Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 32px ${Platform.OS === 'android' ? 150 : 40}px;
`

export const Title = styled.Text`
  font-family: 'Lato-Regular';
  color: #fbf4ee;
  font-size: 21px;
  margin: 32px 0;
`
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`

export const ForgotPasswordText = styled.Text`
  font-family: 'Lato-Regular';
  color: #fbf4ee;
  font-size: 16px;
`
export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  border-top-width: 1px;
  border-color: #5a5a5a;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const CreateAccountButtonText = styled.Text`
  color: #fbf4ee;
  font-family: 'Lato-Regular';
  font-size: 18px;
  margin-left: 16px;
`
