import { message } from 'antd'
import axios, { AxiosInstance } from 'axios'
import { throttle } from 'lodash'
import { stringify } from 'qs'

export type ApiResponse<T = null> = {
	data: T & {
		message: string
		status: number
		success: boolean
	}
}

const throttleAlert = (msg: string) => throttle(message.error(msg), 1500, { trailing: false })

const instance: AxiosInstance = axios.create({ timeout: 60000 })

instance.interceptors.response.use(response => {
	if (!response?.data.success) {
		throttleAlert(response?.data.message)
	}

	return response
})

instance.interceptors.request.use(
	config => {
		console.log("REQUEST", config)
		return config
	},
	error => {
		console.log('Request Error:', error)
		return Promise.reject(error)
	}
)

const upload = async <T>(url: string, data): Promise<ApiResponse<{ data: T }>> => {
	// const token = getLocalStorage('token')
	const form = new FormData()

	form.append('file', data)

	//prettier-ignore
	const response = await instance.post(url, form, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})

	return response
}

const post = async <T>(url: string, data = {}): Promise<ApiResponse<T>> =>
	instance.post(url, data, {
		headers: {
			'Content-Type': 'application/json'
		}
	})

const get = async <T>(url: string, data = {}): Promise<ApiResponse<{ data: T }>> =>
	instance.get(`${url}${stringify(data) ? '?' + stringify(data) : ''}`)

export { post, get, upload }
