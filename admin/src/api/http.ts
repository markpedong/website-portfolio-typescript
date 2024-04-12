import axios, { AxiosInstance } from 'axios'
import { stringify } from 'qs'

export type ApiResponse<T = null> = {
	data: T & {
		message: string
		status: number
		success: boolean
	}
}

const instance: AxiosInstance = axios.create({ timeout: 60000 })

const post = <T>(url: string, data = {}): Promise<ApiResponse<T>> =>
	instance.post(url, data, {
		headers: {
			'Content-Type': 'application/json'
		}
	})

const get = <T>(url: string, data = {}): Promise<ApiResponse<{ data: T }>> =>
	instance.get(`${url}${stringify(data) ? '?' + stringify(data) : ''}`)

export { post, get }
