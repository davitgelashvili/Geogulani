import React from 'react'
import styles from './Card.module.scss'
import { Link } from 'react-router-dom'
import { ImageBox } from '../ImageBox/ImageBox'
import { SectionLink } from '../SectionTitle/SectionLink'

export default function Card({ cover, title, desc, url, contactLink }) {
    return (
        <div className={styles.itemcard}>
            {cover && (
                <div className={styles['itemcard__cover']}>
                    <ImageBox src={cover} alt={cover} className={styles['itemcard__cover--img']}/>
                </div>
            )}
            <div className={styles['itemcard__text']}>
                {title && <h1 className={styles['itemcard__text--title']}>{title}</h1>}
                {/* <div className={styles['itemcard__text--desc']} dangerouslySetInnerHTML={{ __html: desc }}></div> */}
                {!contactLink && <div className={styles['itemcard__text--desc']} dangerouslySetInnerHTML={{ __html: desc }}></div>}
                {contactLink && <div className={styles['itemcard__text--full-desc']} dangerouslySetInnerHTML={{ __html: desc }}></div>}
                {url && <div className={styles['itemcard__text--link']}><SectionLink link={url} text={'Read More'} /></div>}
                {contactLink && <Link to={'/contact'} className={styles['itemcard__text--contact']}>contact</Link>}
            </div>
        </div>
    )
}
