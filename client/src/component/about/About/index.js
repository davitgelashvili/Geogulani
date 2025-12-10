import React from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import { ImageBox } from '../../ImageBox/ImageBox'
import logo from './../../../assets/images/original_red.png'

export const About = () => {
    const title = {
        ka: 'სიმბოლოს შესახებ',
        en: '',
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
        en: '',
        ru: '',
    }
    return (
        <>
            <Section bgColor={'#e5e7eb'}>
                <PageTitle
                    title={'ასოციაცია'}
                    text={'ქართული კალიგრაფიის პირველი საერთაშორისო ასოციაცია შეიქმნა უძველესი და უნიკალური ქართული კალიგრაფიული ხელოვნების მრავალფეროვნების ასახვისა და თანამედროვეობაში გაცოცხლების მიზნით. ჩვენ ვცდილობთ შევინარჩუნოთ მრავალსაუკუნოვანი ტრადიცია და მოვძებნოთ მოდერნული შემოქმედებითი ფორმები, რათა  ფართო აუდიტორიას გავაცნოთ  კაცობრიობის  არამატერიალურ კულტურულ მემკვიდრეობად აღიარებული  ქართული  ანბანი.  ჩვენი ასოციაცია აერთიანებს როგორც პროფესიონალ კალიგრაფებს, ასევე მათაც, ვინც დაინტერესებულია კალიგრაფიული ხელოვნების შესწავლით. ჩვენ გვსურს უნიკალური ქართული კალიგრაფიის შენარჩუნება, განვითარება და მისი დაბრუნება თანამედროვე ქართულ   კულტურასა  და  განათლებაში.'}
                />
                <div>
                    <div className='row'>
                        <div>
                            <SectionTitle title={title.ka} />
                        </div>
                        <div className='col-12 col-lg-3'>
                            <figure className={styles['cover']}>
                                <ImageBox src={logo} alt={'cover'} className={styles['cover__img']} />
                            </figure>
                        </div>
                        <div className='col-auto col-md'>
                            <div className={styles['text']} dangerouslySetInnerHTML={{ __html: desc.ka }}></div>
                        </div>
                    </div>
                </div>
            </Section>
            {/* <Section>
                <SectionTitle title={'Our Core Mission'} />
                <div className={styles['text']}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </Section> */}
        </>
    )
}
