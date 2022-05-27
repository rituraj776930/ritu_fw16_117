import React, { useState } from 'react'

export const ThemeContext = React.createContext()

function ThemeContextProvider({children}) {
    const [theme , settheme] = useState("light")
    const toggletheme = ()=>{
        {theme ==="light" ? settheme("dark") : settheme("light")}
    }
  return (
  <ThemeContext.Provider value={[theme , toggletheme]}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider