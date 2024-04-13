import { get, post, upload } from '@/api/http'
import type { GetProp, UploadProps } from 'antd'
import { GLOBAL_STATUS } from './constants'

// /info/addWebsiteDetails
export type TWebsiteItem = {
	id: string
	status: number
}
export const addWebsiteDetails = params => post('/info/addWebsiteDetails', params)

// /info/getWebsiteDetails
export const getWebsiteDetails = () => get<TWebsiteItem>('/info/getWebsiteDetails')

// /info/updateWebsiteDetails
export const updateWebsiteDetails = params => post('/info/updateWebsiteDetails', params)

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
export const addDetails = params => post<TDetailsItem>('/info/addDetails', params)

// /info/updateDetails
export const updateDetails = params => post<TDetailsItem>('/info/updateDetails', params)

// /links/getLinks
export type TLinksItem = {
	created_at: number
	id: string
	link: string
	updated_at: number
	type: string
	status: GLOBAL_STATUS
}
export const getLinks = () => get<TLinksItem[]>('/links/getLinks')

// /links/addLinks
export const addLinks = params => post('/links/addLinks', params)

// /links/deleteLinks
export const updateLinks = params => post('/links/updateLinks', params)

// /links/deleteLinks
export const deleteLinks = params => post('/links/deleteLinks', params)

// /links/updateLinkStatus
export const updateLinkStatus = params => post('/links/updateLinkStatus', params)

// /services/getServices
export type TServiceItem = {
	id: string
	title: string
	description: string
	logo: string
	created_at: number
	updated_at: number
}
export const getServices = () => get<TServiceItem[]>('/services/getServices')

// /services/updateServices
export const updateServices = params => post('/services/updateServices', params)

// /services/addServices
export const addServices = params => post('/services/addServices', params)

// /services/deleteServices
export const deleteServices = params => post('/services/deleteServices', params)

// /api/uploadImage
export type TUploadImage = {
	url: string
	fileName: string
	size: number
}

export type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

export const uploadImage = params => upload<TUploadImage>('/api/uploadImage', params)

// /portfolios/addPortfolios
export const addPortfolios = params => post('/portfolios/addPortfolios', params)

// /portfolios/editPortfolios
export const editPortfolios = params => post('/portfolios/editPortfolios', params)

// /portfolios/deletePortfolios
export const deletePortfolios = params => post('/portfolios/deletePortfolios', params)

// /portfolios/getPortfolios
export type TPortfolioItem = {
	id: string
	title: string
	tech: string[]
	link: string
	image: string
	created_at: number
	updated_at: number
}
export const getPortfolios = () => get<TPortfolioItem[]>('/portfolios/getPortfolios')

// /experiences/addExperiences
export const addExperiences = params => post('/experiences/addExperiences', params)

// /experiences/editExperiences
export const editExperiences = params => post('/experiences/editExperiences', params)

// /experiences/deleteExperiences
export const deleteExperiences = params => post('/experiences/deleteExperiences', params)

// /experiences/getExperiences
export type TExperienceItem = {
	id: string
	company: string
	title: string
	location: string
	started: string
	ended: string
	skills: string[]
	created_at: number
	updated_at: number
}
export const getExperiences = () => get<TPortfolioItem[]>('/experiences/getExperiences')
