import React from 'react'
import Section from '../../SectionTitle/Section'
import SectionTitle from '../../SectionTitle/SectionTitle'
import styles from './styles.module.scss'
import PageTitle from '../../SectionTitle/PageTitle'

export const PresidentMessage = () => {
    return (
        <>
            <Section>
                <PageTitle
                    title={'Presidents Message'}
                    text={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                />
                <div>
                    PresidentMessage
                </div>
            </Section>
        </>
    )
}
