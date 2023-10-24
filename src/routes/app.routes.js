import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeRoutes from "../routes/home.routes.js"
import ChatRoutes from "../routes/chat.routes.js"
import NewDenunciationRoutes from "../routes/newDenunciation.routes.js"
import DenunciationsListRoutes from "../routes/denunciations.routes.js"
import ProfileRoutes from "../routes/profile.routes.js"
import { AntDesign } from "@expo/vector-icons"
import hideTab from "../utils/hideTab.js"
import theme from "../config/theme"

function AppRoutes() {
  const Tab = createBottomTabNavigator()
  const { colors } = theme

  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500"
        },
        tabBarActiveTintColor: colors.primary[500],
        tabBarInactiveTintColor: colors.neutral[500]
      }}
    > 
      <Tab.Screen
        name="HomeRoutes"
        component={HomeRoutes}
        options={({ route }) => ({
          title: "Início",
          ...hideTab(route, "Article"),
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        })}
      />
      <Tab.Screen
        name="ChatRoutes"
        component={ChatRoutes}
        options={({ route }) => ({
          title: "Chat",
          ...hideTab(route, "Chat"),
          tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color={color} />
        })}
      />
      <Tab.Screen
        name="NewDenunciationRoutes"
        component={NewDenunciationRoutes}
        options={{
          title: "Nova denúncia",
          tabBarStyle: {display: "none"},
          tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={24} color={color} />
        }}
      />
      <Tab.Screen
        name="DenunciationsListRoutes"
        component={DenunciationsListRoutes}
        options={({ route }) => ({
          title: "Denúncias",
          ...hideTab(route, "DenunciationDetails"),
          tabBarIcon: ({ color }) => <AntDesign name="bars" size={24} color={color} />
        })} 
      />
      <Tab.Screen
        name="ProfileRoutes"
        component={ProfileRoutes}
        options={({ route }) => ({
          title: "Perfil",
          ...hideTab(route, "EditProfile"),
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />
        })}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes