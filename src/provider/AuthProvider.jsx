import { createContext } from 'react'
export const AuthContext = createContext(null)
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const info = {}

const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider