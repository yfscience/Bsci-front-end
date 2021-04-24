import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return true
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  const newDark = {
    ...dark,
    card:{
      ...dark.card,
      background: "linear-gradient(-45deg,#152E51,#23436E)"
    },
    colors:{
      ...dark.colors,
      background: "#10223C",
      tertiary: "#44699F",
      primary:"#F6D76A",
      primaryBright:"#F6D76A",
      secondary: "#F6D76A",
    },
    nav:{
      ...dark.nav,
      background: "#23436E"
    },
    modal:{
      ...dark.modal,
      background: "#10223C"
    },
    button:{
      ...dark.button,
      // primary:{
      //   ...dark.button.primary,
      //   background: "#F6D76A",
      //   color :"#FA0B0B",
      // },
      secondary:{
        ...dark.button.secondary,
        border: "2px solid #F6D76A",
        borderColorHover: "#F6D76A",
        color :"#f6d76a",
      },
      // subtle:{
      //   ...dark.button.subtle,
      //   background: "#F6D76A",
      //   color :"#FA0B0B",
      // },
      // success:{
      //   ...dark.button.success,
      //   background: "#F6D76A",
      //   color :"#FA0B0B",
      // },
      tertiary:{
        ...dark.button.tertiary,
        background: "#0D1B30",
        color :"#FA0B0B",
        backgroundHover: "#0d1b30c9",
        backgroundActive: "#0d1b30c9",
      },
      text:{
        ...dark.button.text,
        backgroundHover: "#0d1b30c9",
        backgroundActive: "#0d1b30c9",
      }
    }
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={newDark}>{children}</SCThemeProvider>
      {console.log(newDark)}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
