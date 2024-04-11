import { getDetails } from '@/api'
import { FORM_PROPS } from '@/constants'
import { ProForm, ProFormInstance, ProFormText, ProFormTextArea } from '@ant-design/pro-components'
import { Typography } from 'antd'
import { useEffect, useRef } from 'react'

const Information = () => {
	const formRef = useRef<ProFormInstance>()

	const fetchData = async () => {
		const res = await getDetails()

		formRef.current?.setFieldsValue(res?.data?.data ?? {})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div>
			<Typography.Title level={5}>Update the main details of the website: </Typography.Title>
			<ProForm {...FORM_PROPS} labelCol={{ flex: '90px' }} formRef={formRef} grid>
				<ProFormText
					rules={[{ required: true }]}
					label="First Name"
					name="first_name"
					colProps={{ span: 12 }}
				/>
				<ProFormText rules={[{ required: true }]} label="Last Name" name="last_name" colProps={{ span: 12 }} />
				<ProFormText rules={[{ required: true }]} label="Phone" name="phone" colProps={{ span: 12 }} />
				<ProFormText rules={[{ required: true }]} label="Email" name="email" colProps={{ span: 12 }} />
				<ProFormTextArea rules={[{ required: true }]} label="Address" name="address" />
				<ProFormTextArea rules={[{ required: true }]} label="Description" name="description" />
			</ProForm>
		</div>
	)
}

export default Information
