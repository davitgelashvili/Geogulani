import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import PageTitle from '../SectionTitle/PageTitle';
import Card from '../Card/Card';
import GalleryCard from '../GalleryCard/GalleryCard';
import Loading from '../Loading/Loading';
import { Popup } from '../Popup/Popup';

export const Gallery = () => {
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
                const blogs = await getApi.getData(`/gallery?${queryString}`);
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

    function closePopup() {
        document.body.style.overflow = 'unset'
        setPopup(false)
        set_id('')
    }
    return (
        <>
            <Section>
                <PageTitle
                    title={'Gallery'}
                    text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                />
                {load && <Loading />}
                <div className='row'>
                    {data && data?.map((item) => {
                        return (
                            <div className='col-sm-6 col-md-4 col-lg-3' key={item._id}>
                                <GalleryCard
                                    cover={item.cover}
                                    title={item.title.ka}
                                    desc={item.desc.ka}
                                    _id={item._id}
                                    setPopup={setPopup}
                                    set_id={set_id}
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
            {popupShow && <Popup id={_id} name={'gallery'} closePopup={closePopup}/>}
        </>
    )
}
