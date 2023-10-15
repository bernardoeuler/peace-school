import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import theme from "../config/theme"
import ChatIntroduction from "../screens/ChatIntroduction.js"
import Chat from "../screens/Chat.js"
import { Feather } from '@expo/vector-icons';

function ChatRoutes({ navigation }) {
  const Stack = createNativeStackNavigator()
  const { colors } = theme

  return (
    <Stack.Navigator 
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: colors.neutral[900],
        headerBackVisible: false,
        headerLeft: () => <Feather onPress={() => navigation.navigate("ChatIntroduction")} style={{marginRight: 16}} name="arrow-left" size={32} color={colors.neutral[900]} />
      }}
    >
      <Stack.Screen
        name="ChatIntroduction"
        component={ChatIntroduction}
        options={{
          title: "Conversar com psicólogo",
          headerLeft: undefined
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Psicólogo"
        }}
      />
    </Stack.Navigator> 
  )
}

export default ChatRoutes