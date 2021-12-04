import styled from 'styled-components/native'
import { GiftedChat } from 'react-native-gifted-chat'

export const Container = styled.View`
  flex: 1;
  background-color: #312e37;
`
export const ChatContent = styled(GiftedChat).attrs({
  listViewProps: {
    style: {
      backgroundColor: '#312E37',
    },
  },
  timeTextStyle: {
    right: {
      color: '#000',
    },
    left: {
      color: '#C1C1C1',
    },
  },
  minInputToolbarHeight: 80,
  placeholderTextColor: '#676266',
  textInputProps: {
    style: {
      backgroundColor: '#23222A',
      borderRadius: 8,
      fontSize: 16,
      marginRight: 15,
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: '#C1C1C1',
      flex: 1,
    },
  },
})``
