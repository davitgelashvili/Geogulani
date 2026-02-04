import React, { useEffect, useState } from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import GalleryCard from '../../GalleryCard/GalleryCard'
import getApi from '../../../http/getApi'
import Loading from '../../Loading/Loading'
import { Popup } from '../../Popup/Popup'
import { useLanguage } from '../../../context/LanguageContext'

export const Team = () => {
    const { language } = useLanguage()
    const [load, setLoad] = useState(true)
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
                const blogs = await getApi.getData(`/teams?${queryString}`);
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

    const leadership = data?.filter((item) => item.category === 'leadership')
    const calligraphers = data?.filter((item) => item.category === 'calligraphers')
    const board = data?.filter((item) => item.category === 'board')

    function closePopup() {
        document.body.style.overflow = 'unset'
        setPopup(false)
        set_id('')
    }

    const pageTitle = {
        ka: 'ჩვენი გუნდი',
        en: 'Our Team',
        ru: '',
    }
    const pageText = {
        ka: 'ტესტი',
        en: 'test',
        ru: '',
    }

    const title = {
        first: {
            ka: `დირექტორატი`,
            en: `Directorate`,
            ru: ``
        },
        second: {
            ka: `ბორდი`,
            en: `Board`,
            ru: ``
        },
        threed: {
            ka: `კალიგრაფები`,
            en: `Calligraphers`,
            ru: ``
        }
    }

    return (
        <>
            <Section>
                <PageTitle
                    title={pageTitle[language]}
                    text={pageText[language]}
                />
                <SectionTitle title={title.first[language]} />
                {load && <Loading />}
                <div className='row'>
                    {leadership && leadership.map((item) => {
                        return (
                            <div className='col-6 col-md-4 col-lg-3' key={item?._id}>
                                <GalleryCard
                                    cover={item?.cover}
                                    title={item?.title[language]}
                                    position={item?.position[language]}
                                    desc={item?.desc[language]}
                                    _id={item._id}
                                    setPopup={setPopup}
                                    set_id={set_id}
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
            <Section>
                <SectionTitle title={title.second[language]} />
                {load && <Loading />}
                <div className='row'>
                    {board && board.map((item) => {
                        return (
                            <div className='col-6 col-md-4 col-lg-3' key={item?._id}>
                                <GalleryCard
                                    cover={item?.cover}
                                    title={item?.title[language]}
                                    desc={item?.desc[language]}
                                    _id={item._id}
                                    setPopup={setPopup}
                                    set_id={set_id}
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
            <Section>
                <SectionTitle title={title.threed[language]} />
                {load && <Loading />}
                <div className='row'>
                    {calligraphers && calligraphers.map((item) => {
                        return (
                            <div className='col-6 col-md-4 col-lg-3' key={item?._id}>
                                <GalleryCard
                                    cover={item?.cover}
                                    title={item?.title[language]}
                                    desc={item?.desc[language]}
                                    _id={item._id}
                                    setPopup={setPopup}
                                    set_id={set_id}
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
            {popupShow && <Popup id={_id} name={'teams'} closePopup={closePopup} />}
        </>
    )
}
