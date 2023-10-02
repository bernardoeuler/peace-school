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

function DenunciationDetails({ navigation, route }) {
  const denunciationId = route.params.id
  return (
    <SafeAreaView style={{...styles.Container, justifyContent: "space-between"}}>
      <Text>Detalhes de uma denúncia {denunciationId}</Text>
    </SafeAreaView>
  )
}

export default DenunciationDetails