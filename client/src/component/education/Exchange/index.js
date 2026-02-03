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

    const benefits = [
        {
            _id: 'd1dsc',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: 'საერთაშორისო ფესტივალები, გამოფენები და კონფერენციები',
            desc: `
                <p>პროგრამის ფარგლებში ქართველი კალიგრაფები მიიღებენ მონაწილეობას:</p>
                <p></p>
                <li>საერთაშორისო კალიგრაფიის ფესტივალებში;</li>
                <li>ხელოვნების ბიენალეებსა და თემატურ გამოფენებში;</li>
                <li>პროფესიულ კონფერენციებსა და სემინარებში;</li>
                <li>ხელოვნებისა და კულტურის საერთაშორისო ფორუმებში.</li>
                <p></p>
                <p>ეს პლატფორმები მათ საშუალებას აძლევს წარმოაჩინონ ქართული კალიგრაფიის განსხვავებული ხასიათი, გააცნონ სამყაროს ჩვენი უნიკალური ანბანი და სტილი, დაამყარონ პროფესიული ურთიერთობები სხვა ქვეყნების კალიგრაფებთან.</p>
            `,
        },
        {
            _id: '3fea',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: 'მეცნიერული და კვლევითი თანამშრომლობა',
            desc: `
                <p>ჩვენ აქტიურად ვეხმარებით ქართველ კალიგრაფებს ჩართონ საერთაშორისო სამეცნიერო პრაქტიკაში, რაც მოიცავს:</p>
                <li>ქართული ხელნაწერების, პალეოგრაფიისა და ანბანთა ისტორიის შესწავლას;</li>
                <li>საერთაშორისო მეცნიერებთან ერთობლივ კვლევით პროექტებში მონაწილეობას;</li>
                <li>საერთაშორისო სამეცნიერო ჟურნალებში სტატიებისა და კვლევების გამოქვეყნებას;</li>
                <li>არქივების, ბიბლიოთეკებისა და მეცნიერებათა აკადემიის კოლექციებთან მუშაობას;</li>
                <p>აღნიშნული მიმართულება განსაკუთრებულ მნიშვნელობას ანიჭებს ქართული კალიგრაფიის როგორც მეცნიერების, ასევე კულტურული მემკვიდრეობის საერთაშორისო დონეზე დამკვიდრებას.</p>
            `,
        },
    ]

    const storyText = {
        ka: 'წარმატების ისტორიები',
        en: 'Succsess Stories',
        ru: ''
    }

    return (
        <>

            <Section>
                <PageTitle
                    title={'კულტურული ინტერაქცია'}
                    text={'ჩვენი კულტურული ინტერაქციის პროგრამა აერთიანებს საერთაშორისო სიახლეებს, ხელოვნებასა და განათლებას, ასევე საერთაშორისო ფესტივალებში, გამოფენებსა და კონფერენციებში მონაწილეობას და ქართველი კალიგრაფების აქტიურ სამეცნიერო პრაქტიკაში ჩაბმას.'}
                />
                {/* <SectionTitle title={'Current Exchange Program'} /> */}
                <div>
                    ქართველი კალიგრაფები მიემგზავრებიან მსოფლიოს სხვადასხვა ქვეყანაში კალიგრაფიული ტრადიციებისა და კულტურის შესასწავლად და, ამავდროულად, უცხოელი კალიგრაფები და ხელოვანები ჩამოდიან საქართველოში, რათა:
                    <li>გაეცნონ ქართულ ანბანსა და კალიგრაფიულ სტილებს;</li>
                    <li>მონაწილეობა მიიღონ მასტერკლასებსა და ადგილობრივ ექსპედიციებში;</li>
                    <li>გაეცნონ ქართულ ფოლკლორს, ეზიარონ ტრადიციებსა და სულიერ კულტურას.</li>
                    <p style={{ color: '#a30026' }}><strong>პროგრამის მიზნებია:</strong></p>
                    <li>კულტურათშორისი კავშირის გაღრმავება;</li>
                    <li>გამოცდილებების გაზიარება;</li>
                    <li>ქართული კალიგრაფიის საერთაშორისო ცნობადობის ზრდა და განვითარება;</li>
                    <li>ინოვაციური პროექტების წამოწყება საერთაშორისო პარტნიორებთან ერთად;</li>
                    <li>უცხოელ ხელოვანთა ჩამოყვანა საქართველოში ქართული კალიგრაფიის შესასწავლად</li>
                    <li>ერთობლივი მასტერკლასების, პროექტებისა და შემოქმედებითი სემინარების ჩატარება;</li>
                    <li>ხელოვნების ინოვაციური პროექტების შექმნა და საერთაშორისო ასპარეზზე გატანა.</li>
                </div>

                <div className='row' style={{ marginTop: '32px' }}>
                    <p>ჩვენი კულტურული ინტერაქციის პროგრამა ასევე მიზნად ისახავს ქართული კალიგრაფიის საერთაშორისო ცნობადობის გაზრდას, ქართული კალიგრაფიის პედაგოგიური სკოლისა და ბაზის შექმნას, დარგის განვითარების ხელშეწყობას როგორც შემოქმედებითი, ისე აკადემიური და სამეცნიერო თვალსაზრისით.</p>
                    {benefits && benefits?.map((item) => {
                        return (
                            <div className='col-sm-12 col-lg-6' key={item._id}>
                                <ServiceCard
                                    cover={item.cover}
                                    title={item.title}
                                    desc={item.desc}
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
