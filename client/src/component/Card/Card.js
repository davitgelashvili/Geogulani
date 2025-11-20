import React from 'react'
import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

export default function Card({ cover, title, desc, url, contactLink }) {
    return (
        <div className={styles.itemcard}>
            {cover && (
                <figure className={styles['itemcard__cover']}>
                    <img src={cover} alt='cover' className={styles['itemcard__cover--img']} />
                </figure>
            )}
            <div className={styles['itemcard__text']}>
                <h1 className={styles['itemcard__text--title']}>{title}</h1>
                <div className={styles['itemcard__text--desc']} dangerouslySetInnerHTML={{ __html: desc }}></div>
                {url && <Link to={url} className={styles['itemcard__text--link']}>Read More</Link>}
                {contactLink && <Link to={'/contact'} className={styles['itemcard__text--contact']}>contact</Link>}
            </div>
        </div>
    )
}
