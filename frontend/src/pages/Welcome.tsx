import React, { useEffect } from "react"
import { Book } from "react-feather"
import { useStore } from "../store/store"
import { SelectFolder } from "../../wailsjs/go/user/UserController"
import Button from "../components/general/Button"
import NavigationButton from "../components/general/NavigationButton"
import PageWrapper from "../components/PageWrapper"

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

  async function selectFolder() {
    const dir = await SelectFolder() // add try catch here
    console.log(dir)
    store.updateConfig({...store.config, folder: dir})
  }

  const welcomeText = 'Marker is an app that will help you write your awesome books'

  return (
    <PageWrapper className="bg-white text-black">
        <div className="text-black font-bold text-4xl mb-16">Welcome to Marker!</div>
        <div className="text-black text-3xl mb-20">{welcomeText}</div>
        <div className="text-black text-2xl mb-6">Select folder where you want to store your books 👇</div>
        <Button
          className="mb-20"
          onClick={async () => await selectFolder()}
        >
          Select folder
        </Button>
        <NavigationButton path="/book/create" text="Create a book" icon={Book}/>
    </PageWrapper>
  )
}

export default Welcome
