import React from "react"
import { useState } from "react"
import { ArrowLeft } from "react-feather"
import { Link } from "react-router-dom"

const SideBar: React.FC = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <div className={`bg-slate-300 h-screen p-5 ${open ? "w-72" : "w-10"} duration-300 relative`}>

            {/* Arrow icon */}
            <div 
                className="flex justify-center items-center bg-white p-1 h-[30px] text-black text-3xl rounded absolute -right-3 top-5 border-2 border-black cursor-pointer z-10"
                onClick={() => setOpen(!open)}>
                <ArrowLeft className={`${!open && "rotate-180"} duration-300`}/>
            </div>

            {/* Sidebar body */}
            <div className={`${!open && "scale-0"} flex flex-col flex-start duration-300`}>
                <Link to="/" className="text-2xl text-black font-bold mb-5">Marker</Link>
                <div>
                    Item
                </div>
            </div>
        </div>
    )
}

export default SideBar
