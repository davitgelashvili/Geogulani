import React from 'react'
import styles from './Section.module.scss'

export default function Section({ children, bgColor }) {
  return (
    <section className={styles.section} style={{backgroundColor: bgColor}}>
      <div className='container'>
        {children}
      </div>
    </section>
  )
}
