import React, { useContext, useState, useEffect } from 'react'
import auth  from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function Signup(email, password) {
        return auth.auth().createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.auth().signInWithEmailAndPassword(email, password)
    }

    function logout() {
        auth.auth().signOut()
    }


    useEffect(() => {
        const unsubscribe = auth.auth().onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        Signup,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}