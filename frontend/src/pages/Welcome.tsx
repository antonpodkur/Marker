import React from "react"
import { Link } from "react-router-dom"
import SideBarItem from "../components/SideBarItem"
import { Book } from "react-feather"

const Welcome: React.FC = () => {
  return (
    <div className="flex w-full h-full flex-col items-center bg-white text-black">
        <div className="text-black font-bold text-4xl mt-12 mb-32">Welcome to Marker!</div>
        <SideBarItem path="book/create" text="Create a book" icon={Book}/>
    </div>
  )  
}

export default Welcome
