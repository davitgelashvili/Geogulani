import React from 'react'
import styles from './Section.module.scss'

export default function Section({ children }) {
  return (
    <section className={styles.section}>
      <div className='container'>
        {children}
      </div>
    </section>
  )
}
