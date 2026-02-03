import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useParams } from 'react-router-dom';
import { ImageBox } from '../ImageBox/ImageBox';
import Loading from '../Loading/Loading';
import styles from './styles.module.scss'
import { Form } from '../contact/Form';
import { useLanguage } from '../../context/LanguageContext';

export const Detail = () => {
    const { language } = useLanguage()
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

    const regText = {
        ka: 'რეგისტრაცია',
        en: 'Registration',
        ru: '',
    }

    // if (!data) return null
    return (
        <Section>
            {load && <Loading />}
            {!load && (
                <>
                    <SectionTitle
                        title={data?.title?.[language]}
                    />
                    <figure className={styles.cover}>
                        <ImageBox src={data?.cover} alt='cover' />
                    </figure>

                    {params.name === 'course' ? (
                        <div className='row'>
                            <div dangerouslySetInnerHTML={{ __html: data?.desc?.[language] }} className='col-lg-8'></div>
                            <div className='col-lg-4'>
                                <h1>{regText[language]}</h1>
                                <Form courseName={data?.title?.[language]} />
                            </div>
                        </div>
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: data?.desc?.[language] }}></div>
                    )}
                </>
            )}
        </Section>
    )
}
