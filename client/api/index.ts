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

// /public/services
export type TServicesItem = {
	id: string
	logo: string
	title: string
	description: string
}

export const getServices = () => get<TServicesItem[]>('/public/services')

// /public/portfolios
export type TPortfolioItem = {
	id: string
	title: string
	tech: string[]
	link: string
	image: string
}

export const getPortfolios = () => get<TPortfolioItem[]>('/public/portfolios')

// /public/experiences
export type TSkillItem = {
	id: string
	name: string
	percentage: string
}

export type TDescriptionItem = {
	id: string
	description: string
}

export type TExperienceItem = {
	id: string
	company: string
	title: string
	location: string
	started: string
	ended: string
	skills: TSkillItem[]
	descripion: TDescriptionItem[]
}

export const getExperiences = () => get<TExperienceItem[]>('/public/experiences')

// /public/blogs
export type TBlogsItem = {
	id: string
	title: string
	date: string
	description: string
	link: string
	image: string
}

export const getBlogs = () => get<TBlogsItem[]>('/public/blogs')

// /public/testimonials
export type TTestimonialsItem = {
	id: string
	author: string
	description: string
	image: string
	job: string
}

export const getTestimonials = () => get<TTestimonialsItem[]>('/public/testimonials')

// /public/educations
export type TEducationItem = {
	id: string
	school: string
	course: string
	started: string
	ended: string
	description: string
	skills: TSkillItem[]
}

export const getEducations = () => get<TEducationItem[]>('/public/educations')
