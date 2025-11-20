import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import PageTitle from '../SectionTitle/PageTitle';
import Card from '../Card/Card';

export const Events = () => {
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
                const blogs = await getApi.getData(`/events?${queryString}`);
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
            <PageTitle
                title={'Events'}
                text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
            />
            <div className='row'>
                {data && data?.map((item) => {
                    return (
                        <div className='col-4' key={item._id}>
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
        </Section>
    )
}
