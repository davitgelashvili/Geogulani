import Section from '../../SectionTitle/Section'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import { ImageBox } from '../../ImageBox/ImageBox'
import logo from './../../../assets/fest_gulani.png'

export const FestGulan = () => {
    const pageTitle = {
        ka: 'ფესტივალი „გულანი“',
        en: 'Gulani Festival',
        ru: '',
    }
    const pageText = {
        ka: 'ქართული კალიგრაფიის პირველი საერთაშორისო ფესტივალი „გულანი“',
        en: 'The First International Festival of Georgian Calligraphy – Gulani',
        ru: '',
    }

    const desc = {
        ka: `
            <p>ქართული კალიგრაფიის პირველი საერთაშორისო ასოციაციის ინიციატივითა და ორგანიზებით 2025 წელს დაარსდა კალიგრაფიის ფესტივალი „გულანი“. ეს გახლავთ ფესტივალი, რომელმაც დაარსების პირველივე წელს შეიძინა საერთაშორისო სტატუსი და გააერთიანა როგორც ქართული ემიგრაციის დიდი ნაწილი, ისე უძველესი და უნიკალური კალიგრაფიული ქვეყანა <strong>იაპონია.</strong></p>    
            <p>„გულანი“ ყოველწლიურად გაიმართება და ის კალიგრაფიული ხელოვნების ფართო საზოგადოებაში პოპულარიზაციასა და განვითარებას შეუწყობს ხელს. ფესტივალის ფარგლებში მუდმივად ჩატარდება ქართველ და უცხოელ პროფესიონალ და მოყვარულ კალიგრაფთა ნამუშევრების გამოფენა-გაყიდვები, პრეზენტაციები, კალიგრაფიული პერფორმანსები და მასტერკლასები, სხვადასხვა ხასიათის კულტურულ-შემეცნებითი ღონისძიებები. </p>    
            <p>ქართული კალიგრაფიის პირველმა საერთაშორისო ასოციაციამ დააარსა კალიგრაფიის უმაღლესი გრანპრი, რომელიც ფესტივალის ფარგლებში გამოვლენილ გამარჯვებულებს გადაეცემათ. გარდა ამისა, დაწესდა კიდევ ერთი საპატიო ჯილდო - ქართული კალიგრაფიის განვითარებაში შეტანილი განსაკუთრებული წვლილისთვის.</p>    
            <p>ფესტვალის სახელწოდება ინსპირირებულია უძველესი ქართული სიტყვიდან <strong>„გულანი“</strong>, რომელსაც რელიგიური შინაარსი აქვს და ნიშნავს კრებულს, შემუშავებულს ლიტურგიული პრაქტიკისათვის. მასში თავმოყრილი იყო საღვთისმსახურო წიგნები — სახარება, საქმე მოციქულთა, მოციქულთა ეპისტოლენი, თორმეტივე თვის საგალობლები, ფსალმუნები და სხვა. იგი ორიგინალური ქართული კრებულია და არცერთ სხვა ეკლესიას არ გააჩნია. უმეტესწილად, გულანი იქმნებოდა ცნობილი, გამორჩეული ქართველი კალიგრაფების მიერ და ისინი ახლა საქართველოს კულტურული მემკვიდრეობისა და კალიგრაფიული ტრადიციის მნიშვნელოვან ძეგლებს წარმოადგენენ. </p>    
            <p>ყოველივე ზემოაღნიშნულიდან გამომდინარე, ჩვენი ასოციაციის ოფიციალური ვებგვერდისა და ქართული კალიგრაფიის პირველი საერთაშორისო ფესტივალის სახელწოდება ბუნებრივად და სიმბოლურად განისაზღვრა როგორც —</p>    
            <p><strong>geogulani.com</strong></p>   
        `,
        en: `
            <p>The calligraphy festival Gulani was founded in 2025 on the initiative and under the organization of the First International Association of Georgian Calligraphy. In its inaugural year, the festival gained international recognition, bringing together not only a large part of the Georgian diaspora but also participants from Japan, a country renowned for its ancient and unique calligraphic traditions.</p>
            <p>Gulani is held annually, promoting and developing Georgian calligraphy within a broad public and professional audience. The festival features ongoing exhibitions and sales of works by both Georgian and international professional and amateur calligraphers, as well as presentations, calligraphic performances, masterclasses, and various cultural and educational activities.</p>
            <p>The First International Association of Georgian Calligraphy established the festival’s highest Grand Prix, awarded to outstanding participants, alongside an additional honorary prize recognizing individuals who have made exceptional contributions to the development of Georgian calligraphy.</p>
            <p>The festival’s name is inspired by the ancient Georgian word “Gulani”, which carries religious significance and refers to a liturgical collection of texts. Historically, a gulani contained service books, including the Gospels, Acts of the Apostles, Apostolic Epistles, hymns for all twelve months, Psalms, and other texts. This unique Georgian compilation has no equivalent in any other church. Most gulani were created by prominent Georgian calligraphers, whose works now represent significant monuments of Georgia’s cultural heritage and calligraphic tradition.</p>
            <p>In light of these historical and cultural associations, the official website and the festival itself were naturally and symbolically named: </p>
            <p><strong>geogulani.com</strong></p>
        `,
        ru: '',
    }
    return (
        <>
            <Section bgColor={'#e5e7eb'}>
                <PageTitle
                    title={pageTitle.ka}
                    text={pageText.ka}
                />
                <div>
                    <div className='row'>
                        <div className='col-12 col-lg-2'>
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
        </>
    )
}
