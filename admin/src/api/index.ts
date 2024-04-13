import { get, post } from '@/api/http'

//info/getDetails
export type TDetailsItem = {
	address: string
	created_at: number
	description: string
	email: string
	first_name: string
	id: string
	last_name: string
	phone: string
	updated_at: number
}

export const getDetails = () => get<TDetailsItem>('/info/getDetails')

// /info/addDetails
export const addDetails = (params) => post<TDetailsItem>('/info/addDetails', params)

// /info/updateDetails
export const updateDetails = (params) => post<TDetailsItem>('/info/updateDetails', params)

// /links/getLinks
export type TLinksItem = {
	created_at: number
	id: string
	link: string
	updated_at: number
	type: string
}
export const getLinks = () => get<TLinksItem[]>('/links/getLinks')

// /links/addLinks
export const addLinks = params => post('/links/addLinks', params)

// /links/deleteLinks
export const updateLinks = params => post('/links/updateLinks', params)

// /links/deleteLinks
export const deleteLinks = params => post('/links/deleteLinks', params)
