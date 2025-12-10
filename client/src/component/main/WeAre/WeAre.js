import React from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Section from '../../SectionTitle/Section'
import styles from './styles.module.scss'
import logo from './../../../assets/images/logo_ka.png'


export const WeAre = () => {
    const title = {
        ka: 'ჩვენ შესახებ',
        en: '',
        ru: '',
    }
    const desc = {
        ka: 'ქართული კალიგრაფიის პირველი საერთაშორისო ასოციაცია შეიქმნა უძველესი და უნიკალური ქართული კალიგრაფიული ხელოვნების მრავალფეროვნების ასახვისა და თანამედროვეობაში გაცოცხლების მიზნით. ჩვენ ვცდილობთ შევინარჩუნოთ მრავალსაუკუნოვანი ტრადიცია და მოვძებნოთ მოდერნული შემოქმედებითი ფორმები, რათა  ფართო აუდიტორიას გავაცნოთ  კაცობრიობის  არამატერიალურ კულტურულ მემკვიდრეობად აღიარებული  ქართული  ანბანი.  ჩვენი ასოციაცია აერთიანებს როგორც პროფესიონალ კალიგრაფებს, ასევე მათაც, ვინც დაინტერესებულია კალიგრაფიული ხელოვნების შესწავლით. ჩვენ გვსურს უნიკალური ქართული კალიგრაფიის შენარჩუნება, განვითარება და მისი დაბრუნება თანამედროვე ქართულ   კულტურასა  და  განათლებაში.',
        en: '',
        ru: '',
    }
    return (
        <Section bgColor={'#fff'}>
            <div className={styles.weare}>
                <SectionTitle title={title.ka} />
                <img src={logo} alt='logo' style={{width: '200px'}}/>
                <p className={styles.text}>
                    {
                        desc.ka
                    }
                </p>
            </div>
        </Section>
    )
}