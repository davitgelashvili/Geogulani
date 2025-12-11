import React, { Children } from 'react'
import styles from './Section.module.scss'

export default function PageTitle({ title, text, left, right }) {
  return (
    <div className={styles.page__head}>
      {left && <img src={left} alt='cover' />}
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {right && <img src={right} alt='cover' />}
    </div>
  )
}
