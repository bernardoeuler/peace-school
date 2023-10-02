import React, { useState } from "react"
import {
  Heading,
  Text,
  Image as NBImage,
  Button as NBButton,
  IconButton,
  Box,
  HStack,
  VStack,
  Checkbox,
  Divider,
  Icon
} from "native-base"
import { SafeAreaView } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import styles from "../styles/global"
import Input from "../components/Input"
import FormErrorMessage from "../components/FormErrorMessage"
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import validateEmail from "../utils/validateEmail"
import validatePassword from "../utils/validatePassword"
import storeData from "../utils/storeData"

function Register({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [userTermsAccepted, setUserTermsAccepted] = useState(false)

  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [passwordConfirmationError, setPasswordConfirmationError] = useState("")
  const [userTermsError, setUserTermsError] = useState("")

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordConfirmationVisible, setPasswordConfirmationVisible] = useState(false)

  async function handleRegister(name, email, password, passwordConfirmation, userTermsAccepted) {
    const userData = [name, email, password, passwordConfirmation, userTermsAccepted]
  
    try {
      if (validate(userData)) return
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      const userDataObject = { name, email, userId: user.uid }
      const docId = await storeData(userDataObject, "users")
    }
  
    catch (err) {
      console.log("Authentication error: ", err)
      handleError(err.code)
    }
  
    function validate(userData) {
      const formattedUserData = userData.map((data) => typeof data === "string" ? data.trim() : data)
      const [formattedName, formattedEmail, formattedPassword, formattedPasswordConfirmation, newUserTermsAccepted] = formattedUserData
      let isInvalid = false
  
      // Validate name
      formattedName.length < 1 ? 
        isInvalid = handleError("missing-name") :
        setNameError("")

      // Validate email
      if (formattedEmail.length < 1) {
        isInvalid = handleError("missing-email")
      }

      else if (validateEmail(formattedEmail)) {
        isInvalid = handleError("invalid-email")
      }
      
      else {
        setEmailError("")
      } 

      // Validate password
      validatePassword(formattedPassword) ?
        isInvalid = handleError(validatePassword(formattedPassword)) :
        setPasswordError("")

      // Validate confirm password
      if (formattedPasswordConfirmation.length < 1) {
        isInvalid = handleError("missing-password-confirmation")
      } 

      else if (formattedPassword !== formattedPasswordConfirmation) {
        isInvalid = handleError("passwords-does-not-match")
      } 
      
      else {
        setPasswordConfirmationError("")
      } 

      // Validate user terms checkbox
      newUserTermsAccepted ? 
        setUserTermsError("") :
        isInvalid = handleError("user-terms-not-accepted")

      return isInvalid
    }
  }

  function handleError(code) {
    console.log(code)
    switch (code) {
      case "missing-name":
        setNameError("Você precisa inserir um nome")
        break
      case "missing-email":
        setEmailError("Você precisa inserir um email")
        break
      case "invalid-email":
        setEmailError("Digite um email válido")
        break
      case "missing-password":
        setPasswordError("Você precisa criar uma senha")
        break
      case "short-password":
        setPasswordError("A senha precisa ter no mínimo 6 dígitos")
        break
      case "white-space-inside-password":
        setPasswordError("A senha não pode conter espaços em branco")
        break  
      case "missing-password-confirmation":
        setPasswordConfirmationError("Você precisa confimar a senha")
        break
      case "passwords-does-not-match":
        setPasswordConfirmationError("As senhas devem ser iguais")
        break
      case "user-terms-not-accepted":
        setUserTermsError("Para continuar, você deve aceitar os termos do usuário")
        break       
      
      // Firebase errors
      case "auth/invalid-email":
        setEmailError("Digite um email válido")
        break
      case "auth/email-already-in-use":
        setEmailError("O email já está em uso")
        break
      case "auth/weak-password":
        setPasswordError("A senha precisa ter no mínimo 6 dígitos")
        break        
    }

    return true
  }
  
  return (
    <SafeAreaView style={{...styles.Container, alignItems: "center", justifyContent: "flex-start"}}>
      <Heading mt={12} size="h3" alignSelf="flex-start">Crie uma conta</Heading>
      
      <Text mt={1} alignSelf="flex-start" size="normal" color="neutral.800">asddsd asdasd e asdasda o que a asdasd asd sd asdasdasd.</Text>

      <Box mt={16} w="100%">
        <VStack space={4}>
          <Input errorMessage={nameError} onChangeText={(text) => setName(text)} placeholder="Nome completo" InputLeftElement={<Icon as={<MaterialIcons name="person" />} ml={4} size={7} color="neutral.500" />} />
          <Input errorMessage={emailError} onChangeText={(text) => setEmail(text)} placeholder="Email" InputLeftElement={<Icon as={<MaterialIcons name="email" />} ml={4} size={7} color="neutral.500" />} />
          <Input errorMessage={passwordError} onChangeText={(text) => setPassword(text)} placeholder="Senha" type={passwordVisible ? "text" : "password"} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} ml={4} size={7} color="neutral.500" />} InputRightElement={<Icon as={<MaterialIcons name={passwordVisible ? "visibility" : "visibility-off"} />} mr={4} size={7} color={passwordVisible ? "primary.500" : "neutral.500"} onPress={() => setPasswordVisible(!passwordVisible)} />} />
          <Input errorMessage={passwordConfirmationError} onChangeText={(text) => setPasswordConfirmation(text)} placeholder="Confirmar senha" type={passwordConfirmationVisible ? "text" : "password"} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} ml={4} size={7} color="neutral.500" />} InputRightElement={<Icon as={<MaterialIcons name={passwordConfirmationVisible ? "visibility" : "visibility-off"} />} mr={4} size={7} color={passwordConfirmationVisible ? "primary.500" : "neutral.500"} onPress={() => setPasswordConfirmationVisible(!passwordConfirmationVisible)} />} />
        </VStack>

        <NBButton onPress={() => handleRegister(name, email, password, passwordConfirmation, userTermsAccepted)} mt={4} size="medium">Criar conta</NBButton>

        <HStack mt={4} space={2}>
          <Checkbox onPress={() => setUserTermsAccepted(!userTermsAccepted)} value="terms" accessibilityLabel="I accept the user terms" />
          <Text size="small">Eu aceito os termos do usuário</Text>
        </HStack>
        <FormErrorMessage errorMessage={userTermsError} />

        <HStack my={8} space={1} alignItems="center" justifyContent="center">
          <Divider w={8} h={0.5} />
          <Text alignSelf="center" size="small" fontWeight="semibold" color="neutral.300">OU</Text>
          <Divider w={8} h={0.5} />
        </HStack>
        
        <HStack justifyContent="space-between">
          <IconButton w="49%" borderWidth="1px" borderColor="neutral.100" _pressed={{bg: "neutral.50"}} icon={<NBImage source={require("../assets/images/logo-google.png")} size={5} alt="google" />} />
          <IconButton w="49%" bg="#1976D2" _pressed={{bg: "#1666B6"}} icon={<NBImage source={require("../assets/images/logo-facebook.png")} size={5} alt="google" />} />
        </HStack>
      </Box>

      <Box mb={4} style={{flexGrow: 1, justifyContent: "flex-end"}}>
        <Text mt={4} size="small">Já tem uma conta? <Text color="primary.500" fontWeight="bold" onPress={() => {navigation.navigate("Login")}}>Faça login</Text></Text>
      </Box>
    </SafeAreaView>
  )
}

export default Register
