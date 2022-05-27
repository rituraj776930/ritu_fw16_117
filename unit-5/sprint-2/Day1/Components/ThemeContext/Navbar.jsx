import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import { ThemeContext } from './ThemeContextProvider'

function Navbar() {
    const [theme , toggletheme] = useContext(ThemeContext)
    return (
    <>
    <div className={theme==="light" ? styles.light : styles.dark}><h1>Navbar</h1></div>
    <br />
    <button onClick={toggletheme}>Toggle Theme</button>
    </>
  )
}

export default Navbar