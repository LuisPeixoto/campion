import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container } from './styles'

export function Loading() {
  return (
    <Container
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ActivityIndicator size="large" color="#fff" />
    </Container>
  )
}
