import React from 'react'
import styles from './Header.module.scss'

export default function SocBar() {
    return (
        <div className={`${styles['socbar']}`}>
            <div className='container d-flex justify-content-end'>
                <div>
                    soc network
                </div>
            </div>
        </div>
    )
}
