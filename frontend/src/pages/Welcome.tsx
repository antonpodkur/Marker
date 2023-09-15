import React from "react"
import { Link } from "react-router-dom"

const Welcome: React.FC = () => {
  return (
    <div className="flex w-full h-full flex-col items-center bg-white text-black">
        <div className="text-black font-bold text-4xl mt-12 mb-32">Welcome to Marker!</div>
        <Link to="book/create" className="py-2 px-4 border border-black rounded">Create a book</Link>
    </div>
  )  
}

export default Welcome
