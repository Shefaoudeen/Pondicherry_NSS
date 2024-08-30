import React, { useEffect, useRef, useState } from 'react'
import SidebarMenu from '../Components/SidebarMenu';
import { UNIT_DETAILS } from '../Data';
import { pdfIcon } from '../assets/Icons';

//remove the duplicate regions
const regionalDirectorates = [...new Set(UNIT_DETAILS.map(item => item.regionalDirectorate))];

const Directory = () => {
    const directorySectionRef = useRef(null);
    const [details, setDetails] = useState(UNIT_DETAILS);
    const [filterRegion, setFilterRegion] = useState("");
    const [filterState, setFilterState] = useState("");

    useEffect(() => {
        if (directorySectionRef.current)
            directorySectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }, []);

    function onFilterPress() {

        if(filterRegion === "" && filterState === "") //both state and region fields are empty
            details.length < 10 && setDetails(UNIT_DETAILS) //set back the entire data only if the current displaying data is already filted
        else if(filterState === "") //filtering based on region
            setDetails([...UNIT_DETAILS.filter(filterByRegion)])
        else if(filterRegion === "") //filtering based on state
            setDetails([...UNIT_DETAILS.filter(filterByState)])
        else  //both filled - so filtering based on state would be enough
            setDetails([...UNIT_DETAILS.filter(filterByState)])

    }

    function filterByRegion(unit){
        return unit.regionalDirectorate === filterRegion || filterRegion === ""
    }
    function filterByState(unit){
        return unit.state === filterState 
    }

    return (
        <div className='mt-10 w-[75%] mx-auto ' ref={directorySectionRef}>
            <SidebarMenu breadCrumb={[{ label: "Home", path: '/' }, { label: "NSS Directories View", path: '/directory' }]}>
                <div >
                    <h1 className='text-3xl text-black/65'>NSS Directory</h1>

                    {/* filter section  */}
                    <section className='mt-5 flex gap-20 items-end py-3 px-1  rounded-md'>
                        <div className='flex-1'>
                            <label htmlFor="filter-region" className='text-lg font-semibold'>Filter by Region</label>
                            <br />
                            <select value={filterRegion} onChange={e => {setFilterRegion(e.target.value); setFilterState("")}} name="filter-region" id="filter-region" className='custom-scrollbar focus:outline-none mt-2 w-full bg-slate-200 py-1 px-4 ring-[1px] focus:border-0 focus:ring-2  ring-blue-700 rounded-md'>
                                <option defaultValue={true} value="">--Select--</option>
                                {
                                    regionalDirectorates.map((ele) => {
                                        return <option key={ele} value={ele}>{ele}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className='flex-1'>
                            <label htmlFor="filter-state" className='text-lg font-semibold'>Filter by State</label>
                            <br />
                            <select value={filterState} onChange={e => setFilterState(e.target.value)} name="filter-state" id="filter-state" className='custom-scrollbar focus:outline-none mt-2 w-full bg-slate-200 py-1 px-4 ring-[1px] scroll-p-1 focus:border-0 focus:ring-2 ring-blue-700 rounded-md'>
                                <option defaultValue={true} value="">--Any--</option>
                                {
                                    //to display option(states) corresponding to the selected Region
                                    UNIT_DETAILS.filter(filterByRegion).map((ele,i) => {
                                        return <option key={i} value={ele.state}>{ele.state}</option>
                                    })
                                }
                            </select>
                        </div>
                        <button onClick={onFilterPress} className='bg-red-600 px-6 py-1 h-fit rounded-md ring-inset text-white hover:bg-white hover:ring-2 hover:text-red-600 ring-red-600 duration-300'>Filter</button>
                    </section>

                    {/* button for showing all the units and clearing the filter fields -- displays only when filters are applied */}
                    <button onClick={() => {setDetails(UNIT_DETAILS); setFilterRegion(""); setFilterState("")}} className={` px-1 text-red-600 ${details.length < 10 ? "block" : "hidden"}`}>Show all</button>
                     
                     {/* table content */}
                    <table className='w-full mt-5'>
                        <thead>
                        <tr className='bg-blue-900 text-white'>
                            <th className=' border px-3 py-2 font-bold text-start'>Name of Regional Directorate of NSS</th>
                            <th className=' border px-3 py-2 font-bold text-start'>Name of the State/UT</th>
                            <th className=' border px-3 py-2 font-bold text-start'>Detail list of NSS Database</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            details.map((ele, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='border bg-cyan-100 px-3 py-4 align-top'>{ele.regionalDirectorate}</td>
                                        <td className='border px-3 py-4 align-top'>{ele.state}</td>
                                        <td className='border px-3 py-4 align-top flex text-blue-800 gap-1'>
                                            <img src={pdfIcon} alt="pdf" className='object-contain' />
                                            <a className='hover:underline' target='_blank' href={ele.downloadLink}>Download</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </SidebarMenu>
        </div>
    )
}

export default Directory