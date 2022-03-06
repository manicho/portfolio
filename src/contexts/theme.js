import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// create the context for sharing global aspects between all children nodes
const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    // get the os theme preference first
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    })
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

// set only one children
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
