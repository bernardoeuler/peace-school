import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import theme from "../config/theme"
import ViewProfile from "../screens/ViewProfile.js"
import EditProfile from "../screens/EditProfile.js"
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
        headerLeft: () => <Feather onPress={() => navigation.navigate("ViewProfile")} style={{marginRight: 16}} name="arrow-left" size={32} color={colors.neutral[900]} />
      }}
    >
      <Stack.Screen
        name="ViewProfile"
        component={ViewProfile}
        options={{
          title: "Perfil",
          headerLeft: undefined
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: "Editar perfil"
        }}
      />
    </Stack.Navigator> 
  )
}

export default ChatRoutes