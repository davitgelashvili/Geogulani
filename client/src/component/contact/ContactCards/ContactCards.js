import { Cards } from './Cards'

export const ContactCards = () => {
    const data1 = [
        `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/></svg>
        11. გრიშაშვილის ქ. თბილისი, საქართველო.
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/></svg>
        ზემო ნიქოზის ხელოვნების სკოლა
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/></svg>
        წნორის შშმ ბავშთა სახლი
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/></svg>
        551041543
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/></svg>
        info@geogulani.com
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/></svg>
        ceo@geogulani.com
        `
    ]
    const data2 = [
        '9:00 AM - 6:00 PM',
        'Weekend - Close'
    ]
    return (
        <>
            <Cards data={data1}/>
            <Cards data={data2}/>
            <Cards>
                <iframe style={{width: '100%', height: '280px', border: 'none'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7331.81705186221!2d44.8011696!3d41.6929331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d00497cfafb%3A0xf6bc7b142a43ebff!2z4YOl4YOQ4YOg4YOX4YOj4YOa4YOYIOGDmeGDkOGDmuGDmOGDkuGDoOGDkOGDpOGDmOGDmOGDoSDhg57hg5jhg6Dhg5Xhg5Thg5rhg5gg4YOh4YOQ4YOU4YOg4YOX4YOQ4YOo4YOd4YOg4YOY4YOh4YOdIOGDkOGDoeGDneGDquGDmOGDkOGDquGDmOGDkCAtIFRoZSBGaXJzdCBJbnRlcm5hdGlvbmFsIEdlb3JnaWFuIENhbGxpZ3JhcGh5IEFzc29jaWF0aW9u!5e1!3m2!1sen!2sge!4v1770209529982!5m2!1sen!2sge" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Cards>
        </>
    )
}
