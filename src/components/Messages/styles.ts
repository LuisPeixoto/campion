import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  margin-top: 16px;
`
export const Message = styled(RectButton)`
  flex: 1;
  padding: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const User = styled.View`
  flex: 100%;
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
export const InfoLastMessage = styled.View`
  align-items: flex-end;
`
export const MessagePreview = styled.Text`
  color: #837e81;
  width: 90%;
  margin-top: 6px;
  font-size: 16px;
  font-family: 'Lato-Regular';
`

export const HasNewMessage = styled.Text`
  background-color: #c4c4c4;
  font-size: 12px;
  color: #000000;
  min-width: 20px;
  padding: 1px;
  font-family: 'Lato-Bold';
  min-height: 20px;
  justify-content: center;
  text-align: center;
  border-radius: 50px;
`

export const DateTime = styled.Text`
  padding: 1px;
  font-size: 14px;
  color: #837e81;

  font-family: 'Lato-Regular';
  text-align: center;
  margin-top: 8px;
`
