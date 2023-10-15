import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import theme from "../config/theme"
import Articles from "../screens/Articles.js"
import Article from "../screens/Article.js"
import { Feather } from '@expo/vector-icons';

function HomeRoutes({ navigation }) {
  const Stack = createNativeStackNavigator()
  const { colors } = theme

  return (
    <Stack.Navigator 
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: colors.neutral[900],
        headerBackVisible: false,
        headerLeft: () => <Feather onPress={() => navigation.goBack()} style={{marginRight: 16}} name="arrow-left" size={32} color={colors.neutral[900]} />
      }}
    >
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{
          title: ""
        }}
      />
    </Stack.Navigator> 
  )
}

export default HomeRoutes