import React, { Children } from 'react'
import styles from './Section.module.scss'

export default function SectionTitle({title, children, color}) {
  return (
    <div className={styles.section__head}>
      <h1 style={{color: color}}>{title}</h1>
      {children}
    </div>
  )
}
