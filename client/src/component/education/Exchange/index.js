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

export const Exchange = () => {
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
                    title={'კულტურული ინტერაქცია'}
                    text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                />
                <SectionTitle title={'Current Exchange Program'} />
                გაცვლითი პროგრამებისლ ისიტ // ასაწყობია ბექშიც
            </Section>

            <Section>
                <SectionTitle title={'Progress benefit'} />
                <div className='row'>
                    {benefits && benefits?.map((item) => {
                        return (
                            <div className='col-sm-6 col-lg-4' key={item._id}>
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
                <SectionTitle title={'Succsess Stories'} />
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
                                    title={item.title.ka}
                                    desc={item.desc.ka}
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
