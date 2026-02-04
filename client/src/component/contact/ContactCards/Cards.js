import React from 'react'
import styles from './../styles.module.scss'

export const Cards = ({ children, data }) => {
  return (
    <div className={styles.card}>
      {data && (
        <div className={styles.card__in}>
          {data?.map((item) => {
            return (
              <li dangerouslySetInnerHTML={{ __html: item }} key={item}></li>
            )
          })}
        </div>
      )}
      {children}
    </div>
  )
}
