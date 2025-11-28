import React from 'react'
import styles from './GalleryCard.module.scss'
import { Link } from 'react-router-dom'
import { ImageBox } from '../ImageBox/ImageBox'

export default function GalleryCard({ cover, title, position, desc, _id, setPopup, set_id }) {
    function openPopup() {
        document.body.style.overflow = 'hidden'
        setPopup(true)
        set_id(_id)
    }
    
    return (
        <div className={styles.item} data-id={_id} onClick={openPopup}>
            {cover && (
                <figure className={styles['item__cover']}>
                    <ImageBox src={cover} alt={cover} className={styles['item__cover--img']}/>
                </figure>
            )}
            {title && desc && (
                <div>
                    <h1>{title}</h1>
                    {/* <p>{position}</p> */}
                    {/* <div className={styles['itemcard__text--desc']} dangerouslySetInnerHTML={{ __html: desc }}></div> */}
                </div>
            )}
        </div>
    )
}
