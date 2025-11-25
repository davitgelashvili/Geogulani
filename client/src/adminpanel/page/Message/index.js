import React from 'react'
import { Route, Routes } from 'react-router'
import MessageList from '../../components/Message/List'
import AddMessage from '../../components/Message/Add'

export default function MessagePage() {
  return (
    <Routes>
      <Route path='/' element={<MessageList />} />
      <Route path='/:id' element={<AddMessage />} />
      <Route path='/add' element={<AddMessage />} />
    </Routes>
  )
}
