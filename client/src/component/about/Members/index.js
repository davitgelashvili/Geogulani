import React from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'
import ServiceCard from '../../ServiceCard/ServiceCard'
import Card from '../../Card/Card'

export const Members = () => {
    const benefits = [
        {
            _id: 'd1dsc',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: 'TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '3fea',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: 'TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '42dfassd',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: 'TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '2ggddvsddf',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: 'TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '3r3fds',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: 'TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: '3r3fds',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: 'TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        }
    ]

    const typesData = [
        {
            _id: 'vevsa3ca',
            title: 'student membership',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: 'fa2cas',
            title: 'professional membership',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: 'sda2dcsasd',
            title: 'master membership',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        }
    ]

    const apply = [
        {
            _id: 'dsad23ca',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '1 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: 'dsd2c',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '2 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: 'das2f322',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '3 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            _id: 'da23cefs',
            cover: 'https://static.tkt.ge/next/static/images/zugdidi.jpg',
            title: '4 TITLE',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
    ]
    return (
        <>
            <Section>
                <PageTitle
                    title={'Membership'}
                    text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                />
                <SectionTitle title={'member benefits'} />
                <div className='row'>
                    {benefits && benefits?.map((item) => {
                        return (
                            <div className='col-6 col-lg-4' key={item._id}>
                                <ServiceCard
                                    cover={item.cover}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
            <Section>
                <SectionTitle title={'member types'} />
                <div className='row'>
                    {typesData && typesData?.map((item) => {
                        return (
                            <div className='col-lg-4' key={item._id}>
                                <Card
                                    cover={item.cover}
                                    title={item.title}
                                    desc={item.desc}
                                    contactLink
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
            <Section>
                <SectionTitle title={'how to apply'} />
                <div className='row'>
                    {apply && apply?.map((item) => {
                        return (
                            <div className='col-sm-6 col-lg-3' key={item._id}>
                                <ServiceCard
                                    cover={item.cover}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            </div>
                        )
                    })}
                </div>
            </Section>
        </>
    )
}
