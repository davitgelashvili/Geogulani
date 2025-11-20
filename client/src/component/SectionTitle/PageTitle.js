import React, { Children } from 'react'
import styles from './Section.module.scss'

export default function PageTitle({title, text}) {
  return (
    <div className={styles.page__head}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
