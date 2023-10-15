import { ScrollView, VStack, Heading, Text, FlatList, Center, Box } from "native-base"

import theme from "../config/theme"

import styles from "../styles/global"

function DenunciationDetails({ route }) {
  const { colors } = theme
  const { documentId: denunciationId, status, hour, date, local, description } = route.params
  const statusText = status === "pending" ? "Em análise" : "Atendida"

  return (
    <ScrollView style={{...styles.Container}} showsVerticalScrollIndicator={false}>
      <VStack space={8} >
        <VStack space={1}>
          <Heading size="h6">Status da denúncia</Heading>
          <Text color="neutral.600" fontWeight="medium">{statusText}</Text>
        </VStack>

        <VStack space={1}>
          <Heading size="h6">Horário</Heading>
          <Text color="neutral.600" fontWeight="medium">{hour}</Text>
        </VStack>

        <VStack space={1}>
          <Heading size="h6">Data</Heading>
          <Text color="neutral.600" fontWeight="medium">{date}</Text>
        </VStack>
        
        <VStack space={1}>
          <Heading size="h6">Local</Heading>
          <Text color="neutral.600" fontWeight="medium">{local}</Text>
        </VStack>

        <VStack space={1}>
          <Heading size="h6">Descrição</Heading>
          <Text color="neutral.600" fontWeight="medium">{description}</Text>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default DenunciationDetails