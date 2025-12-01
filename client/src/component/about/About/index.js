import React from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import { ImageBox } from '../../ImageBox/ImageBox'

export const About = () => {
    return (
        <>
            <Section>
                <PageTitle
                    title={'Georgian Calligraphy'}
                    text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                />
                <div>
                    <div className='row'>
                        <div>
                            <SectionTitle title={'Acient Georgia Symbol'} />
                        </div>
                        <div className='col-12 col-lg-3 d-flex justify-content-center'>
                            <figure className={styles['cover']}>
                                <ImageBox src={'https://static.tkt.ge/next/static/images/zugdidi.jpg'} alt={'cover'} className={styles['cover__img']} />
                            </figure>
                        </div>
                        <div className='col-auto col-md'>
                            <div className={styles['text']}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <SectionTitle title={'Our Core Mission'} />
                <div className={styles['text']}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </Section>
        </>
    )
}
