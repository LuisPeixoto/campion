import styled from 'styled-components/native'
import icon from 'react-native-vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background-color: #312e37;
  padding: 10%;
`

export const Content = styled.View`
  background-color: #23222a;
  margin-top: 20px;
  padding: 10px;
  align-items: center;
  border-radius: 15px;
`

export const Image = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  margin-top: -15%;
  margin-bottom: 20px;
`

export const Name = styled.Text`
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  font-family: 'Lato-Bold';
`

export const NickName = styled.Text`
  font-size: 18px;
  line-height: 28px;
  color: #7c797b;
  font-family: 'Lato-Regular';
`

export const ContainerFollower = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`

export const ContentFollower = styled.View`
  align-items: center;
  margin: 0 24px;
`
export const CountFollower = styled.Text`
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  font-family: 'Lato-Bold';
`
export const TextFollower = styled.Text`
  font-size: 16px;
  color: #7c797b;
  font-family: 'Lato-Regular';
`
export const Separation = styled.View`
  background-color: #c4c4c4;
  width: 0.5px;
  height: 100%;
`

export const ContainerInteraction = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`

export const ContentInteraction = styled(RectButton)`
  align-items: center;
  padding: 20px;
`
export const CountInteraction = styled.Text`
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  font-family: 'Lato-Bold';
`
export const TextInteraction = styled.Text`
  font-size: 18px;
  margin-top: 15px;
  text-align: center;
  color: #fff;
  font-family: 'Lato-Regular';
`

export const Icon = styled(icon).attrs({
  size: 30,
  color: '#fff',
})`
  text-align: center;
`
