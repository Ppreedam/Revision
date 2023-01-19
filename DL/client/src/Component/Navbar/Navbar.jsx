import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
        <ul>
            <li>Logo</li>
        </ul>
        <ul>
            <li>AddDetails</li>
           
        </ul>
    </nav>
    </>
  )
}

export default Navbar