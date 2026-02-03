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
import { ImageBox } from '../../ImageBox/ImageBox'
import Loading from '../../Loading/Loading'
import { useLanguage } from '../../../context/LanguageContext'

export const Camps = () => {
    const { language } = useLanguage()
    const [load, setLoad] = useState(true)
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        limit: 10
    });
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        async function fetchData() {
            try {
                const queryString = new URLSearchParams(params).toString();
                const blogs = await getApi.getData(`/camps?${queryString}`);
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
        ka: 'კალიგრაფიული ბანაკები',
        en: 'Calligraphy Camps',
        ru: '',
    }
    const pageText = {
        ka: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        en: 'test text',
        ru: '',
    }

    const sectionTitle = {
        ka: '1 კვირიანი საერთაშორისო ბანაკი',
        en: 'A one-week international camp ',
        ru: '',
    }

    const section2Title = {
        ka: 'დაგეგმილი ბანაკები',
        en: 'Planned Camps',
        ru: '',
    }

    const list = {
        first: {
            ka: `გამორჩეული გამოცდილება მათთვის, ვისაც სურს ქართული კალიგრაფიის ღრმა წვდომა და შემოქმედებით გარემოში საკუთარი შესაძლებლობების განვითარება.`,
            en: `Offers a unique experience for those who seek in-depth engagement with Georgian calligraphy and wish to develop their creative potential in an inspiring environment.`,
            ru: ``,
        },
        second: {
            ka: `ბანაკები ტარდება როგორც საქართველოში, ასევე უცხოეთში პარტნიორი ორგანიზაციების აქტიური ჩართულობით.`,
            en: `Camps are held both in Georgia and abroad, with the active involvement of partner organizations.`,
            ru: ``,
        },
        body: {
            ka: `
                <li>ყოველდღიური ინტენსიური მასტერკლასები პროფესიონალი კალიგრაფებისგან;</li>
                <li>სწავლება სამ კალიგრაფიულ სისტემაში – მხედრული, ასომთავრული, ნუსხური;</li>
                <li>კულტურული მარშრუტები, ეკლესიების, ისტორიული მონუმენტებისა და მუზეუმების მონახულება;</li>
                <li>საღამოს შემოქმედებითი სესიები და თემატური შეხვედრები;</li>
                <li>ბანაკის დასასრულს – ასამბლეა და მონაწილეთა ნამუშევრების ოფიციალური გამოფენა.</li>
            `,
            en: `
                <li>Daily intensive masterclasses led by professional calligraphers;</li>
                <li>Instruction in all three Georgian scripts: Mkhedruli, Asomtavruli, and Nuskhuri;</li>
                <li>Cultural routes, including visits to churches, historical monuments, and museums;</li>
                <li>Evening creative sessions and thematic meetings;</li>
                <li>A concluding assembly and an official exhibition of participants’ works.</li>
            `,
            ru: `
            `,
        }
    }

    return (
        <>
            <Section>
                <PageTitle
                    title={pageTitle[language]}
                    text={pageText[language]}
                />
                <div className={styles['camps-container']}>
                    <div>
                        <SectionTitle
                            title={sectionTitle[language]} />
                    </div>
                    <div className='row flex-wrap-reverse flex-lg-row'>
                        <div className='col-lg-8'>
                            <div className={styles['camps-container__text']}>
                                <p>
                                    {list.first[language]}
                                </p>
                                <ul dangerouslySetInnerHTML={{ __html: list.body[language] }}></ul>
                                <p>
                                    {list.second[language]}
                                </p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <figure className={styles['cover']}>
                                <ImageBox src='https://static.tkt.ge/next/static/images/zugdidi.jpg' alt='cover' />
                            </figure>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <SectionTitle title={section2Title[language]} />
                {load && <Loading />}
                <div className='row'>
                    {data && data?.map((item) => {
                        return (
                            <div className='col-sm-6 col-lg-4' key={item._id}>
                                <Card
                                    cover={item.cover}
                                    title={item.title[language]}
                                    desc={item.desc[language]}
                                    url={`/camps/${item._id}`} />
                            </div>
                        )
                    })}
                </div>
            </Section>
        </>
    )
}
