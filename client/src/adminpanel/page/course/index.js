import React from 'react'
import { Route, Routes } from 'react-router'
import CourseList from '../../components/Course/List'
import AddCourse from '../../components/Course/Add'

export default function CoursePage() {
  return (
    <Routes>
      <Route path='/' element={<CourseList />} />
      <Route path='/:id' element={<AddCourse />} />
      <Route path='/add' element={<AddCourse />} />
    </Routes>
  )
}
