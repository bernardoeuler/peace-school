import React, { useState } from "react"
import { ScrollView, StatusBar, Image, Select, TextArea, VStack, Button, Modal, Text, CloseIcon, Box, Icon, Center, FlatList, IconButton, Input } from "native-base"
import { Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "../styles/global"
import theme from "../config/theme"
import { auth, firestore } from "../config/firebase"
import getSpecificDoc from "../utils/getSpecificDoc"
import storeData from "../utils/storeData"
import { collection } from "firebase/firestore"

function NewDenunciation({ route }) {
  const { denunciatorType } = route.params
  const { colors } = theme
  const navigation = useNavigation()
  const [isBtnLoading, setIsBtnLoading] = useState(false)

  const [hour, setHour] = useState("")
  const [date, setDate] = useState("")
  const [local, setLocal] = useState("")
  const [description, setDescription] = useState("")

  async function handleSubmit() {
    const authenticatedUserId = auth.currentUser.uid
    const usersRef = collection(firestore, "users")
    const denunciationData = {
      hour,
      date,
      local,
      description,
      denunciatorType,
      status: "pending",
      timestamp: Date.now()
    }

    console.log("Submiting denunciation...")

    setIsBtnLoading(true)

    try {
      const userDoc = await getSpecificDoc(usersRef, "userId", authenticatedUserId)
      await storeData(denunciationData, `users/${userDoc.documentId}/denunciations`)
      console.log("Data stored in database")
      setIsBtnLoading(false)
      Alert.alert("Denúncia enviada com sucesso!", "Abra a aba Minhas denúncias para ver a denúncia que acabou de fazer.", [{text: "OK", onPress: () => navigation.goBack()}])
    }

    catch (err) {
      setIsBtnLoading(false)
      Alert.alert("Não foi possível enviar sua denúncia", "Houve um erro inesperado, verifique sua conexão e tente novamente.")
      console.warn("Error: " + err)
    }
  }

  return (
    <ScrollView style={{...styles.Container}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary[500]} />

      <VStack w="100%" space={4}>
        <Text fontWeight="bold" color="neutral.700">Horário</Text>
        <Input onChangeText={setHour} placeholder="00:00" />

        <Text mt={4} fontWeight="bold" color="neutral.700">Data</Text>
        <Input onChangeText={setDate} placeholder="dd/mm/aaaa" />

        <Text mt={4} fontWeight="bold" color="neutral.700">Local</Text>
        <Input onChangeText={setLocal} placeholder="Ex: Quadra de futebol, cantina, etc." />

        <Text mt={4} fontWeight="bold" color="neutral.700">Descrição</Text>
        <TextArea onChangeText={setDescription} h="240px" placeholder="Descreva como ocorreu a situação e dê informações adicionais, como a aula em que aconteceu e a sala dos envolvidos." fontSize={16} _focus={{bg: "neutral.50"}}/>
      </VStack>

      <Button isLoading={isBtnLoading} onPress={handleSubmit} mt={8} mb={16}>Finalizar</Button>
    </ScrollView>
  )
}

export default NewDenunciation