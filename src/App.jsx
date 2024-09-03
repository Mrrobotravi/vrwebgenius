import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import './App.css'

// import NewSparkles from './Pages/NewSparkles'
import NavbarMenu from './Components/NavbarMenu'
import { DarkModeProvider } from './Components/Effect/DarkModeContext'

export default function App() {
  return (
    <>
      <DarkModeProvider>



        <NavbarMenu />

        {/* <NewSparkles /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </DarkModeProvider>
    </>
  )
}
