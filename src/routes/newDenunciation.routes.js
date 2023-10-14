import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DenunciatorDetails from "../screens/DenunciatorDetails.js"
import NewDenunciation from "../screens/NewDenunciation.js"
import theme from "../config/theme"
import { Feather } from '@expo/vector-icons';

function NewDenunciationRoutes({ navigation }) {
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
          headerLeft: () => <Feather onPress={() => navigation.goBack()} style={{marginRight: 16}} name="x" size={32} color={colors.neutral[900]} />,
        }}
      />
      <Stack.Screen
        name="NewDenunciation"
        component={NewDenunciation}
        options={{
          title: "Nova denúncia"
        }}
      />
    </Stack.Navigator> 
  )
}

export default NewDenunciationRoutes