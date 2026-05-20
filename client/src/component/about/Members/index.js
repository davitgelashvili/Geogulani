import React from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import ServiceCard from '../../ServiceCard/ServiceCard'
import Card from '../../Card/Card'
import { useLanguage } from '../../../context/LanguageContext'
import studenticon from '../../../assets/images/studentsclub_icon.png'
import adultsicon from '../../../assets/images/adultsclub_icon.png'

export const Members = () => {
    const { language } = useLanguage()

    const typesData = [
        {
            _id: 'vevsa3ca',
            title: {
                ka: 'სტანდარტული წევრი',
                en: `Standard Member`,
                ru: `スタンダード会員   `,
            },
            desc: {
                ka: `
                სტანდარტული წევრები პირველები იგებენ ასოციაციის სიახლეებს, ყოველგვარი საფასურის გარეშე მონაწილეობენ დაგეგმილ ღონისძიებებში და ქმნიან საკუთარ პროფილებს საერთაშორისო კალიგრაფიის ქსელში.
                <p>საწევრო გადასახადი:</p> <strong>საქართველო  – 10 ₾ / თვეში</strong>
                `,
                en: `
                Standard members are the first to receive updates about the Association’s activities, may participate in planned events free of charge, and can create their own profiles within the international calligraphy network.
                <p>Membership fee:</p> <strong>Georgia: 10 GEL / per month</strong>
                `,
                ru: `
                協会の活動情報を優先的に受け取り、イベントに無料で参加できるほか、国際書道ネットワーク上でプロフィールを作成することができます。
                <p>会費：</p> <strong>ジョージア：月額10ラリ　海外：月額10ユーロ</strong>
                `
            },
        },
        {
            _id: 'fa2cas',
            title: {
                ka: 'საერთაშორისო წევრი',
                en: `International Member`,
                ru: `インターナショナル会員`,
            },
            desc: {
                ka: `
                სტანდარტული წევრები პირველები იგებენ ასოციაციის სიახლეებს, ყოველგვარი საფასურის გარეშე მონაწილეობენ დაგეგმილ ღონისძიებებში და ქმნიან საკუთარ პროფილებს საერთაშორისო კალიგრაფიის ქსელში.
                <p>საწევრო გადასახადი:</p> <strong>საერთაშორისო  – 10 € / თვეში</strong>
                `,
                en: `
                Standard members are the first to receive updates about the Association’s activities, may participate in planned events free of charge, and can create their own profiles within the international calligraphy network.
                <p>Membership fee:</p> <strong>International: 10 EUR / per month</strong>
                `,
                ru: `
                協会の活動情報を優先的に受け取り、イベントに無料で参加できるほか、国際書道ネットワーク上でプロフィールを作成することができます。
                <p>会費：</p> <strong>海外：月額10ユーロ</strong>
                `
            },
        },
        {
            _id: 'sda2dcsasd',
            title: {
                ka: 'საპატიო წევრი',
                en: `Honorary Member`,
                ru: `名誉会員`,
            },
            desc: {
                ka: `
                <p>საპატიო წევრობა ენიჭებათ იმ პირებს, რომლებიც გამორჩეულად ნაყოფიერად მოღვაწეობენ ქართული კალიგრაფიის ხელოვნების განვითარებისათვის, პოპულარიზაციისა და გავრცელებისათვის.</p></br>
                საპატიო წევრებს ირჩევს ასოციაციის დირექტორატი. მათ გადაეცემათ ასოციაციის სპეციალური გრან-პრი  და აქვთ შესაძლებლობა მიიღონ მონაწილეობა ასოციაციის მიერ ორგანიზებულ ნებისმიერ ღონისძიებაში, ფესტივალებსა და საერთაშორისო ფორუმებში.
                `,
                en: `
                <p>Honorary membership is granted to individuals who have made an outstanding and productive contribution to the development, promotion, and dissemination of Georgian calligraphic art.</p></br>
                Honorary members are selected by the Association’s Directorate. They are awarded the Association’s special Grand Prix and are entitled to participate in any event, festival, or international forum organized by the Association.
                `,
                ru: `
                <p>ジョージア書道の発展・普及に顕著な貢献をした人物に授与されます。</p></br>
                協会理事会によって選出され、特別グランプリの授与や、すべてのイベント・フェスティバルへの参加資格が与えられます。
                `
            },
        }
    ]

    const apply = [
        {
            _id: 'dsad23ca',
            cover: studenticon,
            title: {
                ka: `მოსწავლეთა კლუბი`,
                en: `Students Club`,
                ru: `学生会員`
            },
            desc: {
                ka: `
                კლუბი განკუთვნილია 6-18 წლის ასაკის მოსწავლეთათვის,  წევრები მიიღებენ სპეციალურ სასწავლო მასალებს, ისინი პროფესიონალ კალიგრაფებთან შეისწავლიან ხელოვნების ამ დარგს და ექნებათ მონაწილეობის შესაძლებლობა ბავშვთა კონკურსებსა და ახალგაზრდულ ფესტივალებში; ასევე სარგებლობენ განსაკუთრებული შეღავათებითა და ექსკლუზიური შეთავაზებებით.
                <p>საწევრო გადასახადი:</p><strong>12 ₾ / წელიწადში</strong>
                `,
                en: `
                The club is designed for students aged 6–18. Members receive specially developed educational materials, study calligraphy under the guidance of professional calligraphers, and gain opportunities to participate in children’s competitions and youth festivals. They also benefit from special discounts and exclusive offers.
                <p>Membership fee:</p><strong>12 GEL / per year</strong>
                `,
                ru: `
                6〜18歳を対象とし、専門教材の提供、書道家による指導、子ども向けコンテストやフェスティバルへの参加機会があります。
                <p>会費：</p><strong>年額12ラリ</strong>
                `
            },
        },
        {
            _id: 'dsd2c',
            cover: adultsicon,
            title: {
                ka: `უფროსთა კლუბი`,
                en: `Adults Club`,
                ru: `成人会員`
            },
            desc:
            {
                ka: `
                წევრები იღებენ ექსკლუზიურ წვდომას შემოქმედებით პროგრამებსა და მასტერკლასებზე, პერსონალურ პროფესიულ კონსულტაციებს, მონაწილეობენ კონკურსებსა და ფესტივალებში, ასევე სარგებლობენ განსაკუთრებული შეღავათებითა და ექსკლუზიური შეთავაზებებით.
                <p>საწევრო გადასახადი:</p><strong>120 ₾ / წელიწადში</strong>
                `,
                en: `
                Members receive exclusive access to creative programs and masterclasses, personalized professional consultations, and opportunities to participate in competitions and festivals. They also enjoy special discounts and exclusive offers.
                <p>Membership fee:</p><strong>120 GEL / per year</strong>
                `,
                ru: `
                マスタークラス、個別指導、コンテストやフェスティバルへの参加機会が提供されます。
                <p>会費：</p><strong>年額120ラリ</strong>
                `
            },
        }
    ]

    const pageTitle = {
        ka: 'წევრობა',
        en: 'Membership',
        ru: 'メンバーシップ   ',
    }
    const pageText = {
        ka: '',
        en: '',
        ru: '第一国際ジョージア書道協会には、会員として参加することができます。会員の方には、文化・教育プロジェクトへの参加機会や、各種特典を受けることができます。',
    }

    const sectionTitle = {
        ka: 'კლუბი',
        en: 'Club',
        ru: '',
    }

    const footerText = {
        ka: `📌 კლუბების წევრებს ვთავაზობთ 50%- მდე  ფასდაკლებას ასოციაციის ყველა პროდუქციასა და აქტივობაზე.`,
        en: '📌 Club members receive up to a 50% discount on all Association products and activities.',
        ru: '※会員は、協会の各種商品・活動に対して最大50％の割引を受けられます。',
    }

    return (
        <>
            <Section>
                <PageTitle
                    title={pageTitle[language]}
                    text={pageText[language]}
                />
                {/* <SectionTitle title={'წევრობა'} /> */}
                <div className='row'>
                    {typesData && typesData?.map((item) => {
                        return (
                            <div className='col-lg-4' key={item._id}>
                                <Card
                                    cover={item.cover}
                                    title={item.title[language]}
                                    desc={item.desc[language]}
                                    contactLink
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
            <Section>
                <SectionTitle title={sectionTitle[language]} />
                <div className='row'>
                    {apply && apply?.map((item) => {
                        return (
                            <div className='col-lg-6' key={item._id}>
                                <ServiceCard
                                    cover={item.cover}
                                    title={item.title[language]}
                                    desc={item.desc[language]}
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
            <div className='container'>
                <Card
                    desc={footerText[language]}
                />
            </div>
        </>
    )
}
