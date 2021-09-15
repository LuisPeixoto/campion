import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../Pages/SignIn/Index'
import SignUp from '../Pages/SignUp/Index'
import Welcome from '../Pages/Welcome'
import LinearGradient from 'react-native-linear-gradient'
import { StatusBar } from 'react-native'

const Auth = createStackNavigator()

const AuThRoutes: React.FunctionComponent = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312E37" />
    <LinearGradient colors={['#312E37', '#282829']} style={{ flex: 1 }}>
      <Auth.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Auth.Screen name="Welcome" component={Welcome} />

        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
      </Auth.Navigator>
    </LinearGradient>
  </>
)

export default AuThRoutes
