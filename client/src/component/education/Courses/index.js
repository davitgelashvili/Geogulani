import React, { useEffect, useState } from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import Card from '../../Card/Card'
import { Link } from 'react-router-dom'
import getApi from '../../../http/getApi'
import Loading from '../../Loading/Loading'

export const Courses = () => {
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
                const blogs = await getApi.getData(`/course?${queryString}`);
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
        <>
            <Section>
                <PageTitle
                    title={'Online Courses'}
                    text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                />
                {load && <Loading />}
                <div className='row'>
                    {data && data?.map((item) => {
                        return (
                            <div className='col-md-6 col-lg-4' key={item._id}>
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
        </>
    )
}
