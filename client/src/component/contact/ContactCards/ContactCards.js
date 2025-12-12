import React from 'react'
import { Cards } from './Cards'

export const ContactCards = () => {
    const data1 = {
        address: 'aghmashenebeli',
        phone: '591111996',
        email: 'davit@gelashvili.ge',
    }
    const data2 = {
        address: 'rustaveli',
        phone: '5555999999',
        email: 'info@geogulani.com',
    }
    return (
        <>
            <Cards data={data1}/>
            <Cards data={data2}/>
        </>
    )
}
