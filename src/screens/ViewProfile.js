import React, { useState, useEffect } from "react"
import { Box, HStack, Heading, Pressable, Text, VStack } from "native-base"
import { SafeAreaView } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { Octicons } from "@expo/vector-icons"
import theme from "../config/theme"
import styles from "../styles/global"
import { collection } from "firebase/firestore"
import { auth, firestore } from "../config/firebase"
import getSpecificDoc from "../utils/getSpecificDoc.js"

function ViewProfile({ navigation }) {
  const { colors } = theme
  const [userName, setUserName] = useState("")

  useEffect(() => {
    (async () => {
      const userDoc = await getUserData()
      const firstUserName = userDoc.name.split(" ")[0]
      setUserName(firstUserName)
    })()
  }, [])

  async function getUserData() {
    const authenticatedUserId = auth.currentUser.uid
    const usersRef = collection(firestore, "users")
    return await getSpecificDoc(usersRef, "userId", authenticatedUserId)
  }

  return (
    <SafeAreaView style={{...styles.Container, paddingHorizontal: 0, justifyContent: "space-between", alignItems: "center"}}>
      <VStack alignItems="center" space={4}>
        <Box w={40} h={40} borderRadius="full" alignItems="center" justifyContent="center" bgColor="neutral.50" overflow="hidden">
          <FontAwesome5 name="user" size={80} color={colors.neutral[100]} />
        </Box>
        <Heading size="h6" textAlign="center">{userName}</Heading>
      </VStack>

      <VStack w="100%" space={0}>
        <Pressable _pressed={{backgroundColor: "neutral.50"}}>
          <HStack alignItems="center" px={10} py={6} space={6}>
            <Octicons name="person" size={32} color={colors.neutral[500]} />
            <Text size="large" fontWeight="semibold" color="neutral.500">Detalhes da conta</Text>
          </HStack>
        </Pressable>
        <Pressable _pressed={{backgroundColor: "neutral.50"}}>
          <HStack alignItems="center" px={10} py={6} space={5}>
            <Octicons name="gear" size={32} color={colors.neutral[500]} />
            <Text size="large" fontWeight="semibold" color="neutral.500">Configurações</Text>
          </HStack>
        </Pressable>
        <Pressable _pressed={{backgroundColor: "neutral.50"}}>
          <HStack alignItems="center" px={10} py={6} space={5}>
            <Octicons name="people" size={32} color={colors.neutral[500]} />
            <Text size="large" fontWeight="semibold" color="neutral.500">Suporte</Text>
          </HStack>
        </Pressable>
        <Pressable _pressed={{backgroundColor: "neutral.50"}} onPress={() => {auth.signOut()}}>
          <HStack alignItems="center" px={10} py={6} space={7}>
            <Octicons name="sign-out" size={32} color={colors.neutral[500]} />
            <Text size="large" fontWeight="semibold" color="neutral.500">Sair</Text>
          </HStack>
        </Pressable>
      </VStack>
    </SafeAreaView>
  )
}

export default ViewProfile