import React, { useEffect,useState } from 'react'
import { NAV_ITEMS } from '../Data/index'
import { NavLink,Link,useLocation } from 'react-router-dom'

const Navbar = () => {
  const [currRoute, setCurrRoute] = useState("/")
  const location = useLocation();

  useEffect(()=> {
    setCurrRoute(location.pathname)
  },[location.pathname])

  return (
    <nav className='bg-blue-900 relative'>
      <ul className='flex items-center justify-center px-20 text-white font-semibold'>
        {
          NAV_ITEMS.map((ele,i) => {
            if (ele.subItems)
              return (
                <div className='group duration-300' key={i}> 
                  <Link to='/aboutUs' className={`${ele.subItems.some(item => item.path === currRoute) ? 'bg-red-500' : 'bg-blue-900'} px-4 text-center py-4 cursor-pointer group-hover:bg-red-500 duration-300`}>{ele.title}</Link>
                  <div className='hidden bg-red-500 z-[10000] absolute top-[100%] items-start justify-start flex-col min-w-64 group-hover:flex duration-300'>
                    {ele.subItems.map((subItem,i) => {
                      return <NavLink key={i} to={subItem.path} className='sub-items w-full px-4 py-4 hover:bg-white hover:text-red-500 cursor-pointer duration-500'>{subItem.title}</NavLink>
                    })}
                  </div>
                </div>
              )
            else //nav items other than Organisation
              return <NavLink key={i} to={ele.path} className='px-4 text-center py-4 hover:bg-red cursor-pointer hover:bg-red-500 duration-300'>{ele.title}</NavLink>
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar