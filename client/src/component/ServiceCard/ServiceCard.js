import styles from './ServiceCard.module.scss'

export default function ServiceCard({ cover, title, desc, svg }) {
    return (
        <div className={styles.item}>
            {cover && (
                <figure className={styles['item__cover']}>
                    <img src={cover} alt='cover' className={styles['item__cover--img']} />
                </figure>
            )}
            {svg && (
                <figure className={styles['item__cover']} dangerouslySetInnerHTML={{ __html: svg }}></figure>
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
