import React from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import { ImageBox } from '../../ImageBox/ImageBox'
import cover from './../../../assets/images/Anbandidi_Gospel_—_1.png'
import cover2 from './../../../assets/images/Anbandidi_Gospel_—_12.png'
import left from './../../../assets/images/Asset5.png'
import right from './../../../assets/images/geocalligraphy_mkhedruli.png'


export const GeoCalligraphy = () => {
    const title = {
        ka: 'ქართული კალიგრაფია',
        en: '',
        ru: '',
    }
    const desc = {
        ka: `
            <p>კალიგრაფია მონასმების ხელოვნებაა - ფურცელზე დატანილი განსხვავებული მონასმების ხელოვნება. ნებისმიერი ანბანით შექმნილი კალიგრაფიული ნიმუშები ულამაზესია, მაგრამ ქართული ანბანი, გამორჩეული სილამაზით, დახვეწილობით, რიტმული გრაფიკული მონახაზებით, უჩვეულო ესთეტიკას ქმნის, წილნაყარს უნატიფეს ხელოვნებასთან.</p>
            <p>ქართული დამწერლობა ერთ-ერთი უძველესია და მსოფლიოს 14 ანბანურ სისტემას შორისაა. 2016 წლის 30 ნოემბერს ქართული ანბანი იუნესკომ კაცობრიობის არამატერიალური კულტურული მემკვიდრეობის წარმომადგენლობით ნუსხაში შეიტანა.</p>
            <p>ქართული დამწერლობის შემოღების შესახებ ზუსტი წყარო არ არსებობს. XI საუკუნის ქართველი ისტორიკოსი, ლეონტი მროველი ფარნავაზ I- ს მიაწერს (ძვ.წ.III ს) ქართული ანბანის შექმნასა და ქართული ენის განვრცობას -   სახელმწიფო ენად გამოცხადებას. ქართული დამწერლობის ერთ-ერთი უნიკალური მახასიათებელია, რომ ტექსტი ზუსტად ისე იკითხება, როგორც იწერება.</p>
            <p>ქართული კალიგრაფიის უძველეს ნიმუშად შეიძლება მივიჩნიოთ 430 წლით დათარიღებული პალესტინის ან ბირ ელ ყუტის ქართული მონასტრის წარწერა, რომელიც იერუსალიმში, ფრანცისკანელთა მუზეუმში ინახება. თუმცა აღმოსავლეთ საქართველოში, ნეკრესში აღმოაჩინეს წარწერებიანი ფილები. მიმდინარეობს წარწერების კვლევა და არსებობს საფუძველი ვივარაუდოთ, რომ, შესაძლოა, ეს წარწერები წინაქრისტიანული პერიოდით დათარიღდეს. ამავე თვალსაზრისით განსაკუთრებით მნიშვნელოვანია გრაკლიანი გორის წარწერა, რომელმაც შესაძლებელია სრულად შეცვალოს კაცობრიობის დამწერლობის ისტორია.</p>
            <p>არსებობს სამი სახის ქართული დამწერლობა: ასომთავრული (მრგლოვანი), ნუსხური და მხედრული. მათგან უძველესი ასომთავრულია. თითოეულ მათგანს სახასიათო გრაფიკული სტილი აქვს, თუმცა ასოთა მოხაზულობის ცვალებადობის თვალსაზრისით ნუსხური ასომთავრულის განვითარების შედეგია, მხედრული კი - ნუსხურისა. ნუსხური დამწერლობის მაგალითები IX საუკუნიდან გვხვდება, მაგრამ მთლიანად ნუსხურით შესრულებული ხელნაწერები მხოლოდ XII საუკუნიდან არსებობს. ნუსხურის პარალელურად კვლავ იყენებდნენ ასომთავრულს ეპიგრაფიკული წარწერებისთვის, ასევე ხელნაწერებში სათაურებისა და საზედაო ასოების შესასრულებლად. ნუსხური დამწერლობა დღემდე გამოიყენება საეკლესიო ლიტერატურაში. მხედრული თანამედროვე ქართულ ანბანს ეწოდება და მისი მაგალითები X საუკუნიდან დასტურდება.</p>
            <p>ქართული ანბანის მთელ მშვენიერებას ქართველი კალიგრაფების მიერ შექმნილი ქართული ხელნაწერი წიგნები ინახავენ. ქართულ ხელნაწერ ტრადიციასა და წიგნის ხელოვნებას 16-საუკუნოვანი ისტორია აქვს. დღეისათვის ცნობილია ქართული ხელნაწერი წიგნის 11 ათასამდე ეგზემპლარი, რომლებიც ინახება როგორც საქართველოს, ასევე უცხოეთის უმნიშვნელოვანეს წიგნსაცავებში. </p>
            <p>ქართული კალიგრაფიის ისტორია 60-ზე მეტ მნიშვნელოვან კალიგრაფს იცნობს. თუმცა, უნდა აღინიშნოს, რომ დღესაც, XXI საუკუნეში, იღვწის და </p>
            <p>საზეპურო ქართული ანბანით კალიგრაფიის შედევრებს ქმნის უამრავი საინტერესო ხელოვანი. </p>
        `,
        en: '',
        ru: '',
    }
    return (
        <>
            <Section>
                {/* <PageTitle
                    title={title.ka}
                    text={'კალიგრაფია ეს არის ლამაზად წერის ხელოვნება'}
                    left={left}
                    right={right}
                /> */}
                <SectionTitle
                    title={'კალიგრაფია ეს არის ლამაზად წერის ხელოვნება'}
                    left={left}
                    right={right} />
                <div className={styles['geocalligraphy']}>
                    <div className='row'>
                        <div>
                            <SectionTitle title={'ქართული კალიგრაფიის სამყაროში'} />
                        </div>
                        <div className='col-lg-auto'>
                            <figure className={styles['cover']}>
                                <ImageBox src={cover} alt={'cover'} className={`${styles['cover__img']} d-none d-lg-block`} />
                                <ImageBox src={cover2} alt={'cover'} className={`${styles['cover__img']} d-block d-lg-none`} />
                            </figure>
                        </div>
                        <div className='col'>
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
