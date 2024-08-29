import React from 'react'

const SidebarMenu = ({breadCrumb,children}) => {
    return (
        <div className='w-full'>
            <div className='flex bg-red-600 w-full py-2 px-3 text-white'>
                {
                    breadCrumb.map((ele,i) => {
                        return (<>
                            <a className='hover:underline' href={ele.path}>{ele.label}</a>
                            {i<breadCrumb.length-1 && <span className='px-1'>{">>"}</span>}
                        </>)
                    })
                }
            </div>
            <div className="mt-5 flex justify-between gap-5">
                <aside className='flex flex-col divide-y-[1px] divide-y-white min-w-64'>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>Awards & Awardees</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>NPYAD</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>Photo Gallery</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>Video Gallery</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>National Youth Festival</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>Disclaimar</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>FAQs</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>NSS RD Parade Camp</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>Self Financing Unit</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>Site Maps</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>Downloads</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>Covid-19</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>EBSB</a>
                    <a href="" className='bg-blue-900 px-3 py-[8px] text-white hover:bg-red-500 duration-300'>NSS Alumini</a>
                </aside>
                <aside className='flex-1'>
                    {children}
                </aside>
            </div></div>
    )
}

export default SidebarMenu