import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Pages/Home'
import Header from '../components/Header'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Sidebar from '../components/Sidebar'
import { StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Contacts from '../Pages/Contacts'
import Search from '../Pages/Search'
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Chat from '../Pages/Chat'

const App = createStackNavigator()

const AppRoutes: React.FunctionComponent = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312E37" />
    <LinearGradient colors={['#312E37', '#282829']} style={{ flex: 1 }}>
      <App.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            elevation: 4,
            shadowColor: '#000',
            shadowOpacity: 4,
            backgroundColor: '#312E37',
          },
        }}
      >
        <App.Screen
          name="Home"
          component={Home}
          options={{
            header: (props) => <Header {...props} />,
          }}
        />

        <App.Screen
          name="Contacts"
          component={Contacts}
          options={{
            headerTitle: 'Nova Conversa',
          }}
        />

        <App.Screen
          name="Search"
          options={{ title: 'Pesquisar' }}
          component={Search}
        />

        <App.Screen name="Chat" component={Chat} />
      </App.Navigator>
    </LinearGradient>
  </>
)

const AppDrawer: React.FunctionComponent = () => {
  const AppDrawer = createDrawerNavigator()
  return (
    <AppDrawer.Navigator
      initialRouteName="Root"
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <AppDrawer.Screen
        name="Root  "
        component={AppRoutes}
        options={{ headerShown: false }}
      />
    </AppDrawer.Navigator>
  )
}

export default AppDrawer
