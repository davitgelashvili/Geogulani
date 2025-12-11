import React from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Section from '../../SectionTitle/Section'
import styles from './styles.module.scss'
import logo from './../../../assets/images/wearelogo.png'


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
                <img src={logo} alt='logo' className={styles.weare__cover}/>
                <SectionTitle title={title.ka} />
                <p className={styles.text}>
                    {
                        desc.ka
                    }
                </p>
            </div>
        </Section>
    )
}