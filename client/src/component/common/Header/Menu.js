import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Menu({ className, setActive }) {
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const data = [
        {
            title: {
                ka: 'მთავარი',
                en: 'Home',
                ru: '',
            },
            url: '/'
        },
        {
            title: {
                ka: 'ჩვენ',
                en: 'About',
                ru: '',
            },
            data: [
                {
                    title: 'Asociation',
                    url: '/about',
                },
                {
                    title: 'Georgia Calligraphy',
                    url: '/geocalligraphy',
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
            title: {
                ka: 'განათლება',
                en: 'Education',
                ru: '',
            },
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
            title: {
                ka: 'მედია',
                en: 'Media',
                ru: '',
            },
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
            title: {
                ka: 'კონტაქტი',
                en: 'Contact',
                ru: '',
            },
            url: '/contact'
        }
    ]

    function handleToggle(title) {
        setActiveSubmenu(prevTitle => (prevTitle === title ? null : title))
    }

    return (
        <ul className={`${styles['menu']} position-absolute ${className}`}>
            {data && data?.map((item) => {
                console.log(item)
                const isCurrentSubmenuOpen = activeSubmenu === item?.title?.en;
                return (
                    <li className={`${styles['menu__item']}`} key={item?.title?.en}>
                        {item?.url && <Link className={`${styles['menu__item--link']}`} to={item?.url} onClick={() => {
                            setActiveSubmenu(null)
                            setActive(false)
                        }}>{item?.title?.ka}</Link>}
                        {item?.data && (
                            <>
                                <p className={`${styles['menu__item--link']} ${isCurrentSubmenuOpen ? styles['active'] : ''}`} onClick={() => handleToggle(item.title.en)}>{item?.title?.ka}</p>
                                {isCurrentSubmenuOpen && (
                                    <ul className={`${styles['menu__category']}`} data-name={item?.title?.en}>
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
