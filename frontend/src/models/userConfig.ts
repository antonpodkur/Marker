export interface UserConfig {
	firstLaunch: boolean,
	folder: string
}

export const emptyConfig: UserConfig = {
	firstLaunch: true,
	folder: ""
} 
