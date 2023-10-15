import { SafeAreaView } from "react-native"
import { ScrollView, HStack, IconButton, TextArea } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import styles from "../styles/global"
import theme from "../config/theme"

function Chat() {
  const { colors } = theme

  return (
    <SafeAreaView style={{...styles.Container}}>
      <ScrollView></ScrollView>
      <HStack space={2} >
        <TextArea flex={1} px={4} h={12} totalLines={2} />
        <IconButton size={12} borderRadius="full" bgColor="primary.500" icon={<Ionicons name="send" size={24} color="white" />} />
      </HStack>
    </SafeAreaView>
  )
}

export default Chat