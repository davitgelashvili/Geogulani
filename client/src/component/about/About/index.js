import React from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import { ImageBox } from '../../ImageBox/ImageBox'
import logo from './../../../assets/images/original_red.png'
import { useLanguage } from '../../../context/LanguageContext'

export const About = () => {
    const {language} = useLanguage()
    const pageTitle = {
        ka: 'ასოციაცია',
        en: 'Association',
        ru: '',
    }
    const pageText = {
        ka: 'ქართული კალიგრაფიის პირველი საერთაშორისო ასოციაცია შეიქმნა უძველესი და უნიკალური ქართული კალიგრაფიული ხელოვნების მრავალფეროვნების ასახვისა და თანამედროვეობაში გაცოცხლების მიზნით. ჩვენ ვცდილობთ შევინარჩუნოთ მრავალსაუკუნოვანი ტრადიცია და მოვძებნოთ მოდერნული შემოქმედებითი ფორმები, რათა  ფართო აუდიტორიას გავაცნოთ  კაცობრიობის  არამატერიალურ კულტურულ მემკვიდრეობად აღიარებული  ქართული  ანბანი.  ჩვენი ასოციაცია აერთიანებს როგორც პროფესიონალ კალიგრაფებს, ასევე მათაც, ვინც დაინტერესებულია კალიგრაფიული ხელოვნების შესწავლით. ჩვენ გვსურს უნიკალური ქართული კალიგრაფიის შენარჩუნება, განვითარება და მისი დაბრუნება თანამედროვე ქართულ   კულტურასა  და  განათლებაში.',
        en: 'test text',
        ru: '',
    }

    const title = {
        ka: 'სიმბოლოს შესახებ',
        en: 'About the Symbol',
        ru: '',
    }
    const desc = {
        ka: `
            <p>ეს უნიკალური ლოგო ქართული კულტურის სულიერ, შინაგან სიღრმეს, ხასიათსა და მრავალფეროვნებას გამოხატავს. ერთმანეთს ერწყმის ორი ფუნდამენტური ფერი: წითელი ფონი მემკვიდრეობითობის სიმბოლოა, ხოლო თეთრი გრაფიკული ხაზები – სიწმინდეს, სრულყოფილებასა და შემოქმედებით ენერგიას უკავშირდება.</p>
            <p>ლოგოს ძირითადი ფორმა წარმოადგენს უძველესი ანბანის, ასომთავრულის ასო „კან“-ს, რომელიც თავისი ვიზუალური ენით სიმბოლურად  ღმერთისა და ადამიანის დაურღვეველ კავშირს ასახავს. </p>
            <p>ლოგოს ცენტრალურ ნაწილში გამოყენებული წრიული ორნამენტი ქართული ისტორიული ხელოვნების კლასიკური მოტივია. ეს ორნამენტი უწყვეტი მოძრაობისა  და   მუდმივი განვითარების  სიმბოლოა, რომელიც  ქართული კულტურის მდიდარ ტრადიციებს გამოხატავს.</p>
            <p>ცენტრში განთავსებული წითელი ჯვარი პირდაპირ მიუთითებს საქართველოს ეროვნულ დროშასა  და, ზოგადად, ქართული კულტურის ქრისტიანულ საფუძვლებზე.</p>
            <p>წრიული ორნამენტის მთლიანი ფორმა კი  განასახიერებს ხევსურულ ფარს, რომელიც საქართველოს მდიდარი, ძლიერი, მტკიცე და უდრეკი მეომრული ტრადიციების სიმბოლოა.</p>
            <p>ორნამენტის გარშემო  განლაგებული  წითელი წერტილები ბროწეულის მარცვლების სიმბოლოებია, რომლებიც   ქართულ კულტურაში სიუხვეს, სიმრავლესა და ნაყოფიერებას გამოხატავს. მნიშვნლოვანია, რომ   ლოგოს  შემქმნელები ბროწეულის მარცვლებს  მოიაზრებენ   მრავალფეროვანი ქართული კულტურის  სიმბოლოდ.</p>
            <p>ჩვენი  ლოგო  სულიერი და კულტურული კოდების მატარებელი, ქართული კალიგრაფიის წარსულს, აწმყოსა და მომავალის გამაერთიანებელი   სიმბოლოა. </p>
            `,
        en: `
            <p>This unique logo embodies the spiritual depth, inner essence, character, and diversity of Georgian culture. Two fundamental colors are brought together in harmony: the red background symbolizes continuity and heritage, while the white graphic lines are associated with purity, perfection, and creative energy.</p>
            <p>The primary form of the logo is based on the Asomtavruli letter “Kan”, from the most ancient Georgian alphabet. Through its visual language, this form symbolically represents the indissoluble bond between God and humankind.</p>
            <p>The circular ornament used in the central part of the logo is a classical motif of Georgian historical art. It symbolizes continuous movement and constant development, reflecting the rich and enduring traditions of Georgian culture.</p>
            <p>The red cross placed at the center directly references the national flag of Georgia and, more broadly, the Christian foundations of Georgian culture.</p>
            <p>The overall circular form of the ornament evokes a Khevsurian shield, a symbol of Georgia’s rich, strong, steadfast, and resilient warrior traditions.</p>
            <p>The red dots arranged around the ornament symbolize pomegranate seeds, which in Georgian culture signify abundance, multiplicity, and fertility. Importantly, the creators of the logo interpret these pomegranate seeds as a symbol of the diversity inherent in Georgian culture.</p>
            <p>Our logo is thus a bearer of spiritual and cultural codes—a unifying symbol that connects the past, present, and future of Georgian calligraphy.</p>
        `,
        ru: '',
    }
    return (
        <>
            <Section bgColor={'#e5e7eb'}>
                <PageTitle
                    title={pageTitle[language]}
                    text={pageText[language]}
                />
                <div>
                    <div className='row'>
                        <div>
                            <SectionTitle title={title[language]} />
                        </div>
                        <div className='col-12 col-lg-2'>
                            <figure className={styles['cover']}>
                                <ImageBox src={logo} alt={'cover'} className={styles['cover__img']} />
                            </figure>
                        </div>
                        <div className='col-auto col-md'>
                            <div className={styles['text']} dangerouslySetInnerHTML={{ __html: desc[language] }}></div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
