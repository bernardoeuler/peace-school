import {
  Text,
  Box,
  Input,
  ScrollView,
  Pressable,
} from "native-base"
import { SafeAreaView } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import styles from "../styles/global"
import theme from "../config/theme"

function Articles({ navigation }) {
  const { colors } = theme

  return (
    <SafeAreaView style={{...styles.Container, justifyContent: "space-between"}}>
      <Box position="relative" justifyContent="center">
        <Input width="100%" h={10} p={0} pl={12} placeholder="Pesquisar artigos" />
        <AntDesign name="search1" size={24} color={colors.neutral[200]} position="absolute" left={10} />
      </Box>

      <ScrollView mt={6} showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => navigation.navigate("Article", { id: 1 })} position="relative" h={48} bgColor="amber.400">
          <Box position="absolute" bottom={0} width="100%" h={10} bgColor="black" opacity={0} />
          <Text position="absolute" bottom={2} left={2} fontWeight="semibold" color="neutral.900">Título do artigo</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Article", { id: 2 })} position="relative" h={48} bgColor="red.400" mt={4}>
          <Box position="absolute" bottom={0} width="100%" h={10} bgColor="black" opacity={0} />
          <Text position="absolute" bottom={2} left={2} fontWeight="semibold" color="neutral.900">Título do artigo</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Article", { id: 3 })} position="relative" h={48} bgColor="blue.400" mt={4}>
          <Box position="absolute" bottom={0} width="100%" h={10} bgColor="black" opacity={0} />
          <Text position="absolute" bottom={2} left={2} fontWeight="semibold" color="neutral.900">Título do artigo</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Article", { id: 4 })} position="relative" h={48} bgColor="green.400" mt={4}>
          <Box position="absolute" bottom={0} width="100%" h={10} bgColor="black" opacity={0} />
          <Text position="absolute" bottom={2} left={2} fontWeight="semibold" color="neutral.900">Título do artigo</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Article", { id: 5 })} position="relative" h={48} bgColor="yellow.400" mt={4}>
          <Box position="absolute" bottom={0} width="100%" h={10} bgColor="black" opacity={0} />
          <Text position="absolute" bottom={2} left={2} fontWeight="semibold" color="neutral.900">Título do artigo</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Article", { id: 6 })} position="relative" h={48} bgColor="violet.400" mt={4}>
          <Box position="absolute" bottom={0} width="100%" h={10} bgColor="black" opacity={0} />
          <Text position="absolute" bottom={2} left={2} fontWeight="semibold" color="neutral.900">Título do artigo</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Articles