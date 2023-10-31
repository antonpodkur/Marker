import React from "react"
import { Book } from "react-feather"
import NavigationButton from "../components/general/NavigationButton"
import PageWrapper from "../components/PageWrapper"

const Home: React.FC = () => {
  return (
    <PageWrapper className="bg-white text-black">
        <div className="text-black font-bold text-4xl mb-32">Welcome to Marker!</div>
        <NavigationButton path="book/create" text="Create a book" icon={Book}/>
    </PageWrapper>
  )  
}

export default Home 
