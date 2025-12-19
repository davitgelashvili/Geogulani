import React, { useEffect, useState } from 'react'
import getApi from '../../http/getApi';
import Section from '../SectionTitle/Section';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useParams } from 'react-router-dom';
import { ImageBox } from '../ImageBox/ImageBox';
import Loading from '../Loading/Loading';
import styles from './styles.module.scss'
import PageTitle from '../SectionTitle/PageTitle';
import { ContactCards } from './ContactCards/ContactCards';
import { Form } from './Form';

export const Contact = () => {
    const pageTitle = {
        ka: 'კონტაქტი',
        en: '',
        ru: '',
    }
    const pageText = {
        ka: 'საკონტაქტო ინფორმაცია და შესავსები ფორმა',
        en: '',
        ru: '',
    }

    return (
        <Section>
            <PageTitle
                title={pageTitle.ka}
                text={pageText.ka}
            />
            <div className='row'>
                <div className='col-lg-6'>
                    <Form courseName={''} />
                </div>
                <div className='col-lg-6'>
                    <ContactCards />
                </div>
            </div>
        </Section>
    )
}
