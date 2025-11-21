import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Menu() {
    const data = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'About',
            data: [
                {
                    title: 'asociation',
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

    return (
        <ul className={`${styles['menu']}`}>
            {data && data?.map((item) => {
                return (
                    <li className={`${styles['menu__item']}`} key={item?.title}>
                        {item?.url && <Link className={`${styles['menu__item--link']}`} to={item?.url}>{item?.title}</Link>}
                        {item?.data && (
                            <>
                                <p className={`${styles['menu__item--link']}`}>{item?.title}</p>
                                <ul className={`${styles['menu__category']}`} data-name={item.title}>
                                    {item?.data?.map((_item) => {
                                        return (
                                            <Link to={_item?.url} className={`${styles['menu__category--link']}`} key={_item?.title}>{_item?.title}</Link>
                                        )
                                    })}
                                </ul>
                            </>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}
