import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import theme from "../config/theme"
import Articles from "../screens/Articles.js"
import Article from "../screens/Article.js"

function HomeRoutes() {
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
          title: "PEACE SCHOOL",
          headerTitleAlign: "center"
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