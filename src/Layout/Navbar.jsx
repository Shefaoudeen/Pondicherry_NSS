import React from 'react'
import { NAV_ITEMS } from '../Data/index'

const Navbar = () => {
  return (
    <nav className='bg-blue-900'>
      <ul className='flex relative items-center justify-center px-20 text-white font-semibold'>
        {
          NAV_ITEMS.map((ele) => {
            if (ele.subItems)
              return (
                <div className='group duration-300'>
                  <a className='h-full px-4 text-center py-4 cursor-pointer group-hover:bg-red-500 duration-300'>{ele.title}</a>
                  <div className='bg-red-500 absolute top-[100%] hidden items-start justify-start flex-col min-w-64 group-hover:flex duration-300'>
                    {ele.subItems.map((subItem) => {
                      return <a href={subItem.path} className='w-full px-4 py-4 hover:bg-red-700 cursor-pointer duration-500'>{subItem.title}</a>
                    })}
                  </div>
                </div>
              )
            else
              return <a href={ele.path} className='px-4 text-center py-4 hover:bg-red cursor-pointer hover:bg-red-500 duration-500'>{ele.title}</a>
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar