import React from 'react'
import styles from './Header.module.scss'
import NavBar from './NavBar'
import SocBar from './SocBar'

export default function Header() {
  return (
    <>
      <SocBar />
      <header className={`${styles['header']}`}>
        <NavBar />
      </header>
    </>
  )
}
