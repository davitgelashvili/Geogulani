import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import CustomButton from '../../CustomButton/CustomButton'
import logo from './../../../assets/images/logo.png'
import Logo from './Logo'
import Menu from './Menu'

export default function NavBar() {
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
                {
                    title: 'asociation',
                    url: '/',
                },
            ]
        },
        {
            title: 'Education',
            data: [
                {
                    title: '',
                    url: '/',
                },
            ]
        },
        {
            title: 'Media',
            data: [
                {
                    title: '',
                    url: '/',
                },
            ]
        },
        {
            title: 'Contact',
            url: '/contact'
        }
    ]
    return (
        <div className={`${styles['navbar']}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <Logo />
                    </div>
                    <div className='col'>
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    )
}
