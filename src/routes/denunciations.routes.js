import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DenunciationsList from "../screens/DenunciationsList.js"
import DenunciationDetails from "../screens/DenunciationDetails.js"
import theme from "../config/theme"

function DenunciationsRoutes() {
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
        name="DenunciationsList"
        component={DenunciationsList}
        options={{
          title: "Minhas denúncias",
          headerTintColor: "white",
          headerStyle: { 
            backgroundColor: colors.primary[500]
          },
        }}
      />
      <Stack.Screen
        name="DenunciationDetails"
        component={DenunciationDetails}
        options={{
          title: "Detalhes da denúncia",
          headerTintColor: "white",
          headerStyle: { 
            backgroundColor: colors.primary[500]
          },
        }}
      />
    </Stack.Navigator> 
  )
}

export default DenunciationsRoutes