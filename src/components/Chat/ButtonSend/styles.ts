import styled from 'styled-components/native'
import { Image } from 'react-native'
import { Send as send } from 'react-native-gifted-chat'

export const Send = styled.View`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background: #e8e8e8;
`
export const Container = styled(send).attrs({
  containerStyle: { justifyContent: 'center', alignItems: 'center' },
})``

export const Icon = styled(Image).attrs({
  source: require('../../../assets/icon.png'),
  style: { width: 30, height: 27 },
})``
