import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Loading from '../Loading/Loading';
import SectionTitle from '../SectionTitle/SectionTitle';
import { ImageBox } from '../ImageBox/ImageBox';
import styles from './styles.module.scss'

export const Popup = ({ id, name, closePopup }) => {
    const [load, setLoad] = useState(true)
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const blogs = await getApi.getData(`/${name}/${id}`);
                setData(blogs);
                console.log(blogs)
            } catch (err) {
                console.error('Error fetching blogs:', err);
            } finally {
                setLoad(false)
            }
        }

        fetchData();
    }, []);
    return (
        <div className={styles.popup}>
            <div className={styles.popup__bg} onClick={() => closePopup()}></div>
            {load && <Loading />}
            {!load && (
                <div className={`${styles.custom_container}`}>
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
                                            title={data?.title?.ka}
                                        />
                                        <p>{data?.position?.ka}</p>
                                        <div dangerouslySetInnerHTML={{ __html: data?.desc?.ka }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
