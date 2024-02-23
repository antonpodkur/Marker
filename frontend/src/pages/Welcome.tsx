import React, { useEffect } from "react"
import { Book } from "react-feather"
import { useStore } from "../store/store"
import { SelectFolder } from "../../wailsjs/go/user/UserController"
import { Button, buttonVariants } from "@/components/ui/button"
import NavigationButton from "../components/general/NavigationButton"
import PageWrapper from "../components/PageWrapper"
import SettingsItem from "@/components/settings/SettingsItem"
import { Link } from "react-router-dom"

const Welcome: React.FC = () => {
  const store = useStore()

  useEffect(() => {
    const firstLaunch = store.config.firstLaunch
    console.log(store.config.firstLaunch)
    if (firstLaunch) {
      store.updateConfig({ ...store.config, firstLaunch: false })
    }
    console.log(store.config.firstLaunch)
  }, [])

  async function selectFolder() {
    const dir = await SelectFolder() // add try catch here
    console.log(dir)
    store.updateConfig({ ...store.config, folder: dir })
  }

  const welcomeText = 'Marker is an app that will help you write your awesome books'

  return (
    <PageWrapper className="bg-white text-black">
      <div className="text-black font-bold text-4xl mb-16">Welcome to Marker!</div>
      <div className="text-black text-3xl mb-20">{welcomeText}</div>
      <div className="w-full">
        <div className="text-2xl ml-4 mb-4">Initial setup</div>
        <SettingsItem title="Folder to store books">
          <Button
            variant={"outline"}
            className="py-1 px-2 w-fit text-sm"
            onClick={async () => await selectFolder()}>
            {store.config?.folder !== "" ? store.config?.folder : "Not selected"}
          </Button>
        </SettingsItem>
      </div>
      <Link to="/book/create" className={buttonVariants({ variant: "default" })}>Continue</Link>
    </PageWrapper>
  )
}

export default Welcome
