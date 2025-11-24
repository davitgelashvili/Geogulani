import React, { useEffect, useState } from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.scss'
import GalleryCard from '../../GalleryCard/GalleryCard';
import getApi from '../../../http/getApi';
import Loading from '../../Loading/Loading';
import { SectionLink } from '../../SectionTitle/SectionLink';

export const LatestGallery = () => {
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
                const blogs = await getApi.getData(`/gallery?${queryString}`);
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
    return (
        <Section>
            <SectionTitle title={'Gallery'} />
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
                            <GalleryCard
                                cover={item.cover}
                                title={item.title.ka}
                                desc={item.desc.ka}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className='d-flex justify-content-center'>
                <SectionLink link={'/gallery'} text={'View All'}/>
            </div>
        </Section>
    )
}
