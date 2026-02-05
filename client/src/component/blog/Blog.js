import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import PageTitle from '../SectionTitle/PageTitle';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { useLanguage } from '../../context/LanguageContext';
import Pagination from '../Pagination';

export const Blog = () => {
    const { language } = useLanguage()
    const [load, setLoad] = useState(true)
    const [pageLoad, setPageLoad] = useState(false)
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
                const blogs = await getApi.getData(`/blogs?${queryString}`);
                setData(blogs.data); // თუ გაქვს pagination სტრუქტურა, დაარეგულირე
                setTotalPages(blogs.totalPages); // თუ გიგზავნის საერთო გვერდებს
            } catch (err) {
                console.error('Error fetching blogs:', err);
            } finally {
                setLoad(false)
                setPageLoad(false)
            }
        }

        fetchData();
    }, [params]);

    const handleNext = () => {
        if (params.page < totalPages) {
            setPageLoad(true)
            setParams(prev => ({ ...prev, page: prev.page + 1 }));
        }
    };

    const handlePrev = () => {
        if (params.page > 1) {
            setPageLoad(true)
            setParams(prev => ({ ...prev, page: prev.page - 1 }));
        }
    };

    const handlePageChange = (page) => {
        if (page === params.page) return;

        setPageLoad(true);

        setParams(prev => ({
            ...prev,
            page
        }));
    };

    const pageTitle = {
        ka: 'სიახლეები',
        en: 'NEWS',
        ru: '',
    }
    const pageText = {
        ka: 'ტესტი',
        en: 'test',
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
                        <div className='col-sm-6 col-lg-4' key={item._id}>
                            <Card
                                cover={item.cover}
                                title={item.title[language]}
                                desc={item.desc[language]}
                                url={`/blogs/${item._id}`}
                            />
                        </div>
                    )
                })}
            </div>
            <div>
                {pageLoad ? <Loading /> : (
                    <Pagination
                        currentPage={params.page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </Section>
    )
}
