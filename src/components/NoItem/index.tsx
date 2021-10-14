import React from 'react'
import { StatusBar, Image } from 'react-native'
import { Container, Title, Vector, Buttons } from './styles'
import vectorImg from '../../assets/noItem.png'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/core'

const NoItem: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Inicie uma nova conversa em "+"</Title>
      <Vector>
        <Image source={vectorImg} />
      </Vector>
    </Container>
  )
}

export default NoItem
