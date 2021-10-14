import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'

interface AuthState {
  token: string
  user: object
}

interface SigninCredentials {
  username: string
  password: string
}

interface AuthContextData {
  user: object
  loading: boolean
  signIn(credentials: SigninCredentials): Promise<void>
  signOut(): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Campion:token',
        '@Campion:user',
      ])

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`
        setData({ token: token[1], user: JSON.parse(user[1]) })
      }

      setLoading(false)
    }
    loadStorageData()
  }, [])
  const signIn = useCallback(async ({ username, password }) => {
    console.log(`sadad`)

    const response = await api.post('auth/login', {
      username,
      password,
    })

    const { token, user } = response.data

    await AsyncStorage.setItem('@Campion:token', token)
    await AsyncStorage.setItem('@Campion:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@Campion:token')
    await AsyncStorage.removeItem('@Campion:user')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
