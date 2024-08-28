import React from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area';
import './Announcements.css'

const Announcements = ({ title, data }) => {

    return (
        <div style={{ overflowClipMargin: "content-box" }} className='relative border-blue-900 border-2 max-h-[450px] min-w-[350px] max-w-[400px] pb-3 overflow-clip'>
            <h1 className=' w-full bg-blue-900 px-10 py-2 text-2xl z-10 text-white'>{title}</h1>
            <div className=' duration-700 overflow-clip' >
                {/* <marquee behaviour="scroll" vspace="0" direction="up" scrollamount="2" onMouseOver={(e) => e.target.stop()} onMouseLeave={(e) => e.target.start()}>
            {
                data.map((ele,index) => {
                    return <div key={index} className='pb-2 duration-1000'>
                        <h3 className='font-semibold text-slate-500'>{ele.date}</h3>
                        <a className='cursor-pointer text-blue-700' href={ele.link}>{ele.title}</a>
                    </div>

                })
            }
            </marquee> */}
                <ScrollArea.Root className="ScrollAreaRoot">
                    <ScrollArea.Viewport className="ScrollAreaViewport">
                        <div className='flex flex-col gap-4 px-6 py-3'>
                            {data.map((ele,i) => (
                                <div  key={i} className='flex flex-col gap-1 border-b-2 pb-2'>
                                    <h1 className='font-semibold text-slate-600 select-none '>{ele.date}</h1>
                                    <a className='cursor-pointer text-blue-700' href={ele.link}>{ele.title}</a>
                                </div>
                            ))}
                        </div>
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                        <ScrollArea.Thumb className="ScrollAreaThumb" />
                    </ScrollArea.Scrollbar>
                    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                        <ScrollArea.Thumb className="ScrollAreaThumb" />
                    </ScrollArea.Scrollbar>
                    <ScrollArea.Corner className="ScrollAreaCorner" />
                </ScrollArea.Root>
            </div>
        </div>
    )
}

export default Announcements