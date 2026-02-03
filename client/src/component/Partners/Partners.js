import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import PageTitle from '../SectionTitle/PageTitle';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { useLanguage } from '../../context/LanguageContext';

export const Partners = () => {
    const { language } = useLanguage()
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
                const blogs = await getApi.getData(`/partners?${queryString}`);
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
        ka: 'პარტნიორები',
        en: 'Partners',
        ru: '',
    }
    const pageText = {
        ka: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        en: 'test text',
        ru: '',
    }

    return (
        <Section>
            <PageTitle
                title={pageTitle[language]}
                text={pageText[language]}
            />
            {load && <Loading />}
            <div className='row'>
                {data && data?.map((item) => {
                    return (
                        <div className='col-6 col-lg-4' key={item._id}>
                            <Card
                                cover={item.cover}
                                title={item.title[language]}
                                desc={item.desc[language]}
                            // url={`/partners/${item._id}`}
                            />
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
