import { create } from "zustand"
import { emptyConfig, UserConfig } from "../models/userConfig"
import { UpdateUserConfig } from "../../wailsjs/go/user/UserController"
import { Book } from "../models/book"

type State = {
	firstLaunch: boolean,
	config: UserConfig
	currentBook: Book | null
	books: Book[]
} 

type Actions = {
	setFirstLaunch: (firstLaunch: boolean) => void,
	updateConfig: (config: UserConfig) => void,
	setCurrentBook: (book: Book | null) => void,
	setBooks: (books: Book[]) => void,
	removeBook: (bookId: Number) => void,
}

export const useStore = create<State & Actions>((set) => ({
	firstLaunch: false,
	config: emptyConfig,
	currentBook: null,
	books: [],
	setFirstLaunch: (firstLaunch) => set(() => ({firstLaunch})),
	updateConfig: (config) => set(() => {
		Promise.all([UpdateUserConfig(config)]) 		
		return	{config: config}
	}),
	setCurrentBook: (book) => set(() => ({currentBook: book})),
	setBooks: (books) => set(() => ({books})),
	removeBook: (bookId) => set((state) => ({books: state.books.filter(book => Number(book.id) !== bookId)})),
}))

