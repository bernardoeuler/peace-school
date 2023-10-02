import {
  Text,
  Image as NBImage,
  Button as NBButton,
  Box,
  Heading,
} from "native-base"

import { SafeAreaView } from "react-native"

import styles from "../styles/global"

function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <Box style={{flexGrow: 1, justifyContent: "flex-end"}}  py={6}>
          <Box>
            <Heading size="h3" fontWeight="bold">Bem-vindo ao Peace School</Heading>
            <Text mt={1} size="large" color="neutral.800">Aqui sua voz é ouvida, e você pode fazer da sua escola um lugar mais seguro</Text>
          </Box>

          <Box style={{flexGrow: 1, justifyContent: "center", alignItems: "center"}} mt={10}>
            <NBImage source={require("../assets/images/messaging.png")} alt="Online messaging" size={72} />
          </Box>

          <Box mt={10}>
            <NBButton onPress={() => navigation.navigate("Login")} py={"18px"} bg="transparent" borderWidth={2} variant="outline" _text={{color: "primary.500"}} _pressed={{bg: "neutral.50", borderColor: "primary.600", _text: {color: "primary.600"}}}>Entrar</NBButton>
            <NBButton onPress={() => navigation.navigate("Register")} mt={4}>Cadastrar</NBButton>
          </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Welcome