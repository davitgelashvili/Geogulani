import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Section.module.scss'

export const SectionLink = ({link,text}) => {
    return (
        <Link to={link} className={styles.section__link}>
            {text}
        </Link>
    )
}
