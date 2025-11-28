import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Menu({ className, setActive }) {
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const data = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'About',
            data: [
                {
                    title: 'Asociation',
                    url: '/about',
                },
                {
                    title: 'Message',
                    url: '/message',
                },
                {
                    title: 'Our Team',
                    url: '/teams',
                },
                {
                    title: 'Membership',
                    url: '/members',
                },
            ]
        },
        {
            title: 'Education',
            data: [
                {
                    title: 'Course',
                    url: '/education',
                },
                {
                    title: 'Camps',
                    url: '/camps',
                },
                {
                    title: 'Exchange',
                    url: '/exchange',
                }
            ]
        },
        {
            title: 'Media',
            data: [
                {
                    title: 'News & Blogs',
                    url: '/blogs',
                },
                {
                    title: 'Gallery',
                    url: '/gallery',
                },
                {
                    title: 'Events',
                    url: '/events',
                },
            ]
        },
        {
            title: 'Contact',
            url: '/contact'
        }
    ]

    function handleToggle(title) {
        setActiveSubmenu(prevTitle => (prevTitle === title ? null : title))
    }

    return (
        <ul className={`${styles['menu']} position-absolute ${className}`}>
            {data && data?.map((item) => {
                const isCurrentSubmenuOpen = activeSubmenu === item.title;
                return (
                    <li className={`${styles['menu__item']}`} key={item?.title}>
                        {item?.url && <Link className={`${styles['menu__item--link']}`} to={item?.url} onClick={() => {
                            setActiveSubmenu(null)
                            setActive(false)
                        }}>{item?.title}</Link>}
                        {item?.data && (
                            <>
                                <p className={`${styles['menu__item--link']} ${isCurrentSubmenuOpen ? styles['active'] : ''}`} onClick={() => handleToggle(item.title)}>{item?.title}</p>
                                {isCurrentSubmenuOpen && (
                                    <ul className={`${styles['menu__category']}`} data-name={item.title}>
                                        {item?.data?.map((_item) => {
                                            return (
                                                <Link to={_item?.url} className={`${styles['menu__category--link']}`} key={_item?.title} onClick={() => {
                                                    setActive(false)
                                                    setActiveSubmenu(null)
                                                }}>{_item?.title}</Link>
                                            )
                                        })}
                                    </ul>
                                )}
                            </>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}
