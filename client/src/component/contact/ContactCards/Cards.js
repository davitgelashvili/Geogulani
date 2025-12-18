import React from 'react'
import styles from './../styles.module.scss'

export const Cards = ({ data }) => {
  return (
    <div className={styles.card}>
      {data?.map((item) => {
        return (
          <li dangerouslySetInnerHTML={{ __html: item }} key={item}></li>
        )
      })}
    </div>
  )
}
