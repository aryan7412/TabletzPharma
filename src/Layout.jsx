import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout