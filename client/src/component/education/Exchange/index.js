import React, { useEffect, useState } from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import PageTitle from '../../SectionTitle/PageTitle'
import Card from '../../Card/Card'
import ServiceCard from '../../ServiceCard/ServiceCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.scss'
import getApi from '../../../http/getApi'
import Loading from '../../Loading/Loading'
import { useLanguage } from '../../../context/LanguageContext'

export const Exchange = () => {
    const { language } = useLanguage()
    const [load, setLoad] = useState(true)
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        limit: 5
    });
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        async function fetchData() {
            try {
                const queryString = new URLSearchParams(params).toString();
                const blogs = await getApi.getData(`/blogs?${queryString}`);
                setData(blogs.data); // თუ გაქვს pagination სტრუქტურა, დაარეგულირე
                setTotalPages(blogs.totalPages); // თუ გიგზავნის საერთო გვერდებს
            } catch (err) {
                console.error('Error fetching blogs:', err);
            } finally {
                setLoad(false)
            }
        }

        fetchData();
    }, [params]);

    const pageTitle = {
        ka: `კულტურული ინტერაქცია`,
        en: `Cultural Interaction`,
        ru: ``
    }

    const pageText = {
        ka: `ჩვენი კულტურული ინტერაქციის პროგრამა აერთიანებს საერთაშორისო სიახლეებს, ხელოვნებასა და განათლებას, ასევე საერთაშორისო ფესტივალებში, გამოფენებსა და კონფერენციებში მონაწილეობას და ქართველი კალიგრაფების აქტიურ სამეცნიერო პრაქტიკაში ჩაბმას.`,
        en: `Our Cultural Interaction Program integrates international initiatives in art and education, participation in international festivals, exhibitions, and conferences, and the active engagement of Georgian calligraphers in global academic and professional practice.`,
        ru: ``
    }

    const benefits = [
        {
            _id: 'd1dsc',
            cover: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M447.6 175c-31.6-74.6-105.5-127-191.6-127-22.1 0-43.4 3.5-63.4 9.8-.4 2-.6 4.1-.6 6.2l0 73.4c0 12.5 10.1 22.6 22.6 22.6 6 0 11.8-2.4 16-6.6l16-16c6-6 14.1-9.4 22.6-9.4l5.5 0c28.5 0 42.8 34.5 22.6 54.6-6 6-14.1 9.4-22.6 9.4l-61.5 0c-8.5 0-16.6 3.4-22.6 9.4l-21.3 21.3c-6 6-9.4 14.1-9.4 22.6l0 42.7c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32l0 32c0 17.7 14.3 32 32 32l2.7 0c8.5 0 16.6-3.4 22.6-9.4l29.3-29.3c6-6 9.4-14.1 9.4-22.6l0-18.7c0-8.8 7.2-16 16-16s16-7.2 16-16l0-34.7c0-8.5-3.4-16.6-9.4-22.6l-16-16c-4.2-4.2-6.6-10-6.6-16 0-12.5 10.1-22.6 22.6-22.6l45 0c12.4 0 22.7-7.1 28-17zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>
            `,
            title: {
                ka: 'საერთაშორისო ფესტივალები, გამოფენები და კონფერენციები',
                en: 'International Festivals, Exhibitions, and Conferences',
                ru: ''
            },
            desc: {
                ka: `
                <p>პროგრამის ფარგლებში ქართველი კალიგრაფები მიიღებენ მონაწილეობას:</p>
                <p></p>
                <li>საერთაშორისო კალიგრაფიის ფესტივალებში;</li>
                <li>ხელოვნების ბიენალეებსა და თემატურ გამოფენებში;</li>
                <li>პროფესიულ კონფერენციებსა და სემინარებში;</li>
                <li>ხელოვნებისა და კულტურის საერთაშორისო ფორუმებში.</li>
                <p></p>
                <p>ეს პლატფორმები მათ საშუალებას აძლევს წარმოაჩინონ ქართული კალიგრაფიის განსხვავებული ხასიათი, გააცნონ სამყაროს ჩვენი უნიკალური ანბანი და სტილი, დაამყარონ პროფესიული ურთიერთობები სხვა ქვეყნების კალიგრაფებთან.</p>
                `,
                en: `
                <p>Within the framework of the program, Georgian calligraphers participate in:</p>
                <p></p>
                <li>International calligraphy festivals;</li>
                <li>Art biennials and thematic exhibitions;</li>
                <li>Professional conferences and seminars;</li>
                <li>International forums on art and culture.</li>
                <p></p>
                <p>These platforms enable them to present the distinctive character of Georgian calligraphy, introduce the world to Georgia’s unique alphabet and stylistic traditions, and establish professional connections with calligraphers from other countries.</p>
                `,
                ru: ``
            }
        },
        {
            _id: '3fea',
            cover: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M288 0L128 0C110.3 0 96 14.3 96 32s14.3 32 32 32L128 215.5 7.5 426.3C2.6 435 0 444.7 0 454.7 0 486.4 25.6 512 57.3 512l333.4 0c31.6 0 57.3-25.6 57.3-57.3 0-10-2.6-19.8-7.5-28.4L320 215.5 320 64c17.7 0 32-14.3 32-32S337.7 0 320 0L288 0zM192 215.5l0-151.5 64 0 0 151.5c0 11.1 2.9 22.1 8.4 31.8l41.6 72.7-164 0 41.6-72.7c5.5-9.7 8.4-20.6 8.4-31.8z"/></svg>
            `,
            title: {
                ka: 'მეცნიერული და კვლევითი თანამშრომლობა',
                en: 'Scholarly and Research Collaboration',
                ru: ''
            },
            desc: {
                ka: `
                <p>ჩვენ აქტიურად ვეხმარებით ქართველ კალიგრაფებს ჩართონ საერთაშორისო სამეცნიერო პრაქტიკაში, რაც მოიცავს:</p>
                <li>ქართული ხელნაწერების, პალეოგრაფიისა და ანბანთა ისტორიის შესწავლას;</li>
                <li>საერთაშორისო მეცნიერებთან ერთობლივ კვლევით პროექტებში მონაწილეობას;</li>
                <li>საერთაშორისო სამეცნიერო ჟურნალებში სტატიებისა და კვლევების გამოქვეყნებას;</li>
                <li>არქივების, ბიბლიოთეკებისა და მეცნიერებათა აკადემიის კოლექციებთან მუშაობას;</li>
                <p>აღნიშნული მიმართულება განსაკუთრებულ მნიშვნელობას ანიჭებს ქართული კალიგრაფიის როგორც მეცნიერების, ასევე კულტურული მემკვიდრეობის საერთაშორისო დონეზე დამკვიდრებას.</p>
                `,
                en: `
                <p>We actively support Georgian calligraphers in engaging with international academic practice, including:</p>
                <li>The study of Georgian manuscripts, paleography, and the history of alphabets;</li>
                <li>Participation in joint research projects with international scholars;</li>
                <li>Publication of articles and studies in international academic journals;</li>
                <li>Work with archives, libraries, and collections of academies of sciences.</li>
                <p>This area of activity plays a crucial role in establishing Georgian calligraphy internationally as both a scholarly discipline and a vital element of cultural heritage.</p>
                `,
                ru: ``,
            }
        },
    ]

    const list = {
        ka: `
        ქართველი კალიგრაფები მიემგზავრებიან მსოფლიოს სხვადასხვა ქვეყანაში კალიგრაფიული ტრადიციებისა და კულტურის შესასწავლად და, ამავდროულად, უცხოელი კალიგრაფები და ხელოვანები ჩამოდიან საქართველოში, რათა:
        <li>გაეცნონ ქართულ ანბანსა და კალიგრაფიულ სტილებს;</li>
        <li>მონაწილეობა მიიღონ მასტერკლასებსა და ადგილობრივ ექსპედიციებში;</li>
        <li>გაეცნონ ქართულ ფოლკლორს, ეზიარონ ტრადიციებსა და სულიერ კულტურას.</li>
        <p style="color: #a30026"><strong>პროგრამის მიზნებია:</strong></p>
        <li>კულტურათშორისი კავშირის გაღრმავება;</li>
        <li>გამოცდილებების გაზიარება;</li>
        <li>ქართული კალიგრაფიის საერთაშორისო ცნობადობის ზრდა და განვითარება;</li>
        <li>ინოვაციური პროექტების წამოწყება საერთაშორისო პარტნიორებთან ერთად;</li>
        <li>უცხოელ ხელოვანთა ჩამოყვანა საქართველოში ქართული კალიგრაფიის შესასწავლად</li>
        <li>ერთობლივი მასტერკლასების, პროექტებისა და შემოქმედებითი სემინარების ჩატარება;</li>
        <li>ხელოვნების ინოვაციური პროექტების შექმნა და საერთაშორისო ასპარეზზე გატანა.</li>
        `,
        en: `
        Georgian calligraphers travel to various countries to study calligraphic traditions and cultures, while foreign calligraphers and artists are invited to Georgia in order to:
        <li>Become acquainted with the Georgian alphabet and calligraphic styles;</li>
        <li>Participate in masterclasses and local expeditions;</li>
        <li>Experience Georgian folklore, traditions, and spiritual culture.</li>
        <p style="color: #a30026"><strong>The objectives of the program include:</strong></p>
        <li>Strengthening intercultural dialogue;</li>
        <li>Sharing professional experience;</li>
        <li>Enhancing the international visibility and development of Georgian calligraphy;</li>
        <li>Initiating innovative projects in collaboration with international partners;</li>
        <li>Inviting foreign artists to Georgia to study Georgian calligraphy;</li>
        <li>Organizing joint masterclasses, projects, and creative seminars;</li>
        <li>Developing innovative art projects and presenting them on the international stage.</li>
        `,
        ru: ``
    }

    const benefitsHeadText = {
        ka: `ჩვენი კულტურული ინტერაქციის პროგრამა ასევე მიზნად ისახავს ქართული კალიგრაფიის საერთაშორისო ცნობადობის გაზრდას, ქართული კალიგრაფიის პედაგოგიური სკოლისა და ბაზის შექმნას, დარგის განვითარების ხელშეწყობას როგორც შემოქმედებითი, ისე აკადემიური და სამეცნიერო თვალსაზრისით.`,
        en: `The Cultural Interaction Program also aims to increase the international recognition of Georgian calligraphy, establish a pedagogical school and institutional base for Georgian calligraphy, and support the field’s development from creative, academic, and scholarly perspectives.`,
        ru: ``
    }

    const storyText = {
        ka: 'წარმატების ისტორიები',
        en: 'Succsess Stories',
        ru: ''
    }

    return (
        <>

            <Section>
                <PageTitle
                    title={pageTitle[language]}
                    text={pageText[language]}
                />
                {/* <SectionTitle title={'Current Exchange Program'} /> */}
                <div dangerouslySetInnerHTML={{ __html: list[language] }}></div>

                <div className='row' style={{ marginTop: '32px' }}>
                    <p>{benefitsHeadText[language]}</p>
                    {benefits && benefits?.map((item) => {
                        return (
                            <div className='col-sm-12 col-lg-6' key={item._id}>
                                <ServiceCard
                                    svg={item.cover}
                                    title={item.title[language]}
                                    desc={item.desc[language]}
                                    contactLink={'/contact'} />
                            </div>
                        )
                    })}
                </div>
            </Section>

            <Section>
                <SectionTitle title={storyText[language]} />
                {load && <Loading />}
                <Swiper
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        // when window width is >= 320px
                        580: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    }}
                >
                    {data && data?.map((item) => {
                        return (
                            <SwiperSlide key={item._id}>
                                <Card
                                    cover={item.cover}
                                    title={item.title[language]}
                                    desc={item.desc[language]}
                                    url={`/blogs/${item._id}`}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Section>
        </>
    )
}
