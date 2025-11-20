import React from 'react'
import { WeAre } from '../../component/main/WeAre/WeAre'
import { LatestNews } from '../../component/main/News/LatestNews'
import { LatestEvents } from '../../component/main/Events'
import { LatestGallery } from '../../component/main/Gallery'

export default function MainPage() {
  return (
    <>
      <WeAre />
      <LatestNews />
      <LatestEvents />
      <LatestGallery />
    </>
  )
}
