import React from 'react'
import Messages from '../../components/Messages'
import { Container } from './styles'

const Home: React.FunctionComponent = () => {
  return (
    <Container colors={['#312E37', '#282829']}>
      <Messages />
    </Container>
  )
}

export default Home
