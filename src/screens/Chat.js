import { ScrollView, HStack, IconButton, TextArea, Box } from "native-base"
import { SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import styles from "../styles/global"
import theme from "../config/theme"

function Chat() {
  const { colors } = theme

  return (
    <SafeAreaView style={{...styles.Container}}>
      <ScrollView>
        <Box display="inline" maxW="80%" p={4} borderRadius={8} bgColor="neutral.50">Olá! Eu irei te atender, como posso ajudar?</Box>
      </ScrollView>
      <HStack space={2} >
        <TextArea flex={1} px={4} h={12} totalLines={2} placeholder="Digite aqui" />
        <IconButton size={12} borderRadius="full" bgColor="primary.500" icon={<Ionicons name="send" size={24} color="white" />} />
      </HStack>
    </SafeAreaView>
  )
}

export default Chat