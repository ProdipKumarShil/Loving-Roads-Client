import { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
  const [user, setUser] = useState({})

  const googlePopUpSignIn = () => {
    return signInWithPopup(auth, provider)
  }

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  
  const info = {
    googlePopUpSignIn,
    user,
    setUser,
    logOut,
    emailSignIn,
    emailSignUp,
    updateUser
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider