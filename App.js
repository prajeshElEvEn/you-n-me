import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Chat from "./screens/Chat"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Home from "./screens/Home"

const Stack = createStackNavigator()

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Chat" component={Chat} /> */}
      {/* <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="Register" component={Register} /> */}
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  )
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <RootNavigator />
  )
}
