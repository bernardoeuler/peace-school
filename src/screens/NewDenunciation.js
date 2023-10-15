import React, { useState } from "react"
import { ScrollView, StatusBar, Select, TextArea, VStack, Button, Text, Input, Pressable } from "native-base"
import { Alert } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import { useNavigation } from "@react-navigation/native"
import styles from "../styles/global"
import theme from "../config/theme"
import { collection } from "firebase/firestore"
import { auth, firestore } from "../config/firebase"
import getSpecificDoc from "../utils/getSpecificDoc"
import parseTimestampToHours from "../utils/parseTimestampToHours"
import parseTimestampToDate from "../utils/parseTimestampToDate.js"
import storeData from "../utils/storeData"

function NewDenunciation({ route }) {
  const { denunciatorType } = route.params
  const { colors } = theme
  const navigation = useNavigation()
  const [isBtnLoading, setIsBtnLoading] = useState(false)

  const [hour, setHour] = useState("")
  const [date, setDate] = useState("")
  const [local, setLocal] = useState("")
  const [description, setDescription] = useState("")
  
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)

  function onTimeChange(event, newTimestamp) {
    setShowTimePicker(false)
    if (event.type === "set") {
      const newTime = parseTimestampToHours(newTimestamp)
      setHour(newTime)
    }
  }

  function onDateChange(event, newTimestamp) {
    setShowDatePicker(false)
    if (event.type === "set") {
      const newDate = parseTimestampToDate(newTimestamp)
      setDate(newDate)
    }
  }

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
        <Pressable onPress={() => setShowTimePicker(true)}>
          <Input isReadOnly value={hour} placeholder={parseTimestampToHours(Date.now())} />
        </Pressable>

        <Text mt={4} fontWeight="bold" color="neutral.700">Data</Text>
        <Pressable onPress={() => setShowDatePicker(true)}>
          <Input isReadOnly value={date} placeholder={parseTimestampToDate(Date.now())} />
        </Pressable>

        <Text mt={4} fontWeight="bold" color="neutral.700">Local</Text>
        <Input onChangeText={setLocal} placeholder="Ex: Quadra de futebol, cantina, etc." />

        <Text mt={4} fontWeight="bold" color="neutral.700">Descrição</Text>
        <TextArea onChangeText={setDescription} h="240px" placeholder="Descreva como ocorreu a situação e dê informações adicionais, como a aula em que aconteceu e a sala dos envolvidos." fontSize={16} _focus={{bg: "neutral.50"}}/>
      </VStack>

      {showTimePicker && 
      <DateTimePicker
        value={new Date()}
        mode="time" 
        onChange={onTimeChange}
        negativeButton={{label: "Cancelar"}}
        positiveButton={{label: "OK"}}
        is24Hour
      />}

      {showDatePicker && 
      <DateTimePicker
        value={new Date()}
        mode="date" 
        onChange={onDateChange}
        minimumDate={new Date(2023, 0, 1)}
        maximumDate={new Date()}
        negativeButton={{label: "Cancelar"}}
        positiveButton={{label: "OK"}}
      />}

      <Button isLoading={isBtnLoading} onPress={handleSubmit} mt={8} mb={16}>Finalizar</Button>
    </ScrollView>
  )
}

export default NewDenunciation