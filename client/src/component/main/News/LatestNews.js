import React, { useEffect, useState } from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Card from '../../Card/Card'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.scss'
import getApi from '../../../http/getApi'

export const LatestNews = () => {
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

    return (
        <Section>
            <SectionTitle title={'Latest News'} />
            <Swiper
                spaceBetween={25}
                slidesPerView={4}
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
            <div className='d-flex justify-content-center'>
                <Link to={'/blogs'}>View All</Link>
            </div>
        </Section>
    )
}
