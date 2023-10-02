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

function Chat({ navigation }) {
  return (
    <SafeAreaView style={{...styles.Container, justifyContent: "space-between"}}>
      <Text>Chat com psicologo</Text>
    </SafeAreaView>
  )
}

export default Chat