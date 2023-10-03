import { initializeApp, getApps } from "firebase/app"
import { initializeAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA_92RqjhdL5P9xCBchqDVmKB64Wgsfoeg",
  authDomain: "peace-school-sesi.firebaseapp.com",
  projectId: "peace-school-sesi",
  storageBucket: "peace-school-sesi.appspot.com",
  messagingSenderId: "534667404785",
  appId: "1:534667404785:web:f61dac98204a2a44569050"
}

let firebaseApp

if (getApps() < 1) {
  firebaseApp = initializeApp(firebaseConfig)
}

export const firestore = getFirestore(firebaseApp)
export const auth = initializeAuth(firebaseApp, {
  persistence: "SESSION"
})
export const storage = getStorage(firebaseApp)