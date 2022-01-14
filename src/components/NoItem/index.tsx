import React from 'react'
import { Image } from 'react-native'
import { Container, Title, Vector } from './styles'
import chatImage from '../../assets/chat.png'
import searchImage from '../../assets/search.png'
import searchInitialImage from '../../assets/searchInitial.png'

interface NoItemProps {
  type: 'chat' | 'searchInitial' | 'search'
}

const NoItem: React.FunctionComponent<NoItemProps> = (type: NoItemProps) => {
  return (
    <Container>
      <Title>
        {type.type === 'chat'
          ? 'Inicie uma nova conversa em "+"'
          : type.type === 'searchInitial'
          ? 'Pesquise por novos contatos'
          : 'Nenhum usuário encontrado'}
      </Title>
      <Vector>
        <Image
          source={
            type.type === 'chat'
              ? chatImage
              : type.type === 'searchInitial'
              ? searchInitialImage
              : searchImage
          }
        />
      </Vector>
    </Container>
  )
}

export default NoItem
