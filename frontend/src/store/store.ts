import { create } from "zustand"
import { emptyConfig, UserConfig } from "../models/userConfig"
import { UpdateUserConfig } from "../../wailsjs/go/user/UserController"
import { Book } from "../models/book"

type State = {
	firstLaunch: boolean,
	config: UserConfig
	currentBook: Book | null
} 

type Actions = {
	setFirstLaunch: (firstLaunch: boolean) => void,
	updateConfig: (config: UserConfig) => void,
	setCurrentBook: (book: Book | null) => void
}

export const useStore = create<State & Actions>((set) => ({
	firstLaunch: false,
	config: emptyConfig,
	currentBook: null,
	setFirstLaunch: (firstLaunch) => set(() => ({firstLaunch})),
	updateConfig: (config) => set(() => {
		Promise.all([UpdateUserConfig(config)]) 		
		return	{config: config}
	}),
	setCurrentBook: (book) => set(() => ({currentBook: book})),
}))

