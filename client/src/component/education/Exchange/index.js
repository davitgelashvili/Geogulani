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

export const Exchange = () => {
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
                    title={'Cultural Exchange & Travel'}
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
                            <div className='col-4' key={item._id}>
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
                <Swiper
                    spaceBetween={25}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
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
