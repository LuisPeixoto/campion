import 'react-native-gesture-handler'

import React, { useState, useEffect } from 'react'

import { View, StatusBar, LogBox } from 'react-native'
import io from 'socket.io-client'

import AppProvider from './hooks'
import Routes from './routes'
import { NavigationContainer } from '@react-navigation/native'

LogBox.ignoreLogs(['Reanimated 2'])

const App: React.FunctionComponent = () => {
  const [socket, setSocket] = useState<Object>()

  useEffect(() => {
    setSocket(io('http://10.0.10.213:3000'))
  }, [])

  useEffect(() => {
    socket?.on('ola', (message) => {
      console.log(message)
    })
  }, [socket])

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  )
}

export default App
