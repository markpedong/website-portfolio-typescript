import { get, post, upload } from './http'

// /public/getLinks
export type TLinksItem = {
	created_at: number
	id: string
	link: string
	updated_at: number
	type: string
}

export const getLinks = () => get<TLinksItem[]>('/public/links')
