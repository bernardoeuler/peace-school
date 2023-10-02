import {
  Text,
  Image as NBImage,
  Button as NBButton,
  Box,
  Heading,
} from "native-base"

import { SafeAreaView } from "react-native"

import styles from "../styles/global"

function ChatIntroduction({ navigation }) {
  return (
    <SafeAreaView style={{...styles.Container, justifyContent: "space-between"}}>
      <Box>
        <Heading size="h4">Olá, Bernardo</Heading>
        <Text mt={2} size="large">Que tal conversar com alguém para se sentir melhor? Fale com um de nosso psicólogos e eles vão poder te ajudar.</Text>
      </Box>
      <Box style={{alignItems: "center"}}>
        <NBImage source={require("../assets/images/chatting.png")} size={64} alt="image" />
      </Box>
      <NBButton onPress={() => navigation.navigate("Chat")} >Iniciar conversa</NBButton>
    </SafeAreaView>
  )
}

export default ChatIntroduction