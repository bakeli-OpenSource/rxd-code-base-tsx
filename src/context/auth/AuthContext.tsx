import React, { useContext, useState } from 'react'
import { AuthContextData } from './Model'

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData)

type AuthContextProviderProps = {
  children: React.ReactNode
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);

  const login = (data: unknown) => {
    console.log("login ", data)
    setIsAuthenticate(true)
  }
  return (
    <AuthContext.Provider value={{ isAuthenticate, login }}>{children}</AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext)
}
export default AuthContextProvider
