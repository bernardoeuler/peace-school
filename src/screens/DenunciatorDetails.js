import React, { useState, useEffect } from "react"
import { ScrollView, StatusBar, Pressable, Heading, Select, TextArea, VStack, Button, Modal, Text, CloseIcon, Box, Icon, Center, FlatList, IconButton } from "native-base"
import { Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MaterialIcons } from "@expo/vector-icons"
import Loading from "../components/Loading"
import styles from "../styles/global"
import theme from "../config/theme"
import { auth, firestore } from "../config/firebase"
import getSpecificDoc from "../utils/getSpecificDoc"
import storeData from "../utils/storeData"
import { addDoc, collection } from "firebase/firestore"

function DenunciatorDetails() {
  const { colors } = theme
  const navigation = useNavigation()
  const [isBtnLoading, setIsBtnLoading] = useState(false)

  const [description, setDescription] = useState("")

  async function handleSubmit() {
    const authenticatedUserId = auth.currentUser.uid
    const usersRef = collection(firestore, "users")
    const denunciationData = {
      local,
      hour,
      date,
      description,
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
      Alert.alert("Denúncia enviada com sucesso!", "Abra a aba Minha denúncias para ver a denúncia que acabou de fazer.", [{text: "OK", onPress: () => navigation.goBack()}])
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

      <Heading mt={4} size="h3" color="neutral.700">Quem é você?</Heading>

      <VStack w="100%" space={4} mt={6}>

      </VStack>

      <Button isLoading={isBtnLoading} onPress={() => navigation.navigate("NewDenunciation")} mt={8} mb={6}>Finalizar</Button>
    </ScrollView>
  )
}

export default DenunciatorDetails