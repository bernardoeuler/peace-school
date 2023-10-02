import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home.js"
// import Chat from "../screens/Chat.js"
// import NewDenunciation from "../screens/NewDenunciation.js"
// import MyDenunciations from "../screens/MyDenunciations.js"
// import Profile from "../screens/Profile.js"

function AppRoutes() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} options={{title: "Início"}} />
      {/* <Tab.Screen name="Chat" component={Chat} options={{title: "Chat"}} />
      <Tab.Screen name="NewDenunciation" component={NewDenunciation} options={{title: "Nova denúncia"}} />
      <Tab.Screen name="MyDenunciations" component={MyDenunciations} options={{title: "Minhas denúncias"}} />
      <Tab.Screen name="Profile" component={Profile} options={{title: "Minhas denúncias"}} /> */}
    </Tab.Navigator>
  )
}

export default AppRoutes