import React from 'react'
import { useRef, useEffect } from 'react';
import SidebarMenu from '../Components/SidebarMenu';
import { OFFICERS_DETAILS } from '../Data';

const WhosWho = () => {
    const whosWhoSectionRef = useRef(null);

    useEffect(() => {
        if (whosWhoSectionRef.current)
            whosWhoSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <div className='mt-10 w-[75%] mx-auto ' ref={whosWhoSectionRef}>
            <SidebarMenu breadCrumb={[{ label: "Home", path: '/' }, { label: "Who's Who", path: '/whoswho' }]}>
                <div>
                    <h1 className='text-3xl text-black/65'>Who's Who</h1>
                    {/* entire content box  */}
                    <div className='mt-5 flex flex-col divide-y-2 border mb-4 rounded-md'>
                        
                        <section>
                            <h1 className='font-bold py-2 px-5 border-b-2 text-black/70'>MINISTER OF YOUTH AFFAIRS & SPORTS</h1>
                            <div className='flex  divide-x-2'>
                                <h3 className='py-2 px-5'>
                                    Minister for
                                    <h3 className='font-semibold text-slate-700'>Youth Affairs & Sports</h3></h3>
                                <div className='px-5 py-2'>
                                    <h3>Dr. Mansukh Mandaviya</h3>
                                    <h3>Room no 401, C Wing, Shastri Bhawan, New Delhi</h3>
                                    <h3><span className='font-semibold text-slate-700'>E-mail :</span> office-moyas[at]gov[dot]in</h3>
                                    <h3><span className='font-semibold text-slate-700'>Telephone No:</span> 011-23386520, 23381185, 23384183</h3>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h1 className='font-bold py-2 px-5 border-b-2 text-black/70'>MINISTER OF STATE FOR YOUTH AFFAIRS & SPORTS</h1>
                            <div className='flex  divide-x-2'>
                                <h3 className='py-2 px-5'>
                                    MOS for
                                    <h3 className='font-semibold text-slate-700'>Youth Affairs & Sports</h3></h3>
                                <div className='px-5 py-2'>
                                    <h3>Smt. Raksha Nikhil Khadse</h3>
                                </div>
                            </div>
                        </section>

                        <table className='table-fixed'>
                            <thead>
                                <tr>
                                    <th className=' border px-3 py-2 font-bold text-black/70 text-start'>Sl. No.</th>
                                    <th className='w-3/12 border px-3 py-2 font-bold text-black/70 text-start'>Name, Designation & E-mail ID of Directorate of NSS</th>
                                     <th className='w-1/12 border px-3 py-2 font-bold text-black/70 text-start'>State</th>
                                     <th className='w-2/6 border px-3 py-2 font-bold text-black/70 text-start'>Office Address</th>
                                    <th className=' border px-3 py-2 font-bold text-black/70 text-start'>Contact Number</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                OFFICERS_DETAILS.map((officer,index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='border px-3 py-2 text-start align-top'>{index+1}</td>
                                            <td className='border px-3 py-2 text-start align-top'>
                                                <h4>{officer.name}</h4>
                                                <h4>{officer.desgination}</h4>
                                                <h4>{officer.email}</h4>
                                            </td>
                                            <td className='border px-3 py-2 align-top'>{officer.state}</td>
                                            <td className='border px-3 py-2 align-top'>{officer.officeAddress}</td>
                                            <td className='border px-3 py-2 align-top'>{officer.contact}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>

                    <a href='/directory' className='bg-red-600 px-3 py-2 rounded-md ring-inset text-white hover:bg-white hover:ring-2 hover:text-red-600 ring-red-600 duration-300'>NSS Directory</a>

                </div>
            </SidebarMenu>
        </div>
    )
}

export default WhosWho