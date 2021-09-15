import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
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
export const Image = styled.Image`
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
