import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import PageTitle from '../SectionTitle/PageTitle';
import Card from '../Card/Card';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useParams } from 'react-router-dom';

export const Detail = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const blogs = await getApi.getData(`/${params.name}/${params.id}`);
                setData(blogs);
                console.log(blogs)
            } catch (err) {
                console.error('Error fetching blogs:', err);
            } finally {
                setLoading(false)
            }
        }

        fetchData();
        console.log(params)
    }, [params]);

    if (!data) return null
    return (
        <Section>
            <SectionTitle
                title={data?.title?.ka}
            />
            <figure>
                <img src={data.cover} alt='cover' />
            </figure>

            <div dangerouslySetInnerHTML={{ __html: data?.desc?.ka }}></div>
        </Section>
    )
}
