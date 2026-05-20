import Section from '../SectionTitle/Section';
import PageTitle from '../SectionTitle/PageTitle';
import { ContactCards } from './ContactCards/ContactCards';
import { Form } from './Form';
import { useLanguage } from '../../context/LanguageContext';

export const Contact = () => {
    const { language } = useLanguage()
    const pageTitle = {
        ka: 'კონტაქტი',
        en: 'Contact',
        ru: '연락처',
    }
    const pageText = {
        ka: 'საკონტაქტო ინფორმაცია და შესავსები ფორმა',
        en: 'Contact information and inquiry form',
        ru: '연락처 정보 및 문의 양식',
    }

    return (
        <Section>
            <PageTitle
                title={pageTitle[language]}
                text={pageText[language]}
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
