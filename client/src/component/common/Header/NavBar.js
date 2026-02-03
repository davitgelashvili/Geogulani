import { useState } from 'react'
import styles from './Header.module.scss'
import Logo from './Logo'
import Menu from './Menu'
import { useLanguage } from '../../../context/LanguageContext'

export default function NavBar() {
    const [active, setActive] = useState(false)
    const { language, changeLanguage } = useLanguage();
    return (
        <div className={`${styles['navbar']}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-auto d-flex align-items-center'>
                        <Logo />
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        {active && <Menu className={'d-flex d-lg-none'} setActive={setActive} />}
                        <Menu className={'d-none d-lg-flex'} setActive={setActive} />
                        <div className='d-block d-lg-none'>
                            <button onClick={() => setActive(!active)} className={`${styles['navbar__burger']}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" /></svg>
                            </button>
                        </div>
                        <div className={styles.language}>
                            <select className={styles.language__select} value={language} onChange={(e) => changeLanguage(e.target.value)}>
                                <option value={'ka'}>ქარ</option>
                                <option value={'en'}>ENG</option>
                                {/* <option value={'ru'}>KOR</option> */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
