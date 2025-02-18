import { createContext, useEffect, useState } from "react"

export type GlobalContextType = {
  theme: "light" | "dark"
  toggleTheme: () => void
  language: "en" | "es" 
  toggleLanguage: () => void
  timeFormat: "24" | "12"
  toggleTimeFormat: () => void
}

export const GlobalContext = createContext<GlobalContextType | null>(null)

export default function GlobalProvider({ children }: { children: React.ReactNode}) {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [language, setLanguage] = useState<"en" | "es" >("en")
  const [timeFormat, setTimeFormat] = useState<"24" | "12">("12")

  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // first time
    const savedLanguage = localStorage.getItem("language") as "en" | "es"
    if (savedLanguage) {
      setLanguage(savedLanguage) 
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("language", language as string);
    }
  }, [language, isInitialized])
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === "en" ? "es" : "en")
  }

  const toggleTimeFormat = () => {
    setTimeFormat(prevFormat => prevFormat === "24" ? "12" : "24")
  }

  return (
    <GlobalContext.Provider 
      value={{
        theme,
        toggleTheme,
        language,
        toggleLanguage,
        timeFormat,
        toggleTimeFormat
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
