import 'react-native-gesture-handler'

import React, { useState, useEffect } from 'react'

import { View, StatusBar, LogBox } from 'react-native'

import AppProvider from './hooks'
import Routes from './routes'
import { NavigationContainer } from '@react-navigation/native'

LogBox.ignoreLogs(['Reanimated 2'])

const App: React.FunctionComponent = () => {
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
