import React from 'react'
import MenuLink from '../MenuLink'
import styles from './Menu.module.css'

export default function Menu() {
  
  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink label={'Início'} path="/"/>
            <MenuLink label={'Sobre Mim'} path="/about-me"/>
        </nav>
    </header>
  )
}
