import './App.css';
import SideBar from './components/SideBar';
import Content from './components/Content';
import { useEffect, useState } from 'react';
import { useStore } from './store/store';
import { GetUserConfig } from "../wailsjs/go/user/UserController"
import { UserConfig } from './models/userConfig';

function App() {
    const setUserConfig = useStore(store => store.updateConfig)
    const setFirstLaunch = useStore(store => store.setFirstLaunch)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUserConfig = async (): Promise<void> => {
            const config = (await GetUserConfig()) as UserConfig
            console.log(config)
            setUserConfig(config)
            setFirstLaunch(config.firstLaunch)
            setIsLoading(false)
        }

        fetchUserConfig() 
    }, [])
    
    return (
        <div className='flex'>
            <SideBar/>
            {isLoading 
                ? <div>Loading</div>
                : <Content/>
            }
        </div>
    )
}

export default App
