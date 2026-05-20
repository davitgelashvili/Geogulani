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
        ru: 'お問い合わせ',
    }
    const pageText = {
        ka: 'საკონტაქტო ინფორმაცია და შესავსები ფორმა',
        en: 'Contact information and inquiry form',
        ru: 'お問い合わせ情報・お問い合わせフォーム',
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
