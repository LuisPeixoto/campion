import React from 'react'
import { StatusBar, Image } from 'react-native'
import { Container, Title, Vector, Buttons } from './styles'
import vectorImg from '../../assets/vector.png'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/core'

const Welcome: React.FunctionComponent = () => {
  const navigation = useNavigation()
  return (
    <Container colors={['#312E37', '#282829']}>
      <Title>Troque mensagens com outros usuários</Title>
      <Vector>
        <Image source={vectorImg} />
      </Vector>
      <Buttons>
        <Button
          textColor="#312E37"
          onPress={() => {
            navigation.navigate('SignIn')
          }}
        >
          Realizar o login
        </Button>

        <Button
          textColor="#E8E8E8"
          hasBorder={true}
          onPress={() => {
            navigation.navigate('SignUp')
          }}
        >
          Cadastra-se
        </Button>
      </Buttons>
    </Container>
  )
}

export default Welcome
