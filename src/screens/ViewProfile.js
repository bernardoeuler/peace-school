import {
  Text,
  Image as NBImage,
  Button as NBButton,
  Box,
  Heading,
  Input,
} from "native-base"

import { SafeAreaView } from "react-native"

import styles from "../styles/global"

function ViewProfile({ navigation }) {
  return (
    <SafeAreaView style={{...styles.Container, justifyContent: "space-between"}}>
      <Text>Ver perfil</Text>
      <NBButton onPress={() => navigation.navigate("EditProfile")}>Editar perfil</NBButton>
    </SafeAreaView>
  )
}

export default ViewProfile