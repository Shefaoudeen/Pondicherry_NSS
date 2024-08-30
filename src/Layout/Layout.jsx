import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Slider from '../Components/Slider'

const Layout = () => {
  return (
    <>
        <Banner/>
        <Navbar/>
        <Slider/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout