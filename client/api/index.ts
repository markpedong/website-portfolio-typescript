import { get, post, upload } from './http'

// /public/website
export type WebsiteDetails = {
	id: string
	status: number
}
export const getWebsiteDetails = () => get<WebsiteDetails>('/public/website')

// /public/details
export type TDetailsItem = {
	address: string
	created_at: number
	description: string
	email: string
	first_name: string
	id: string
	last_name: string
	phone: string
}

export const getDetails = () => get<TDetailsItem>('/public/details')

// /public/getLinks
export enum SocialMedia {
	Twitter = 'twitter',
	Instagram = 'instagram',
	LinkedIn = 'linkedin',
	GitHub = 'github'
}

export type TLinksItem = {
	id: string
	link: string
	type: SocialMedia
}

export const getLinks = () => get<TLinksItem[]>('/public/links')

// public/services
export type TServicesItem = {
	id: string
	logo: string
	title: string
	description: string
}

export const getServices = () => get<TServicesItem[]>('/public/services')
