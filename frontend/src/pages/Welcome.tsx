import React, { useEffect } from "react"
import SideBarItem from "../components/SideBarItem"
import { Book } from "react-feather"
import { useStore } from "../store/store"

const Welcome: React.FC = () => {
  const store = useStore() 

  useEffect(() => {
    const firstLaunch = store.config.firstLaunch
    console.log(store.config.firstLaunch)
    if (firstLaunch) {
      store.updateConfig({...store.config, firstLaunch: false})
    }
    console.log(store.config.firstLaunch)
  }, [])


  const welcomeText = 'Marker is an app that will help you write your awesome books'

  return (
    <div className="flex w-full h-full flex-col items-center bg-white text-black">
        <div className="text-black font-bold text-4xl mt-12 mb-16">Welcome to Marker!</div>
        <div className="text-black text-3xl mb-20">{welcomeText}</div>
        <SideBarItem path="book/create" text="Create a book" icon={Book}/>
    </div>
  )  
}

export default Welcome
