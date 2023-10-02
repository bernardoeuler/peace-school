import {
  Text,
  Image as NBImage,
  Button as NBButton,
  Box,
  Heading,
} from "native-base"

import { SafeAreaView } from "react-native"

import styles from "../styles/global"

function Articles({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <Text>Articles</Text>
      <NBButton onPress={() => navigation.navigate("Article", { id: 1 })} mt={4}>Ir para página de um artigo</NBButton>
    </SafeAreaView>
  )
}

export default Articles