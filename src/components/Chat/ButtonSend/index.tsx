import React from 'react'
import { Send, Container, Icon } from './styles'

export function ButtonSend(props: any) {
  return (
    <Container {...props}>
      <Send>
        <Icon />
      </Send>
    </Container>
  )
}
