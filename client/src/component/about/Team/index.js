import React, { useEffect, useState } from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import GalleryCard from '../../GalleryCard/GalleryCard'
import getApi from '../../../http/getApi'
import Loading from '../../Loading/Loading'
import { Popup } from '../../Popup/Popup'

export const Team = () => {
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
    
    function closePopup() {
        document.body.style.overflow = 'unset'
        setPopup(false)
        set_id('')
    }

    return (
        <>
            <Section>
                <PageTitle
                    title={'Our Team'}
                    text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                />
                <SectionTitle title={'Leadership'} />
                {load && <Loading />}
                <div className='row'>
                    {leadership && leadership.map((item) => {
                        return (
                            <div className='col-sm-6 col-md-4 col-lg-3' key={item?._id}>
                                <GalleryCard
                                    cover={item?.cover}
                                    title={item?.title.ka}
                                    desc={item?.desc.ka}
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
                <SectionTitle title={'Master Calligraphers'} />
                {load && <Loading />}
                <div className='row'>
                    {calligraphers && calligraphers.map((item) => {
                        return (
                            <div className='col-sm-6 col-md-4 col-lg-3' key={item?._id}>
                                <GalleryCard
                                    cover={item?.cover}
                                    title={item?.title.ka}
                                    desc={item?.desc.ka}
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
