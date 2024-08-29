import React from 'react'
import { NSSLogo, pyLogo } from '../assets/images'

const Banner = () => {
  return (
    <div className='text-3xl text-center min-h-44 flex items-center justify-between px-10'>
      <img src={NSSLogo} alt="Logo" />
      <div className='flex gap-5 items-center'>
        <div className='text-end'>
          <h1 className='text-3xl text-blue-900 font-semibold p-1'>GOVERMENT OF PUDUCHERRY</h1>
          <h1 className='text-2xl text-blue-900  p-1'>புதுச்சேரி அரசு</h1>

        </div>
        <img src={pyLogo} alt="" className='w-32' />
      </div>
    </div>
  )
}

export default Banner