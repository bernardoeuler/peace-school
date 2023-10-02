import { getFocusedRouteNameFromRoute } from "@react-navigation/native"

export default function hideTab(route, screenName) {
  return {
    tabBarStyle: ((route) => {
      const routeName = getFocusedRouteNameFromRoute(route) ?? ""
      if (routeName === screenName) return { display: "none" }
      return
    })(route)
  }
}