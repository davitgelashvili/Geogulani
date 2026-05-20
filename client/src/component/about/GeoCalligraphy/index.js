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
import { useLanguage } from '../../../context/LanguageContext'


export const GeoCalligraphy = () => {
    const { language } = useLanguage()
    const pageTitle = {
        ka: 'კალიგრაფია ეს არის ლამაზად წერის ხელოვნება',
        en: 'Calligraphy is the art of expressive and aesthetically refined writing.',
        ru: '書道は、美しく表現豊かな文字を書く芸術です。  ',
    }
    const title = {
        ka: 'ქართული კალიგრაფიის სამყაროში',
        en: 'In the World of Georgian Calligraphy',
        ru: 'ジョージア書道の世界  ',
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
        en: `
        <p>Calligraphy is the art of the stroke—the art of distinctive marks placed upon paper. Calligraphic works created in any alphabet possess inherent beauty; however, the Georgian alphabet, with its exceptional elegance, refinement, and rhythmic graphic structures, generates a unique aesthetic, elevating writing to the level of the most delicate art.</p>
        <p>Georgian script is among the most ancient writing systems in the world and is counted among only fourteen alphabetic systems globally. On November 30, 2016, the Georgian alphabet was inscribed by UNESCO on the Representative List of the Intangible Cultural Heritage of Humanity.</p>
        <p>There is no definitive historical source that precisely documents the origin of Georgian script. The 11th-century Georgian historian Leonti Mroveli attributes the creation of the Georgian alphabet and the expansion of the Georgian language—declaring it a state language—to King Pharnavaz I (3rd century BCE). One of the unique characteristics of Georgian script is its phonetic transparency: the text is read exactly as it is written.</p>
        <p>The earliest known example of Georgian calligraphy is the inscription dated to 430 CE from the Georgian monastery of Palestine, also known as Bir el Qutt, preserved today in the Franciscan Museum in Jerusalem. In eastern Georgia, inscribed stone slabs have been discovered in Nekresi. These inscriptions are currently under scholarly examination, and there are grounds to suggest that they may date back to the pre-Christian period. From this perspective, the inscription discovered at Grakliani Hill is of particular importance, as it has the potential to fundamentally alter the established history of writing in human civilization.</p>
        <p>There are three forms of Georgian script: Asomtavruli (majuscule or monumental script), Nuskhuri, and Mkhedruli. The most ancient of these is Asomtavruli. Each script possesses its own distinctive graphic style; however, in terms of the evolution of letterforms, Nuskhuri developed from Asomtavruli, and Mkhedruli, in turn, evolved from Nuskhuri. Examples of Nuskhuri date back to the 9th century, although manuscripts written entirely in Nuskhuri appear only from the 12th century onward. Alongside Nuskhuri, Asomtavruli continued to be used for epigraphic inscriptions, as well as for titles and ornamental initials in manuscripts. Nuskhuri remains in use today in ecclesiastical literature. Mkhedruli constitutes the modern Georgian alphabet, with its earliest examples attested from the 10th century.</p>
        <p>The full beauty of the Georgian alphabet is preserved in Georgian handwritten books created by Georgian calligraphers. Georgian manuscript tradition and the art of the book span a history of sixteen centuries. Today, approximately 11,000 Georgian manuscript books are known, preserved in major libraries and collections both in Georgia and abroad.</p>
        <p>The history of Georgian calligraphy records more than sixty significant calligraphers. Nevertheless, it must be emphasized that even today, in the 21st century, numerous contemporary artists continue to work creatively, producing calligraphic masterpieces in the classical Georgian alphabet and ensuring the living continuity of this remarkable artistic tradition.</p>
        `,
        ru: `
            <p>書道とは、筆の運びによって形づくられる線の芸術であり、紙に刻まれる文字の美しさです。ジョージア文字は優雅さや繊細さ、そして流れるような形によって独自の美しい世界観を生み出し、「書く」という行為そのものを繊細な芸術へと高めています。</p>
            <p>ジョージア文字は世界で最も古い文字体系の一つであり、世界でわずか14種類しかないアルファベット体系のひとつに数えられています。2016年11月30日には、ユネスコの「人類の無形文化遺産の代表一覧」に登録されました。</p>
            <p>ジョージア文字の起源を明確に示す史料はありません。11世紀の歴史家レオンティ・ムロヴェリは、紀元前3世紀のファルナヴァズ1世がジョージア文字を作り、ジョージア語を公用語として整えたと記しています。特徴の一つは、書いた通りに読めるという点です。</p>
            <p>現存する最古の例は、西暦430年のパレスチナのジョージア修道院（ビル・エル・クット）の碑文で、現在はエルサレムのフランシスコ会博物館に保存されています。また、ジョージア東部のネクレシでは碑文が発見され、学術的な研究が進められています。さらに、グラクリアニ遺跡の碑文は、文字の歴史に新たな視点をもたらす可能性がある重要な発見とされています。</p>
            <p>ジョージア文字には、アソムタヴルリ、ヌスフリ、ムヘドルリの３種類があります。それぞれが独自の造形美を持っており、最も古いのはアソムタヴルリとされています。文字の発展の流れとしては、アソムタヴルリからヌスフリが生まれ、さらにヌスフリからムヘドルリへと発展しました。ヌスフリが使われた記録は9世紀まで遡り、12世紀以降にはヌスフリのみで書かれた写本も現れます。一方、ムヘドルリは現代のジョージア文字として用いられており、最古の記録は10世紀に遡ります。</p>
            <p>ジョージア文字の美しさは、書道家たちによって生み出された手書きの書物に受け継がれています。ジョージアの写本と書物の文化は、16世紀にわたる歴史を持ち、現在では約11,000点の写本が世界各地の図書館などに保存されています。</p>
            <p>ジョージア書道の歴史には、60名以上の著名な書家が知られています。現在でも、多くのアーティストが創作活動を続け、古典的なジョージア文字を用いた作品を生み出しながら、この伝統を生きた文として継承しています。</p>
        `,
    }
    return (
        <>
            <Section>
                <SectionTitle
                    title={pageTitle[language]}
                    left={left}
                    right={right} />
                <div className={styles['geocalligraphy']}>
                    <div className='row'>
                        <div>
                            <SectionTitle title={title[language]} />
                        </div>
                        <div className='col-lg-auto'>
                            <figure className={styles['cover']}>
                                <ImageBox src={cover} alt={'cover'} className={`${styles['cover__img']} d-none d-lg-block`} />
                                <ImageBox src={cover2} alt={'cover'} className={`${styles['cover__img']} d-block d-lg-none`} />
                            </figure>
                        </div>
                        <div className='col'>
                            <div className={styles['text']} dangerouslySetInnerHTML={{ __html: desc[language] }}></div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
