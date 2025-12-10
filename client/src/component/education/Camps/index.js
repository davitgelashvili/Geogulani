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

    const experinceData = [
        {
            _id: 'd1dsc',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '1 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '3fea',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '1 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '42dfassd',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '1 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '2ggddvsddf',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '1 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '3r3fds',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '1 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '3r3fds',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '1 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        }
    ]
    return (
        <>
            <Section>
                <PageTitle
                    title={'კალიგრაფიული ბანაკები'}
                    text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                />
                <div className={styles['camps-container']}>
                    <div>
                        <SectionTitle
                            title={'1 კვირიანი საერთაშორისო ბანაკი'} />
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
                <SectionTitle title={'Upcoming Camps 2025'} />
                {load && <Loading />}
                <div className='row'>
                    {data && data?.map((item) => {
                        return (
                            <div className='col-sm-6 col-lg-4' key={item._id}>
                                <Card
                                    cover={item.cover}
                                    title={item.title.ka}
                                    desc={item.desc.ka}
                                    contactLink={'/contact'} />
                            </div>
                        )
                    })}
                </div>
            </Section>

            <Section>
                <SectionTitle title={'The Camp Experience'} />
                <div className='row'>
                    {experinceData && experinceData?.map((item) => {
                        return (
                            <div className='col-md-6 col-lg-4' key={item._id}>
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
        </>
    )
}
