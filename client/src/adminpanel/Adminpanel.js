import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import CarsPage from './page/cars/cars'
import Sidebar from './components/Sidebar/Sidebar'
import TeamPage from './page/team'
import BlogPage from './page/blog'
import { AdminLogin } from './AdminLogin'
import GalleryPage from './page/gallery'
import CoursePage from './page/course'
import CampsPage from './page/Camps'
import EventsPage from './page/Events'
import MessagePage from './page/Message'

export default function Adminpanel() {
    const [isLogin, setIsLogin] = useState(true)
    
    useEffect(()=>{
        console.log('loged')
    }, [isLogin])

    return (
        <div className='adminpanel'>
            <div className='row'>
                {!isLogin ? (
                    <Routes>
                        <Route path='/*' element={<AdminLogin setIsLogin={setIsLogin}/>} />
                    </Routes>
                ) : (
                    <>
                        <div className='col-auto'>
                            <Sidebar />
                        </div>
                        <div className='col' style={{ maxWidth: '100%' }}>
                            <Routes>
                                <Route path='/' element={<h1>dashboard</h1>} />
                                <Route path='/blogs*' element={<BlogPage />} />
                                <Route path='/gallery*' element={<GalleryPage />} />
                                <Route path='/teams*' element={<TeamPage />} />
                                <Route path='/course*' element={<CoursePage />} />
                                <Route path='/camps*' element={<CampsPage />} />
                                <Route path='/events*' element={<EventsPage />} />
                                <Route path='/message*' element={<MessagePage />} />
                            </Routes>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}
