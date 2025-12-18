import React from 'react'
import styles from './CustomInput.module.scss'

export default function CustomInput({ title, type, name, value, placeholder, onChange, disabled }) {
    return (
        <label className={styles.label}>
            <p className={styles.label__title}>{title}</p>
            <input
                className={styles.label__input}
                type={type} 
                name={name} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange} 
                disabled={disabled}
            />
        </label>
    )
}
