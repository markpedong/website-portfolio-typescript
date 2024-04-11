import axios, { AxiosInstance, AxiosPromise } from 'axios'
import { stringify } from 'qs'

type ApiResponse<T = null> = {
	data: T
	message: string
	status: number
	success: boolean
}

const instance: AxiosInstance = axios.create({ timeout: 60000 })

const post = <T>(url: string, data = {}): AxiosPromise<ApiResponse<T>> =>
	instance.post(url, data, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})

const get = <T>(url: string, data = {}): AxiosPromise<ApiResponse<T>> =>
	instance.get(`${url}${stringify(data) ? '?' + stringify(data) : ''}`)

export { post, get }
