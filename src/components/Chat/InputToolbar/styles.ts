import styled from 'styled-components/native'
import { InputToolbar } from 'react-native-gifted-chat'

export const Container = styled(InputToolbar).attrs({
  primaryStyle: {
    borderRadius: 10,
    padding: 5,
  },
  containerStyle: {
    borderTopWidth: 0,
    backgroundColor: '#312E37',
    padding: 10,
  },
})``
