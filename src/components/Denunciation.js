import React from "react"
import { Pressable, HStack, VStack, Box, Heading, Text, ThreeDotsIcon, IconButton, Menu } from "native-base"
import deleteDenunciation from "../utils/deleteDenunciation"
import theme from "../config/theme"

function Denunciation(props) {
  const { status, title, denunciationDate, id, onPress } = props
  const ButtonProps = { onPress }
  const statusIndicatorColorScheme = status === "pending" ? "warning" : "success"
  const { colors } = theme

  return (
    <Pressable w="100%" borderRadius={8} borderWidth={2} borderColor={colors.neutral[100]} overflow="hidden" { ...ButtonProps }>
      <HStack justifyContent="space-between" bg="white" borderRadius={8} overflow="hidden"  >
        <HStack space={5}>
          <Box
            bg={`${statusIndicatorColorScheme}.500`}
            w={1.5}
            h="100%"
          >
          </Box>
          <VStack space={1} py={5}>
            <Heading size="h6" fontWeight="semibold">{title}</Heading>
            <Text color="neutral.500" fontWeight="medium">{denunciationDate}</Text>
          </VStack>
        </HStack>
        <HStack alignItems="center" pr={5}>
          <Menu
            placement="right top"
            trigger={triggerProps => {
              return <IconButton icon={<ThreeDotsIcon />} colorScheme="neutral" w={12} h={12} rounded="full" { ...triggerProps } />
            }}
          >
            <Menu.Item onPress={() => console.log("Edit denunciation")}>Editar</Menu.Item>
            <Menu.Item onPress={() => deleteDenunciation(id)}>Excluir</Menu.Item>
          </Menu>
        </HStack>
      </HStack>
    </Pressable>
  )
}

export default Denunciation