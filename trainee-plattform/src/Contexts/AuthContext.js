import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { db } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password, firstname, lastname) {
    return auth.createUserWithEmailAndPassword(email, password).then( cred =>{
      return db.collection("user").doc(cred.user.uid).set({
        firstname: firstname,
        lastname: lastname
      })
    })
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }


  function logout() {
    auth.signOut()
  }

  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    //updateEmail,
    //updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading &&  children}
    </AuthContext.Provider>
  )
}