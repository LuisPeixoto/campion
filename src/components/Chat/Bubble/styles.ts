import styled from 'styled-components/native'
import { Bubble } from 'react-native-gifted-chat'

export const Container = styled(Bubble).attrs({
  wrapperStyle: {
    right: {
      padding: 8,
      borderRadius: 0,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 20,
      backgroundColor: '#C1C1C1',
    },
    left: {
      padding: 8,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 0,
      backgroundColor: '#23222A',
    },
  },

  textStyle: {
    right: {
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: '#000000',
    },

    left: {
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: '#C1C1C1',
    },
  },
})``
