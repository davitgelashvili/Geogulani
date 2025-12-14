import React from 'react'
import Header from '../component/common/Header/Header'
import { Route, Routes } from 'react-router'
import MainPage from './main/Main'
import AboutPage from './about/About'
import TeamPage from './team/Team'
import MessagePage from './message/Message'
import MembersPage from './members/Members'
import EducationPage from './education/Education'
import CampsPage from './camps/Camps'
import ExchangePage from './exchange/Exchange'
import BlogPage from './blog/Blog'
import GalleryPage from './gallery/Gallery'
import DetailPage from './detail/Detail'
import EventsPage from './events/Events'
import GeocalligraphyPage from './geocalligraphy/Geocalligraphy'
import { Footer } from '../component/common/Footer/Footer'
import ContactPage from './contact/Contact'
import PartnersPage from './partners/Partners'

export default function Page() {
  return (
    <>
      <Header />
      <>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/geocalligraphy' element={<GeocalligraphyPage />} />
          <Route path='/teams' element={<TeamPage />} />
          <Route path='/message' element={<MessagePage />} />
          <Route path='/members' element={<MembersPage />} />
          <Route path='/education' element={<EducationPage />} />
          <Route path='/camps' element={<CampsPage />} />
          <Route path='/exchange' element={<ExchangePage />} />
          <Route path='/blogs' element={<BlogPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/partners' element={<PartnersPage />} />
          <Route path='/:name/:id' element={<DetailPage />} />
        </Routes>
      </>
      <Footer />
    </>
  )
}
