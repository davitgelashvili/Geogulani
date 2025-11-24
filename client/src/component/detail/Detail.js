import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import PageTitle from '../SectionTitle/PageTitle';
import Card from '../Card/Card';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useParams } from 'react-router-dom';
import { ImageBox } from '../ImageBox/ImageBox';
import Loading from '../Loading/Loading';

export const Detail = () => {
    const [load, setLoad] = useState(true)
    const [data, setData] = useState(null);
    const params = useParams()

    useEffect(() => {
        async function fetchData() {
            try {
                const blogs = await getApi.getData(`/${params.name}/${params.id}`);
                setData(blogs);
                console.log(blogs)
            } catch (err) {
                console.error('Error fetching blogs:', err);
            } finally {
                setLoad(false)
            }
        }

        fetchData();
        console.log(params)
    }, [params]);

    // if (!data) return null
    return (
        <Section>
            {load && <Loading />}
            {!load && (
                <>
                    <SectionTitle
                        title={data?.title?.ka}
                    />
                    <figure>
                        <ImageBox src={data?.cover} alt='cover' />
                    </figure>

                    <div dangerouslySetInnerHTML={{ __html: data?.desc?.ka }}></div>
                </>
            )}
        </Section>
    )
}
