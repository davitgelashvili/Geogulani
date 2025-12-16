import React, { useState } from 'react'
import { Link } from 'react-router'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
    const [openSection, setOpenSection] = useState('')
    const data = [
        {
            _id: '542gda3',
            title: 'მთავარი',
            url: '/adminpanel'
        },
        {
            _id: 'bfdbfee5',
            title: 'ბლოგი & სიახლეები',
            url: '/adminpanel/blogs'
        },
        {
            _id: 'das23c',
            title: 'გალერეა',
            url: '/adminpanel/gallery'
        },
        {
            _id: 'dsgdfsg3vc',
            title: 'თანამშრომლები',
            url: '/adminpanel/teams'
        },
        {
            _id: 'dsad3cs',
            title: 'კურსები',
            url: '/adminpanel/course'
        },
        {
            _id: 'dsadc8swc',
            title: 'ბანაკები',
            url: '/adminpanel/camps'
        },
        {
            _id: 'da23csacsf',
            title: 'ივენთები',
            url: '/adminpanel/events'
        },
        {
            _id: 'd23dsadcsa2d',
            title: 'მიმართვა',
            url: '/adminpanel/message'
        },
        {
            _id: 'dsa3casca',
            title: 'პარტნიორები',
            url: '/adminpanel/partners'
        }
    ]

    function open(_id) {
        if (openSection === _id) {
            setOpenSection('');
        } else {
            setOpenSection(_id);
        }
    }

    return (
        <div className={`${styles['sidebar']}`}>
            <ul className={`${styles['sidebar__menu']}`}>
                <Link className={`${styles['sidebar__menu--link']}`} to={'/'} target='_blank'>
                    <p className={`${styles['sidebar__menu--title']}`}>საიტზე გადასვლა</p>
                </Link>
                {data?.map((item) => {
                    return (
                        <li className={`${styles['sidebar__menu--item']}`} key={item._id} onClick={() => open(item._id)}>
                            {item.url && (
                                <Link className={`${styles['sidebar__menu--link']}`} to={item.url}>
                                    <p className={`${styles['sidebar__menu--title']}`}>{item.title}</p>
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
