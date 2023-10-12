import React, { useState, useEffect } from "react"
import { ScrollView, StatusBar, Pressable, Heading, Image, TextArea, VStack, Button, Modal, Text, CloseIcon, Box, Icon, Center } from "native-base"
import { useNavigation } from "@react-navigation/native"
import styles from "../styles/global"
import theme from "../config/theme"

function DenunciatorDetails() {
  const { colors } = theme
  const navigation = useNavigation()

  function handleSubmit(type) {
    console.log("Submiting details...", type)

    navigation.navigate("NewDenunciation", { denunciatorType: type })
  }

  return (
    <ScrollView style={{...styles.Container}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary[500]} />

      <Heading mt={4} px={4} size="h5" color="neutral.700" textAlign="center">Qual o seu envolvimento na situação?</Heading>

      <Pressable mt={8} mb={6} p={4} borderColor="neutral.100" borderWidth="1" borderRadius="24" alignItems="center" onPress={() => handleSubmit("victim")}>
        <Image source={require("../assets/images/profilepic.png")} alt="victim" size={40} />
        <Text size="large" color="neutral.600" fontWeight="semibold">Vítima</Text>
      </Pressable>
      <Pressable  mt={8} mb={6} p={4} borderColor="neutral.100" borderWidth="1" borderRadius="24" alignItems="center" onPress={() => handleSubmit("communicant")}>
        <Image source={require("../assets/images/speaking.png")} alt="communicant" size={40} />
        <Text size="large" color="neutral.600" fontWeight="semibold">Comunicante</Text>
      </Pressable>
    </ScrollView>
  )
}

export default DenunciatorDetails