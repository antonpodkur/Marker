import { useEffect } from "react";
import { SelectFolder } from "../../wailsjs/go/user/UserController";
import Button from "../components/general/Button";
import PageWrapper from "../components/PageWrapper";
import SettingsItem from "../components/settings/SettingsItem";
import { useStore } from "../store/store";

const Settings = () => {
    const store = useStore()

    useEffect(() => {
        console.log(store.config);
    }, [])

    async function selectFolder() {
        const dir = await SelectFolder() // add try catch here
        if (dir === "") {
            return
        }
        store.updateConfig({ ...store.config, folder: dir })
    }

    return (
        <PageWrapper className="bg-white text-black relative">
            <div className="text-3xl font-bold">Settings</div>
            <div className="flex flex-col w-full mt-12 ml-6">
                <SettingsItem title="Folder to store books">
                    <Button
                        className="py-1 px-2 w-fit text-sm"
                        onClick={async () => await selectFolder()}>
                        {store.config?.folder !== "" ? store.config?.folder : "Not selected"}
                    </Button>
                </SettingsItem>
            </div>
        </PageWrapper>
    );
}

export default Settings
