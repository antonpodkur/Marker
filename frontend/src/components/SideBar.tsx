import React from "react"
import { useState } from "react"
import { ArrowLeft } from "react-feather"
import { Link } from "react-router-dom"
import { Book, List, Settings } from "react-feather"
import NavigationButton from "./general/NavigationButton"

const SideBar: React.FC = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <div className={`bg-slate-100 h-screen p-3 ${open ? "w-72" : "w-20"}  relative`}>

            {/* Arrow icon */}
            <div 
                className="flex justify-center items-center bg-white p-1 h-[30px] text-black text-3xl rounded absolute -right-3 top-5 border-2 border-black cursor-pointer z-10"
                onClick={() => setOpen(!open)}>
                <ArrowLeft className={`${!open && "rotate-180"} duration-300`}/>
            </div>

            {/* Sidebar body */}
            <div className={`flex flex-col items-center`}>
                <Link to="/" className={`${!open && "scale-0"} text-2xl text-black font-bold mb-5`}>Marker</Link>
                <NavigationButton path="/book/create" text="Create a book" icon={Book} hiddenText={!open} expand/>
                <NavigationButton path="/books" text="My books" icon={List} hiddenText={!open} expand/>
                <NavigationButton path="/settings" text="Settings" icon={Settings} hiddenText={!open} expand/>
                <NavigationButton path="/settingswelcome" text="Welcome" icon={Settings} hiddenText={!open} expand/>
            </div>
        </div>
    )
}

export default SideBar
