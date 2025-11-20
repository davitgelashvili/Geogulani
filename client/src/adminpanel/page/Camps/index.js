import React from 'react'
import { Route, Routes } from 'react-router'
import CampsList from '../../components/Camps/List'
import AddCamps from '../../components/Camps/Add'

export default function CampsPage() {
  return (
    <Routes>
      <Route path='/' element={<CampsList />} />
      <Route path='/:id' element={<AddCamps />} />
      <Route path='/add' element={<AddCamps />} />
    </Routes>
  )
}
