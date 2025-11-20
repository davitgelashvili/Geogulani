import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import CustomButton from '../../CustomButton/CustomButton'
import logo from './../../../logo.png'

export default function Header() {
  return (
    <header className={`${styles['header']}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <Link to={'/'} className={`${styles['header__logo']}`}>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className='col-10'>
            <ul className='d-flex justify-content-between'>
              <li><Link to={'/'}>home</Link></li>
              <li>
                <Link to={''}>about</Link>
                <ul>
                  <li><Link to={'/about'}>association</Link></li>
                  <li><Link to={'/message'}>presidents message</Link></li>
                  <li><Link to={'/teams'}>our team</Link></li>
                  <li><Link to={'/members'}>membership</Link></li>
                </ul>
              </li>
              <li>
                <Link to={''}>education</Link>
                <ul>
                  <li><Link to={'/education'}>course</Link></li>
                  <li><Link to={'/camps'}>Camps</Link></li>
                  <li><Link to={'/exchange'}>exchange</Link></li>
                </ul>
              </li>
              <li>
                <Link to={''}>media</Link>
                <ul>
                  <li><Link to={'/blogs'}>news & blog</Link></li>
                  <li><Link to={'/events'}>event</Link></li>
                </ul>
              </li>
              <li>
                <Link to={'/gallery'}>gallery</Link>
              </li>
              <li>
                <Link to={'/contact'}>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
