import React, { useState } from 'react'
import styles from './styles.module.scss'

export const ImageBox = ({ src, alt, className }) => {
    const [loading, setLoading] = useState(true)

    return (
        <>
            {loading && (
                <div className={styles.box}></div>
            )}
            <img src={src} alt={alt} className={className && className} onLoad={() => setLoading(false)} />
        </>
    )
}