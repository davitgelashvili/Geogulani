import React from 'react'
import { Route, Routes } from 'react-router'
import GalleryList from '../../components/Gallery/List'
import AddGallery from '../../components/Gallery/Add'

export default function GalleryPage() {
  return (
    <Routes>
      <Route path='/' element={<GalleryList />} />
      <Route path='/:id' element={<AddGallery />} />
      <Route path='/add' element={<AddGallery />} />
    </Routes>
  )
}
