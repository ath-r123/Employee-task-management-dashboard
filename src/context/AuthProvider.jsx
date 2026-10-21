import React from 'react'
import {getLocalStorage} from '../utils/localStorage.jsx'
import {setLocalStorage} from '../utils/localStorage.jsx'
import { useState, useEffect } from 'react'

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null) 

  useEffect(() => {
    setLocalStorage()
    const { employees} = getLocalStorage()
    setUserData({ employees})
  }, [])

  return (
    <div>
      <AuthContext.Provider value={{userData,setUserData}}>
            {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
