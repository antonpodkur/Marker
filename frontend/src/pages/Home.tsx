import React from "react"
import { Book } from "react-feather"
import NavigationButton from "../components/general/NavigationButton"

const Home: React.FC = () => {
  return (
    <div className="flex w-full h-full flex-col items-center bg-white text-black">
        <div className="text-black font-bold text-4xl mt-12 mb-32">Welcome to Marker!</div>
        <NavigationButton path="book/create" text="Create a book" icon={Book}/>
    </div>
  )  
}

export default Home 
