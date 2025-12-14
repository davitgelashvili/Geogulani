import React from 'react'
import { Route, Routes } from 'react-router'
import PartnersList from '../../components/Partners/List'
import AddPartners from '../../components/Partners/Add'

export default function PartnersPage() {
  return (
    <Routes>
      <Route path='/' element={<PartnersList />} />
      <Route path='/:id' element={<AddPartners />} />
      <Route path='/add' element={<AddPartners />} />
    </Routes>
  )
}
