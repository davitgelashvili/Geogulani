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
import { Popup } from '../../Popup/Popup';
import { useLanguage } from '../../../context/LanguageContext';

export const LatestGallery = () => {
    const [index, setIndex] = useState(0)
    const { language } = useLanguage()
    const [load, setLoad] = useState(true)
    const [popupShow, setPopup] = useState(false)
    const [_id, set_id] = useState('')
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

    function closePopup() {
        document.body.style.overflow = 'unset'
        setPopup(false)
        set_id('')
    }

    const sectionTitle = {
        ka: 'გალერეა',
        en: 'GALLERY',
        ru: '',
    }

    return (
        <>
            <div style={{ position: 'fixed', bottom: 0, width: '100%', height: '100vh', backgroundColor: 'rgba(255, 241, 242, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Section>
                    <SectionTitle title={sectionTitle[language]} />
                    {load && <Loading />}
                    <Swiper
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            // when window width is >= 320px
                            0: {
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
                        {data && data?.map((item, index) => {
                            return (
                                <SwiperSlide key={item._id}>
                                    <GalleryCard
                                        cover={item.cover}
                                        title={item.title.ka}
                                        desc={item.desc.ka}
                                        _id={item._id}
                                        setPopup={setPopup}
                                        set_id={set_id}
                                        itemIndex={index}
                                        setIndex={setIndex}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className='d-flex justify-content-center'>
                        <SectionLink link={'/gallery'} text={'View All'} />
                    </div>
                </Section>
            </div>
            {popupShow && <Popup id={_id} name={'gallery'} closePopup={closePopup} allGallery={data} setIndex={setIndex} index={index} />}
        </>
    )
}
