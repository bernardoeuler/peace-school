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

function DenunciationsList({ navigation }) {
  return (
    <SafeAreaView style={{...styles.Container, justifyContent: "space-between"}}>
      <Heading size="h4">Lista de denúncias</Heading>
      <NBButton onPress={() => navigation.navigate("DenunciationDetails", {id: 1})}>Denúncia 1</NBButton>
      <NBButton onPress={() => navigation.navigate("DenunciationDetails", {id: 2})}>Denúncia 2</NBButton>
      <NBButton onPress={() => navigation.navigate("DenunciationDetails", {id: 3})}>Denúncia 3</NBButton>
      <NBButton onPress={() => navigation.navigate("DenunciationDetails", {id: 4})}>Denúncia 4</NBButton>
    </SafeAreaView>
  )
}

export default DenunciationsList