import React from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import ServiceCard from '../../ServiceCard/ServiceCard'
import Card from '../../Card/Card'
import { useLanguage } from '../../../context/LanguageContext'

export const Members = () => {
    const { language } = useLanguage()

    const typesData = [
        {
            _id: 'vevsa3ca',
            title: {
                ka: 'სტანდარტული წევრი',
                en: `Standard Member`,
                ru: ``,
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
                ru: ``
            },
        },
        {
            _id: 'fa2cas',
            title: {
                ka: 'საერთაშორისო წევრი',
                en: `International Member`,
                ru: ``,
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
                ru: ``
            },
        },
        {
            _id: 'sda2dcsasd',
            title: {
                ka: 'საპატიო წევრი',
                en: `Honorary Member`,
                ru: ``,
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
                ru: ``
            },
        }
    ]

    const apply = [
        {
            _id: 'dsad23ca',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: {
                ka: `მოსწავლეთა კლუბი`,
                en: `Students’ Club`,
                ru: ``
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
                ru: ``
            },
        },
        {
            _id: 'dsd2c',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: {
                ka: `უფროსთა კლუბი`,
                en: `Adults’ Club`,
                ru: ``
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
                ru: ``
            },
        }
    ]

    const pageTitle = {
        ka: 'წევრობა',
        en: 'Membership',
        ru: '',
    }
    const pageText = {
        ka: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        en: 'test text',
        ru: '',
    }

    const sectionTitle = {
        ka: 'კლუბი',
        en: 'Club',
        ru: '',
    }

    const footerText = {
        ka: `📌 კლუბების წევრებს ვთავაზობთ 50%- მდე  ფასდაკლებას ასოციაციის ყველა პროდუქციასა და აქტივობაზე.`,
        en: '📌 Club members receive up to a 50% discount on all Association products and activities.',
        ru: '',
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
