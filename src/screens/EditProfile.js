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

function EditProfile({ navigation }) {
  return (
    <SafeAreaView style={{...styles.Container, justifyContent: "space-between"}}>
      <Text>Editar perfil</Text>
    </SafeAreaView>
  )
}

export default EditProfile