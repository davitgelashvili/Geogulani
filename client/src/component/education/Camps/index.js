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

export const Camps = () => {
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
        en: '',
        ru: '',
    }
    const pageText = {
        ka: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        en: '',
        ru: '',
    }

    const sectionTitle = {
        ka: '1 კვირიანი საერთაშორისო ბანაკი',
        en: '',
        ru: '',
    }

    const section2Title = {
        ka: 'მომავლის ბანაკები',
        en: '',
        ru: '',
    }

    return (
        <>
            <Section>
                <PageTitle
                    title={pageTitle.ka}
                    text={pageText.ka}
                />
                <div className={styles['camps-container']}>
                    <div>
                        <SectionTitle
                            title={sectionTitle.ka} />
                    </div>
                    <div className='row flex-wrap-reverse flex-lg-row'>
                        <div className='col-lg-8'>
                            <div className={styles['camps-container__text']}>
                                <p>
                                გამორჩეული გამოცდილება მათთვის, ვისაც სურს ქართული კალიგრაფიის ღრმა წვდომა და შემოქმედებით გარემოში საკუთარი შესაძლებლობების განვითარება.
                                </p>
                                <ul>
                                    <li>ყოველდღიური ინტენსიური მასტერკლასები პროფესიონალი კალიგრაფებისგან;</li>
                                    <li>სწავლება სამ კალიგრაფიულ სისტემაში – მხედრული, ასომთავრული, ნუსხური;</li>
                                    <li>კულტურული მარშრუტები, ეკლესიების, ისტორიული მონუმენტებისა და მუზეუმების მონახულება;</li>
                                    <li>საღამოს შემოქმედებითი სესიები და თემატური შეხვედრები;</li>
                                    <li>ბანაკის დასასრულს – ასამბლეა და მონაწილეთა ნამუშევრების ოფიციალური გამოფენა.</li>
                                </ul>
                                <p>
                                ბანაკები ტარდება როგორც საქართველოში, ასევე უცხოეთში პარტნიორი ორგანიზაციების აქტიური ჩართულობით.
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
                <SectionTitle title={section2Title.ka} />
                {load && <Loading />}
                <div className='row'>
                    {data && data?.map((item) => {
                        return (
                            <div className='col-sm-6 col-lg-4' key={item._id}>
                                <Card
                                    cover={item.cover}
                                    title={item.title.ka}
                                    desc={item.desc.ka}
                                    url={`/camps/${item._id}`} />
                            </div>
                        )
                    })}
                </div>
            </Section>
        </>
    )
}
