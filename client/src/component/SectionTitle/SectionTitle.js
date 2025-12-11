import React, { Children } from 'react'
import styles from './Section.module.scss'

export default function SectionTitle({ title, children, color, left, right }) {
  return (
    <div className={styles.section__head}>
      {left && <img src={left} alt='cover' className={styles['section__head--img']}/>}
      <div>
        <h1 style={{ color: color }}>{title}</h1>
        {children}
      </div>
      {right && <img src={right} alt='cover' className={styles['section__head--img']}/>}
    </div>
  )
}
