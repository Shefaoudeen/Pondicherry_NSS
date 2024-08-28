import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Banner/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout