import React, { useEffect, useState } from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import Loading from '../../Loading/Loading'
import GalleryCard from '../../GalleryCard/GalleryCard'
import getApi from '../../../http/getApi'
import { ImageBox } from '../../ImageBox/ImageBox'

export const PresidentMessage = () => {
    const [load, setLoad] = useState(true)
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        limit: 20
    });
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        async function fetchData() {
            try {
                const queryString = new URLSearchParams(params).toString();
                const blogs = await getApi.getData(`/message?${queryString}`);
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
        ka: 'პრეზიდენტის მისალმება',
        en: '',
        ru: '',
    }

    const pageText = {
        ka: 'ქართული კალიგრაფიის პირველი საერთაშორისო ასოციაციის პრეზიდენტი',
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
                {load && <Loading />}
                {data && data.map((item) => {
                    return (
                        <div className='row' key={item?._id}>
                            <div className='col-lg-4'>
                                <figure className={styles.message__cover}>
                                    <ImageBox src={item?.cover} alt={item?.title?.ka} />
                                </figure>
                            </div>
                            <div className='col-lg-8'>
                                <h1 className={styles.message__title}>{item?.title?.ka}</h1>
                                <div className={styles.message__text} dangerouslySetInnerHTML={{ __html: item?.desc?.ka}}></div>
                            </div>
                        </div>
                    )
                })}
            </Section>
        </>
    )
}
