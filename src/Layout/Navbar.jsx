import React, { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../Data/index'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { hamburger } from '../assets/Icons'

const Navbar = () => {
  const [currRoute, setCurrRoute] = useState("/")
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState("")

  useEffect(() => {
    setCurrRoute(location.pathname)
    setNavOpen(false)
  }, [location.pathname])
  useEffect(() => {
    setSubMenuOpen("")
  }, [navOpen])

  return (
    <nav className='bg-blue-900 relative'>
      <ul className='flex items-center relative justify-end lg:justify-center px-5 lg:px-20 text-white font-semibold'>
        {
          NAV_ITEMS.map((ele, i) => {
            if (ele.subItems)
              return (
                <div className='group duration-300 hidden lg:block' key={i}>
                  <Link to='/aboutUs' className={`${ele.subItems.some(item => item.path === currRoute) ? 'bg-red-500' : 'bg-blue-900'} px-4 text-center py-4 cursor-pointer group-hover:bg-red-500 duration-300`}>{ele.title}</Link>
                  <div className='hidden bg-red-500 z-[10000] absolute top-[100%] items-start justify-start flex-col min-w-64 group-hover:flex duration-300'>
                    {ele.subItems.map((subItem, i) => {
                      return <NavLink key={i} to={subItem.path} className='sub-items w-full px-4 py-4 hover:bg-white hover:text-red-500 cursor-pointer duration-500'>{subItem.title}</NavLink>
                    })}
                  </div>
                </div>
              )
            else //nav items other than Organisation
              return <NavLink key={i} to={ele.path} className='hidden lg:block px-4 text-center py-4 hover:bg-red cursor-pointer hover:bg-red-500 duration-300'>{ele.title}</NavLink>
          })
        }
        {/* responsive nav for mobile */}
        <img src={hamburger} alt="more" className='w-7 py-1 lg:hidden' onClick={() => setNavOpen(!navOpen)} />
        {
          navOpen && //shows the menus only when hamburger icon is clicked
          <div className='absolute top-[100%] z-[10000] flex flex-col  right-0 bg-red-500 text-white'>
            {
              NAV_ITEMS.map((ele, i) => {

                if (ele.subItems)
                  return (
                    <div className={`py-4 px-4 group relative duration-300 hover:bg-white ${ele.subItems.some(item => item.path === currRoute) ? 'bg-white text-red-500' : 'bg-red-500'}`} key={i}> 
                      <Link onClick={() => setSubMenuOpen(ele.title)} className={`peer px-4 text-center py-4 cursor-pointer w-full  group-hover:text-red-500  duration-300`}>{ele.title}</Link>
                      <div className={`${subMenuOpen === ele.title ? 'flex' : 'hidden'} bg-red-600 text-white z-[10000] min-w-40 absolute top-0 right-[100%] flex-col peer-active:flex group-hover:flex duration-300`}>
                        {ele.subItems.map((subItem,i) => {
                          return <NavLink key={i} to={subItem.path} onClick={() => setSubMenuOpen("")} className='sub-items w-full px-4 py-4 text-wrap hover:bg-white hover:text-red-500 cursor-pointer duration-500'>{subItem.title}</NavLink>
                        })}
                      </div>
                    </div>
                  )
                else //nav items other than Organisation
                return <NavLink key={i} to={ele.path} className='mobile-screen-links sub-items px-8 py-4  hover:bg-red cursor-pointer w-full hover:text-red-500 hover:bg-white active:bg-white duration-300'>{ele.title}</NavLink>
              })
            }
          </div>

        }
      </ul>
    </nav>
  )
}

export default Navbar