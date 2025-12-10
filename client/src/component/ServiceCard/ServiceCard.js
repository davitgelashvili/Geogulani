import React from 'react'
import styles from './ServiceCard.module.scss'
import { Link } from 'react-router-dom'

export default function ServiceCard({ cover, title, desc }) {
    return (
        <div className={styles.item}>
            {cover && (
                <figure className={styles['item__cover']}>
                    <img src={cover} alt='cover' className={styles['item__cover--img']} />
                </figure>
            )}
            {title && desc && (
                <div className={styles['item__text']}>
                    <h1>{title}</h1>
                    <div className={styles['itemcard__text--desc']} dangerouslySetInnerHTML={{ __html: desc }}></div>
                </div>
            )}
        </div>
    )
}
