import React from 'react'
import { Route, Routes } from 'react-router'
import FestivalList from '../../components/Festival/List'
import AddFestival from '../../components/Festival/Add'

export default function FestivalPage() {
  return (
    <Routes>
      <Route path='/' element={<FestivalList />} />
      <Route path='/:id' element={<AddFestival />} />
      <Route path='/add' element={<AddFestival />} />
    </Routes>
  )
}
