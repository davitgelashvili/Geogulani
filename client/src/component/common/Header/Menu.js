import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { useLanguage } from '../../../context/LanguageContext';

export default function Menu({ className, setActive }) {
    const { language } = useLanguage();
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const data = [
        {
            title: {
                ka: 'მთავარი',
                en: 'Home',
                ru: 'ホーム',
            },
            url: '/'
        },
        {
            title: {
                ka: 'ჩვენ',
                en: 'About',
                ru: '私たちについて',
            },
            data: [
                {
                    title: {
                        ka: 'ასოციაცია',
                        en: 'Asociation',
                        ru: '協会'
                    },
                    url: '/about',
                },
                {
                    title: {
                        ka: 'ფესტივალი გულანი',
                        en: 'Gulani Festival',
                        ru: 'グラニ・フェスティバル'
                    },
                    url: '/festgulani',
                },
                {
                    title: {
                        ka: 'ქართული კალიგრაფია',
                        en: 'Georgian Calligraphy',
                        ru: 'ジョージア書道'
                    },
                    url: '/geocalligraphy',
                },
                {
                    title: {
                        ka: 'პრეზიდენტის მიმართვა',
                        en: 'Message',
                        ru: 'メッセージ'
                    },
                    url: '/message',
                },
                {
                    title: {
                        ka: 'გუნდი',
                        en: 'Our Team',
                        ru: 'チーム'
                    },
                    url: '/teams',
                },
                {
                    title: {
                        ka: 'წევრობა',
                        en: 'Membership',
                        ru: '会員資格'
                    },
                    url: '/members',
                },
                {
                    title: {
                        ka: 'პარტნიორები',
                        en: 'Partners',
                        ru: 'パートナー'
                    },
                    url: '/partners',
                },
            ]
        },
        {
            title: {
                ka: 'განათლება',
                en: 'Education',
                ru: '教育',
            },
            data: [
                {
                    title: {
                        ka: 'კურსები',
                        en: 'Course',
                        ru: 'コース'
                    },
                    url: '/education',
                },
                {
                    title: {
                        ka: 'ბანაკები',
                        en: 'Camps',
                        ru: 'キャンプ'
                    },
                    url: '/camps',
                },
                {
                    title: {
                        ka: 'საერთაშორისო ინტეგრაცია',
                        en: 'Exchange',
                        ru: '国際交流'
                    },
                    url: '/exchange',
                }
            ]
        },
        {
            title: {
                ka: 'მედია',
                en: 'Media',
                ru: 'メディア',
            },
            data: [
                {
                    title: {
                        ka: 'სიახლეები',
                        en: 'News',
                        ru: 'ニュース'
                    },
                    url: '/blogs',
                },
                {
                    title: {
                        ka: 'გალერეა',
                        en: 'Gallery',
                        ru: 'ギャラリー'
                    },
                    url: '/gallery',
                },
                {
                    title: {
                        ka: 'ღონისძიებები',
                        en: 'Events',
                        ru: 'イベント'
                    },
                    url: '/events',
                },
            ]
        },
        {
            title: {
                ka: 'კონტაქტი',
                en: 'Contact',
                ru: 'お問い合わせ',
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
                
                const isCurrentSubmenuOpen = activeSubmenu === item?.title?.en;
                return (
                    <li className={`${styles['menu__item']}`} key={item?.title?.en}>
                        {item?.url && <Link className={`${styles['menu__item--link']}`} to={item?.url} onClick={() => {
                            setActiveSubmenu(null)
                            setActive(false)
                        }}>{item?.title?.[language]}</Link>}
                        {item?.data && (
                            <>
                                <p className={`${styles['menu__item--link']} ${isCurrentSubmenuOpen ? styles['active'] : ''}`} onClick={() => handleToggle(item.title.en)}>{item?.title?.[language]}</p>
                                {isCurrentSubmenuOpen && (
                                    <ul className={`${styles['menu__category']}`} data-name={item?.title?.en}>
                                        {item?.data?.map((_item) => {
                                            return (
                                                <Link to={_item?.url} className={`${styles['menu__category--link']}`} key={_item?.title.en} onClick={() => {
                                                    setActive(false)
                                                    setActiveSubmenu(null)
                                                }}>{_item?.title[language]}</Link>
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
