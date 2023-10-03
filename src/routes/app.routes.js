import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeRoutes from "../routes/home.routes.js"
import ChatRoutes from "../routes/chat.routes.js"
import NewDenunciationRoutes from "../routes/newDenunciation.routes.js"
import DenunciationsListRoutes from "../routes/denunciations.routes.js"
import Profile from "../routes/profile.routes.js"
import hideTab from "../utils/hideTab.js"

function AppRoutes() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}> 
      <Tab.Screen
        name="HomeRoutes"
        component={HomeRoutes}
        options={({ route }) => ({...hideTab(route, "Article"), title: "Início"})}
      />
      <Tab.Screen
        name="ChatRoutes"
        component={ChatRoutes}
        options={({ route }) => ({...hideTab(route, "Chat"), title: "Chat"})}
      />
      <Tab.Screen name="NewDenunciationRoutes" component={NewDenunciationRoutes} options={{title: "Nova denúncia", tabBarStyle: {display: "none"}}} />
      <Tab.Screen name="DenunciationsListRoutes" component={DenunciationsListRoutes} options={({ route }) => ({...hideTab(route, "DenunciationDetails"), title: "Denúncias"})} />
      <Tab.Screen name="ProfileRoutes" component={Profile} options={({ route }) => ({...hideTab(route, "EditProfile"), title: "Perfil"})} />
    </Tab.Navigator>
  )
}

export default AppRoutes