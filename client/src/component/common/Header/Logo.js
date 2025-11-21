import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from './../../../assets/images/logo.png'

export default function Logo() {
    return (
        <Link to={'/'} className={`${styles['logo']}`}>
            <img src={logo} alt='logo' />
        </Link>
    )
}
