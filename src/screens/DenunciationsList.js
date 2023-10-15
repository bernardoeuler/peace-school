import React, { useEffect, useState } from "react"
import { FlatList, Box } from "native-base"
import { SafeAreaView } from "react-native"
import FilterGroup from "../components/FilterGroup"
import FilterButton from "../components/FilterButton"
import Denunciation from "../components/Denunciation"
import EmptyDenunciationsFeedback from "../components/EmptyDenunciationsFeedback"
import Loading from "../components/Loading"
import styles from "../styles/global"
import { auth, firestore } from "../config/firebase"
import { getDocs, collection } from "firebase/firestore"
import getSpecificDoc from "../utils/getSpecificDoc"
import parseTimestamp from "../utils/parseTimestamp"

function DenunciationsList({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilterButton, setActiveFilterButton] = useState("pending")
  const [denunciations, setDenunciations] = useState([])
  const activeDenunciations = denunciations.filter(({status}) => status === activeFilterButton)

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", getDenunciations)
    return unsubscribe
  }, [navigation])

  useEffect(() => {
    getDenunciations()
  }, [activeFilterButton])

  async function getDenunciations() {
    console.log("get denunciations")
    const authenticatedUserId = auth.currentUser.uid
    const usersRef = collection(firestore, "users")
    const userDoc = await getSpecificDoc(usersRef, "userId", authenticatedUserId)
    const denunciationsRef = collection(firestore, `users/${userDoc.documentId}/denunciations`)
    const { docs: denunciationsDocs } = await getDocs(denunciationsRef)
    const denunciationsArray = denunciationsDocs.map(doc => {
      const data = doc.data()
      return { ...data, denunciationDate: parseTimestamp(data.timestamp), documentId: doc.id }
    })
    setDenunciations(denunciationsArray)
    setIsLoading(false)

    return denunciationsArray
  }

  function handleFilterChange(status) {
    setActiveFilterButton(status)
    setIsLoading(true)
  }

  return (
    <SafeAreaView style={{...styles.Container, justifyContent: "space-between"}}>
      <FilterGroup>
        <FilterButton onPress={() => handleFilterChange("pending")} title="Em análise" colorScheme="warning" isActive={activeFilterButton === "pending"} />
        <FilterButton onPress={() => handleFilterChange("resolved")} title="Atendidas" colorScheme="success" isActive={activeFilterButton === "resolved"} />
      </FilterGroup>

      { isLoading ? <Loading color="neutral.100" /> :
        <FlatList
          mt={6}
          showsVerticalScrollIndicator={false}
          data={activeDenunciations}
          renderItem={({item}) => (
            <Denunciation 
              onPress={() => navigation.navigate("DenunciationDetails", { ...item })}
              status={item.status}
              title={"Denúncia"}
              date={item.date}
              key={item.documentId}
              id={item.documentId}
            />
          )}
          ItemSeparatorComponent={() => <Box h={4} />}
          ListEmptyComponent={<EmptyDenunciationsFeedback activeFilter={activeFilterButton} />}
        />       
      }
    </SafeAreaView>
  )
}

export default DenunciationsList