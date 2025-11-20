import React, { useEffect, useState } from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import GalleryCard from '../../GalleryCard/GalleryCard'
import getApi from '../../../http/getApi'

export const Team = () => {
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
                const blogs = await getApi.getData(`/teams?${queryString}`);
                setData(blogs.data); // თუ გაქვს pagination სტრუქტურა, დაარეგულირე
                setTotalPages(blogs.totalPages); // თუ გიგზავნის საერთო გვერდებს
            } catch (err) {
                console.error('Error fetching blogs:', err);
            }
        }

        fetchData();
    }, [params]);

    const leadership = data?.filter((item) => item.category === 'leadership')
    const calligraphers = data?.filter((item) => item.category === 'calligraphers')

    return (
        <>
            <Section>
                <PageTitle
                    title={'Our Team'}
                    text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                />
                <SectionTitle title={'Leadership'} />
                <div className='row'>
                    {leadership && leadership.map((item) => {
                        return (
                            <div className='col-3' key={item?._id}>
                                <GalleryCard
                                    cover={item?.cover}
                                    title={item?.title.ka}
                                    desc={item?.desc.ka}
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
            <Section>
                <SectionTitle title={'Master Calligraphers'} />
                <div className='row'>
                    {calligraphers && calligraphers.map((item) => {
                        return (
                            <div className='col-3' key={item?._id}>
                                <GalleryCard
                                    cover={item?.cover}
                                    title={item?.title.ka}
                                    desc={item?.desc.ka}
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
        </>
    )
}
