import React, { useEffect, useState } from 'react'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import Loading from '../Loading/Loading';
import styles from './styles.module.scss'
import getApi from '../../http/getApi';

export const Form = ({ courseName }) => {
    const [loading, setLoading] = useState(false);
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
            alert('მაილი გაიგზავნა წარმატებით');
        } catch (err) {
            alert('დაფიქსირდა შეცდომა');
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
                    title={'კურსის სახელი'}
                    name={'text'}
                    value={courseName}
                />
            )}
            <CustomInput
                type={'text'}
                title={'სახელი და გვარი'}
                name={'fullname'}
                value={values.fullname}
                placeholder={'შეიყვანეთ მონაცემები'}
                onChange={handleChange}
            />
            <CustomInput
                type={'mail'}
                title={'ელ. ფოსტა'}
                name={'email'}
                value={values.email}
                placeholder={'შეიყვანეთ მონაცემები'}
                onChange={handleChange}
            />
            <CustomInput
                type={'text'}
                title={'ტელეფონის ნომერი'}
                name={'phonenumber'}
                value={values.phonenumber}
                placeholder={'შეიყვანეთ მონაცემები'}
                onChange={handleChange}
            />
            {!courseName && (
                <>
                    {/* <CustomInput
                        type={'text'}
                        title={'აღწერა'}
                        name={'text'}
                        value={values.text}
                        placeholder={'რატომ გსურთ ჩვენთან დაკავშირება'}
                        onChange={handleChange}
                    /> */}
                    <p>აღწერა</p>
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
                        გაგზავნა
                    </p>
                )}
            </CustomButton>
        </div>
    )
}
