import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  padding: 4px 8px;
`

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Avatar = styled.Image`
  width: 65px;
  border-radius: 50px;
  height: 65px;
`

export const Info = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 16px;
`

export const Name = styled.Text`
  color: #eee7e2;
  font-size: 18px;
  font-family: 'Lato-Bold';
`
export const Date = styled.View`
  align-items: flex-end;
`
export const NickName = styled.Text`
  color: #837e81;
  margin-top: 6px;
  font-size: 16px;
  font-family: 'Lato-Regular';
`
