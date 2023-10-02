import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import theme from "../config/theme"
import ChatIntroduction from "../screens/ChatIntroduction.js"
import Chat from "../screens/Chat.js"

function ChatRoutes() {
  const Stack = createNativeStackNavigator()
  const { colors } = theme

  return (
    <Stack.Navigator 
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: colors.neutral[900]
      }}
    >
      <Stack.Screen
        name="ChatIntroduction"
        component={ChatIntroduction}
        options={{
          title: "Conversar com psicólogo",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Nome do psicologo"
        }}
      />
    </Stack.Navigator> 
  )
}

export default ChatRoutes