import React, { useEffect, useState } from 'react'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import Loading from '../Loading/Loading';
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { useLanguage } from '../../context/LanguageContext';

export const Form = ({ courseName }) => {
    const { language } = useLanguage();
    const [loading, setLoading] = useState(false);

    const t = {
        courseName:   { ka: 'კურსის სახელი',       en: 'Course Name',    ru: 'コース名' },
        fullname:     { ka: 'სახელი და გვარი',      en: 'Full Name',      ru: '氏名' },
        email:        { ka: 'ელ. ფოსტა',            en: 'Email',          ru: 'メールアドレス' },
        phone:        { ka: 'ტელეფონის ნომერი',     en: 'Phone Number',   ru: '電話番号' },
        placeholder:  { ka: 'შეიყვანეთ მონაცემები', en: 'Enter data',     ru: '（内容をご入力ください）' },
        description:  { ka: 'აღწერა',               en: 'Description',    ru: '内容' },
        send:         { ka: 'გაგზავნა',             en: 'Send',           ru: '送信' },
        success:      { ka: 'მაილი გაიგზავნა წარმატებით', en: 'Email sent successfully', ru: 'メールが正常に送信されました' },
        error:        { ka: 'დაფიქსირდა შეცდომა',  en: 'An error occurred', ru: 'エラーが発生しました' },
    };
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        phonenumber: "",
        text: "" || courseName,
    })

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await getApi.postData(`/mail`, values).finally(() => {
                setValues({
                    fullname: "",
                    email: "",
                    phonenumber: "",
                    text: "",
                })
                setLoading(false)
            })
            alert(t.success[language]);
        } catch (err) {
            alert(t.error[language]);
        }
    };

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <div>
            {courseName && (
                <CustomInput
                    disabled={true}
                    type={'text'}
                    title={t.courseName[language]}
                    name={'text'}
                    value={courseName}
                />
            )}
            <CustomInput
                type={'text'}
                title={t.fullname[language]}
                name={'fullname'}
                value={values.fullname}
                placeholder={t.placeholder[language]}
                onChange={handleChange}
            />
            <CustomInput
                type={'mail'}
                title={t.email[language]}
                name={'email'}
                value={values.email}
                placeholder={t.placeholder[language]}
                onChange={handleChange}
            />
            <CustomInput
                type={'text'}
                title={t.phone[language]}
                name={'phonenumber'}
                value={values.phonenumber}
                placeholder={t.placeholder[language]}
                onChange={handleChange}
            />
            {!courseName && (
                <>
                    <p>{t.description[language]}</p>
                    <textarea
                        rows={7}
                        name={'text'}
                        value={values.text}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                </>
            )}
            <CustomButton disabled={loading}>
                {loading && (
                    <div style={{ position: 'relative' }}>
                        <Loading />
                    </div>
                )}
                {!loading && (
                    <p className={styles.contact__btn} onClick={handleSubmit}>
                        {t.send[language]}
                    </p>
                )}
            </CustomButton>
        </div>
    )
}
