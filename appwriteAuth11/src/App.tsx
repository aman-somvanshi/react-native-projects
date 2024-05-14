import { View, Text } from 'react-native'
import React from 'react'
//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
//Screens
import Home from './screens/Home'
import Login from './screens/Login'
import  Signup  from './screens/Signup'

export type RootStackParamList = {
  Login : undefined;
  Signup : undefined;
  Home: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          title: "Login into the app"
        }}
        />
        <Stack.Screen 
        name='Signup'
        component={Signup}
        options={{
          title: "Sign Up onto the app"
        }}
        />
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title: "Go to Home"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App