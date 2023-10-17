import { create } from "zustand"
import { emptyConfig, UserConfig } from "../models/userConfig"
import { UpdateUserConfig } from "../../wailsjs/go/user/UserController"

type State = {
	firstLaunch: boolean,
	config: UserConfig
} 

type Actions = {
	setFirstLaunch: (firstLaunch: boolean) => void,
	updateConfig: (config: UserConfig) => void
}

export const useStore = create<State & Actions>((set) => ({
	firstLaunch: false,
	config: emptyConfig,
	setFirstLaunch: (firstLaunch) => set(() => ({firstLaunch})),
	updateConfig: (config) => set(() => {
		Promise.all([UpdateUserConfig(config)]) 		
		return	{config: config}
	}),
}))

