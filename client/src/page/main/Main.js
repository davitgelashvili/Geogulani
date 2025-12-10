import React from 'react'
import { WeAre } from '../../component/main/WeAre/WeAre'
import { LatestNews } from '../../component/main/News/LatestNews'
import { LatestEvents } from '../../component/main/Events'
import { LatestGallery } from '../../component/main/Gallery'

export default function MainPage() {
  return (
    <>
      <div style={{background: '#fff', marginBottom: '100vh', position: 'relative', zIndex: 1, boxShadow: '0px 0px 41px 0px #2a2a2a'}}>
        <WeAre />
        <LatestNews />
        <LatestEvents />
      </div>
      <LatestGallery />
    </>
  )
}
