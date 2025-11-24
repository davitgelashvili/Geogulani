import React, { useEffect, useState } from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import getApi from '../../../http/getApi'
import Card from '../../Card/Card'
import Loading from '../../Loading/Loading'
import { SectionLink } from '../../SectionTitle/SectionLink'

export const LatestEvents = () => {
    const [load, setLoad] = useState(true)
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        limit: 2
    });
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        async function fetchData() {
            try {
                const queryString = new URLSearchParams(params).toString();
                const blogs = await getApi.getData(`/events?${queryString}`);
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
            <SectionTitle title={'latest events'} />
            {load && <Loading />}
            <div className='row'>
                {data && data?.map((item) => {
                    return (
                        <div className='col-6' key={item._id}>
                            <Card
                                cover={item.cover}
                                title={item.title.ka}
                                desc={item.desc.ka}
                                url={`/events/${item._id}`}
                            />
                        </div>
                    )
                })}
            </div>
            <div className='d-flex justify-content-center'>
                <SectionLink link={'/events'} text={'View All'} />
            </div>
        </Section>
    )
}
