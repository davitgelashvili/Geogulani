import React from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Section from '../../SectionTitle/Section'
import styles from './styles.module.scss'
import logo from './../../../assets/images/wearelogo.png'
import { useLanguage } from '../../../context/LanguageContext'


export const WeAre = () => {
    const { language } = useLanguage();
    const title = {
        ka: 'ჩვენ შესახებ',
        en: 'About Us',
        ru: '私たちについて',
    }
    const desc = {
        ka: 'ქართული კალიგრაფიის პირველი საერთაშორისო ასოციაცია შეიქმნა უძველესი და უნიკალური ქართული კალიგრაფიული ხელოვნების მრავალფეროვნების ასახვისა და თანამედროვეობაში გაცოცხლების მიზნით. ჩვენ ვცდილობთ შევინარჩუნოთ მრავალსაუკუნოვანი ტრადიცია და მოვძებნოთ მოდერნული შემოქმედებითი ფორმები, რათა  ფართო აუდიტორიას გავაცნოთ  კაცობრიობის  არამატერიალურ კულტურულ მემკვიდრეობად აღიარებული  ქართული  ანბანი.  ჩვენი ასოციაცია აერთიანებს როგორც პროფესიონალ კალიგრაფებს, ასევე მათაც, ვინც დაინტერესებულია კალიგრაფიული ხელოვნების შესწავლით. ჩვენ გვსურს უნიკალური ქართული კალიგრაფიის შენარჩუნება, განვითარება და მისი დაბრუნება თანამედროვე ქართულ   კულტურასა  და  განათლებაში.',
        en: `
            The first International Association of Georgian Calligraphy was established with the aim of presenting the diversity of ancient and unique Georgian calligraphic art and revitalizing it within a contemporary context. We strive to preserve a centuries-old tradition while simultaneously exploring modern creative forms through which we can introduce the Georgian alphabet—recognized as an element of humanity’s intangible cultural heritage—to a broad audience.
            Our Association brings together both professional calligraphers and individuals who are interested in studying and engaging with the art of calligraphy. Our mission is to safeguard, develop, and reintegrate the unique tradition of Georgian calligraphy into contemporary Georgian culture and educational practice.
        `,
        ru: `
        第一国際ジョージア書道協会は、古来より受け継がれてきた独自かつ多様なジョージア書道芸術を広く紹介するとともに、現代で新たな形として受け継ぎ、発展させることを目的として設立しました。
　私たちは数世紀にわたる伝統を守り、継承しています。また、ユネスコの無形文化遺産にも登録されているジョージア文字を、現代的かつ創造的な表現を通して、世界へ発信する方法を模索しています。
本協会には、プロの書道家のみならず、書道芸術の学習や実践に関心を持つ多くの人々が参加しています。私たちの使命は、ジョージア書道という独自の伝統を保護・発展させ、現代ジョージアの文化および教育へ再び根付かせることです。

        `,
    }
    return (
        <Section bgColor={'#fff'}>
            <div className={styles.weare}>
                <img src={logo} alt='logo' className={styles.weare__cover} />
                <SectionTitle title={title?.[language]} />
                <p className={styles.text}>
                    {
                        desc?.[language]
                    }
                </p>
            </div>
        </Section>
    )
}