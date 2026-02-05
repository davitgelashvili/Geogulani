import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import PageTitle from '../SectionTitle/PageTitle';
import Card from '../Card/Card';
import GalleryCard from '../GalleryCard/GalleryCard';
import Loading from '../Loading/Loading';
import { Popup } from '../Popup/Popup';
import { useLanguage } from '../../context/LanguageContext';
import Pagination from '../Pagination';

export const Gallery = () => {
    const [index, setIndex] = useState(0)
    const { language } = useLanguage()
    const [load, setLoad] = useState(true)
    const [pageLoad, setPageLoad] = useState(false)
    const [popupShow, setPopup] = useState(false)
    const [_id, set_id] = useState('')
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
                const blogs = await getApi.getData(`/gallery?${queryString}`);
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

    // const handleNext = () => {
    //     if (params.page < totalPages) {
    //         setPageLoad(true)
    //         setParams(prev => ({ ...prev, page: prev.page + 1 }));
    //     }
    // };

    // const handlePrev = () => {
    //     if (params.page > 1) {
    //         setPageLoad(true)
    //         setParams(prev => ({ ...prev, page: prev.page - 1 }));
    //     }
    // };

    function closePopup() {
        document.body.style.overflow = 'unset'
        setPopup(false)
        set_id('')
    }

    const pageTitle = {
        ka: 'გალერეა',
        en: 'Gallery',
        ru: '',
    }
    const pageText = {
        ka: 'აქ წარმოდგენილია ჩვენი ასოციაციის კალიგრაფთა ნამუშევრები, რომელთა შეძენაც შესაძლებელია სურვილისამებრ.',
        en: 'Here are presented the works of our association’s calligraphers, available for purchase upon request.',
        ru: '',
    }

    const handlePageChange = (page) => {
        if (page === params.page) return;

        setPageLoad(true);

        setParams(prev => ({
            ...prev,
            page
        }));
    };


    return (
        <>
            <Section>
                <PageTitle
                    title={pageTitle[language]}
                    text={pageText[language]}
                />
                {load && <Loading />}
                <div className='row'>
                    {data && data?.map((item, index) => {
                        return (
                            <div className='col-6 col-md-4 col-lg-3' key={item._id}>
                                <GalleryCard
                                    cover={item.cover}
                                    title={item.title[language]}
                                    desc={item.desc[language]}
                                    _id={item._id}
                                    setPopup={setPopup}
                                    set_id={set_id}
                                    itemIndex={index}
                                    setIndex={setIndex}
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
            {popupShow && <Popup id={_id} name={'gallery'} closePopup={closePopup} allGallery={data} setIndex={setIndex} index={index} />}
        </>
    )
}