import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../screens/Welcome.js"
import Login from "../screens/Login.js"
import Register from "../screens/Register.js"

function AuthRoutes() {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  )
}

export default AuthRoutes