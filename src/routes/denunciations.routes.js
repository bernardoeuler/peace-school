import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DenunciationsList from "../screens/DenunciationsList.js"
import DenunciationDetails from "../screens/DenunciationDetails.js"
import theme from "../config/theme"
import { Feather } from '@expo/vector-icons';

function DenunciationsRoutes({ navigation }) {
  const Stack = createNativeStackNavigator()
  const { colors } = theme

  return (
    <Stack.Navigator 
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: colors.neutral[900],
        headerBackVisible: false,
        headerLeft: () => <Feather onPress={() => navigation.navigate("DenunciationsList")} style={{marginRight: 16}} name="arrow-left" size={32} color={colors.neutral[900]} />
      }}
    >
      <Stack.Screen
        name="DenunciationsList"
        component={DenunciationsList}
        options={{
          title: "Minhas denúncias",
          headerLeft: undefined
        }}
      />
      <Stack.Screen
        name="DenunciationDetails"
        component={DenunciationDetails}
        options={{
          title: "Detalhes da denúncia"
        }}
      />
    </Stack.Navigator> 
  )
}

export default DenunciationsRoutes