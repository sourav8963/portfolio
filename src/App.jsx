import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Resume from './components/Resume'
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
