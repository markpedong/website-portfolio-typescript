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

// /links/getLinks
export const getLinks = () => get('/links/getLinks')
