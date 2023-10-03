import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DenunciatorDetails from "../screens/DenunciatorDetails.js"
import NewDenunciation from "../screens/NewDenunciation.js"
import theme from "../config/theme"

function NewDenunciationRoutes() {
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
        name="DenunciatorDetails"
        component={DenunciatorDetails}
        options={{
          title: "Nova denúncia",
          headerTintColor: "white",
          headerStyle: { 
            backgroundColor: colors.primary[500]
          },
        }}
      />
      <Stack.Screen
        name="NewDenunciation"
        component={NewDenunciation}
        options={{
          title: "Nova denúncia",
          headerTintColor: "white",
          headerStyle: { 
            backgroundColor: colors.primary[500]
          },
        }}
      />
    </Stack.Navigator> 
  )
}

export default NewDenunciationRoutes