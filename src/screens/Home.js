import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import theme from "../config/theme"
import Articles from "../screens/Articles.js"
import Article from "../screens/Article.js"

function Home() {
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
          headerShown: false
        }}
      />
    </Stack.Navigator> 
  )
}

export default Home