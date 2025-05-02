"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"

export type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("solara-user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error)
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true)

    try {
      // In a real app, this would be an API call to your backend
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, accept any email/password with basic validation
      if (!email.includes("@") || password.length < 6) {
        toast({
          title: "Login failed",
          description: "Invalid email or password.",
          variant: "destructive",
        })
        setLoading(false)
        return false
      }

      // Create mock user
      const mockUser = {
        id: Math.random().toString(36).substring(2, 9),
        name: email.split("@")[0],
        email,
      }

      // Save user to localStorage
      localStorage.setItem("solara-user", JSON.stringify(mockUser))
      setUser(mockUser)

      toast({
        title: "Welcome back",
        description: "You have successfully logged in.",
      })

      setLoading(false)
      return true
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Login failed",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      })
      setLoading(false)
      return false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true)

    try {
      // In a real app, this would be an API call to your backend
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, accept any registration with basic validation
      if (!name || !email.includes("@") || password.length < 6) {
        toast({
          title: "Registration failed",
          description: "Please provide valid information.",
          variant: "destructive",
        })
        setLoading(false)
        return false
      }

      // Create mock user
      const mockUser = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
      }

      // Save user to localStorage
      localStorage.setItem("solara-user", JSON.stringify(mockUser))
      setUser(mockUser)

      toast({
        title: "Welcome to SOLARA",
        description: "Your account has been created successfully.",
      })

      setLoading(false)
      return true
    } catch (error) {
      console.error("Registration error:", error)
      toast({
        title: "Registration failed",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive",
      })
      setLoading(false)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("solara-user")
    setUser(null)
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })
    router.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
