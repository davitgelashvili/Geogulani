import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Loading from '../Loading/Loading';
import SectionTitle from '../SectionTitle/SectionTitle';
import { ImageBox } from '../ImageBox/ImageBox';
import styles from './styles.module.scss'
import { useLanguage } from '../../context/LanguageContext';

export const Popup = ({ id, name, closePopup, allGallery, index, setIndex }) => {
    const { language } = useLanguage()
    const [load, setLoad] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const blogs = await getApi.getData(`/${name}/${index ? allGallery[index]._id : id}`)
                setData(blogs)
            } catch (err) {
                console.error('Error fetching blogs:', err)
            } finally {
                setLoad(false)
            }
        }

        fetchData();
        // console.log(allGallery[index]._id, index)

    }, [index, id]);

    function handleNext() {
        if (index < allGallery.length - 1) {
            setLoad(true)
            setIndex(prev => prev + 1)
        }
    }

    function handlePrev() {
        if (index > 0) {
            setLoad(true)
            setIndex(prev => prev - 1)
        }
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popup__bg} onClick={() => closePopup()}></div>
            {load && <Loading />}
            {!load && (
                <div className={`${styles.custom_container}`}>
                    <div className='d-flex align-items-center'>
                        {index && (
                            <button
                                className="page-btn"
                                disabled={index === 0}
                                onClick={handlePrev}
                            >
                                ◀
                            </button>
                        )}
                        <div className={styles.popup__content}>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-auto d-flex justify-content-center d-lg-block'>
                                        <figure className={styles.popup__cover}>
                                            <ImageBox src={data?.cover} alt='cover' />
                                        </figure>
                                    </div>
                                    <div className='col'>
                                        <div className={styles.popup__text}>
                                            <SectionTitle
                                                title={data?.title?.[language]}
                                            />
                                            <p>{data?.position?.[language]}</p>
                                            <div dangerouslySetInnerHTML={{ __html: data?.desc?.[language] }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {index && (
                            <button
                                className="page-btn"
                                disabled={index === allGallery.length - 1}
                                onClick={handleNext}
                            >
                                ▶
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
