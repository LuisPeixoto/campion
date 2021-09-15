import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 64px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #312e37;
`
export const Logo = styled.View`
  flex: 1;
  height: 42px;
  padding: 0 8px;
  margin-right: 16px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`
export const NewPosts = styled.TouchableOpacity`
  align-items: center;
  margin-left: 4px;
`
export const Buttons = styled.View`
  align-items: center;
  flex-direction: row;
`

export const Search = styled.TouchableOpacity`
  align-items: center;
  margin-right: 8px;
`
export const Menu = styled.TouchableOpacity`
  margin-right: 16px;
  align-items: center;
  height: 42px;
  justify-content: center;
`

export const Image = styled.Image`
  flex: 1;
  margin: 48px;
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  margin-left: 4px;
  font-family: 'Talo-Regular';
`
