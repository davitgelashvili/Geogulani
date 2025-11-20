import React from 'react'
import { Route, Routes } from 'react-router'
import EventsList from '../../components/Events/List'
import AddEvents from '../../components/Events/Add'

export default function EventsPage() {
  return (
    <Routes>
      <Route path='/' element={<EventsList />} />
      <Route path='/:id' element={<AddEvents />} />
      <Route path='/add' element={<AddEvents />} />
    </Routes>
  )
}
