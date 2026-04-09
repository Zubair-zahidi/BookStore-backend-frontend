import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('cosmic_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Simulated login - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: '1',
          name: 'Cosmic Reader',
          email: email,
          avatar: '👨‍🚀'
        }
        setUser(userData)
        localStorage.setItem('cosmic_user', JSON.stringify(userData))
        resolve(userData)
      }, 1000)
    })
  }

  const signup = async (userData) => {
    // Simulated signup - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          id: Date.now().toString(),
          name: userData.name,
          email: userData.email,
          avatar: '👽'
        }
        setUser(newUser)
        localStorage.setItem('cosmic_user', JSON.stringify(newUser))
        resolve(newUser)
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('cosmic_user')
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}