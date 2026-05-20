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
        ka: `ასოციაცია`,
        en: `Association`,
        ru: `協会`,
    }
    const pageText = {
        ka: `ქართული კალიგრაფიის პირველი საერთაშორისო ასოციაცია შეიქმნა უძველესი და უნიკალური ქართული კალიგრაფიული ხელოვნების მრავალფეროვნების ასახვისა და თანამედროვეობაში გაცოცხლების მიზნით. ჩვენ ვცდილობთ შევინარჩუნოთ მრავალსაუკუნოვანი ტრადიცია და მოვძებნოთ მოდერნული შემოქმედებითი ფორმები, რათა  ფართო აუდიტორიას გავაცნოთ  კაცობრიობის  არამატერიალურ კულტურულ მემკვიდრეობად აღიარებული  ქართული  ანბანი.  ჩვენი ასოციაცია აერთიანებს როგორც პროფესიონალ კალიგრაფებს, ასევე მათაც, ვინც დაინტერესებულია კალიგრაფიული ხელოვნების შესწავლით. ჩვენ გვსურს უნიკალური ქართული კალიგრაფიის შენარჩუნება, განვითარება და მისი დაბრუნება თანამედროვე ქართულ   კულტურასა  და  განათლებაში.`,
        en: `The first International Association of Georgian Calligraphy was established with the aim of presenting the diversity of ancient and unique Georgian calligraphic art and revitalizing it within a contemporary context. We strive to preserve a centuries-old tradition while simultaneously exploring modern creative forms through which we can introduce the Georgian alphabet—recognized as an element of humanity’s intangible cultural heritage—to a broad audience.`,
        ru: `ジョージア書道国際協会は、古くから受け継がれてきた独自のジョージア書道芸術の多様性を表現し、現代に蘇らせることを目的として設立されました。私たちは、何世紀にもわたる伝統を守りながら、現代的で創造的な表現方法を探求し、人類の無形文化遺産として認められているジョージア文字を広く紹介することを目指しています。本協会には、プロの書道家だけでなく、書道芸術の学習に関心を持つ人々も参加しています。私たちは、独自性あふれるジョージア書道を保存・発展させ、現代のジョージア文化と教育の中に再び根付かせたいと考えています。`,
    }

    const title = {
        ka: 'სიმბოლოს შესახებ',
        en: 'About the Symbol',
        ru: 'ロゴマークについて',
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
            <p>ლოგო შექმნილია ჩვენი ასოციაციის ვიცე-პრეზიდენტის კალიგრაფი მხატვარი და ხატმწერი დავით მოისწრაფიშვილის მიერ  </p>
            `,
        en: `
            <p>This unique logo embodies the spiritual depth, inner essence, character, and diversity of Georgian culture. Two fundamental colors are brought together in harmony: the red background symbolizes continuity and heritage, while the white graphic lines are associated with purity, perfection, and creative energy.</p>
            <p>The primary form of the logo is based on the Asomtavruli letter “Kan”, from the most ancient Georgian alphabet. Through its visual language, this form symbolically represents the indissoluble bond between God and humankind.</p>
            <p>The circular ornament used in the central part of the logo is a classical motif of Georgian historical art. It symbolizes continuous movement and constant development, reflecting the rich and enduring traditions of Georgian culture.</p>
            <p>The red cross placed at the center directly references the national flag of Georgia and, more broadly, the Christian foundations of Georgian culture.</p>
            <p>The overall circular form of the ornament evokes a Khevsurian shield, a symbol of Georgia’s rich, strong, steadfast, and resilient warrior traditions.</p>
            <p>The red dots arranged around the ornament symbolize pomegranate seeds, which in Georgian culture signify abundance, multiplicity, and fertility. Importantly, the creators of the logo interpret these pomegranate seeds as a symbol of the diversity inherent in Georgian culture.</p>
            <p>Our logo is thus a bearer of spiritual and cultural codes—a unifying symbol that connects the past, present, and future of Georgian calligraphy.</p>
            <p>The logo was created by David Moistsrapishvili, calligrapher, artist, and iconographer, who serves as Vice President of our Association.</p>
            `,
        ru: `
            <p>赤と白を基調としており、赤い背景は継承と伝統を、白い線は純粋さ、完成美、そして創造性を象徴しています。</p>
            <p>ロゴのモチーフは、最古のジョージア文字体系に属するアソムタヴルリ書体の文字「カン（Kan）」を基に構成しています。このデザインは、神と人間との深い結びつきを表しています。</p>
            <p>中央にある円形の装飾は、ジョージアの歴史的美術に見られる古典的なモチーフです。絶え間ない動きと発展を象徴するとともに、脈々と受け継がれてきた豊かな伝統を表しています。</p>
            <p>中央の赤い十字は、ジョージア国旗を想起させるものです。広い意味では、ジョージアにおけるキリスト教文化とのつながりを示しています。</p>
            <p>また、装飾全体にある円形のデザインは、ヘヴスレティ地方の盾をイメージしました。ジョージアに受け継がれる、力強い戦士の伝統を象徴しています。</p>
            <p>周囲にある赤い点は、ザクロの種を表しています。ジョージア文化において、繁栄、多様性、生命力の象徴とされています。</p>
            <p>本協会のロゴマークには、ジョージアの精神性と文化的な意味を込め、ジョージア書道の過去・現在・未来を結ぶ象徴としました。</p>
        `,
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
