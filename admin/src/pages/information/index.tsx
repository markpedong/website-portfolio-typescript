import { TDetailsItem, addDetails, getDetails, updateDetails } from '@/api'
import { FORM_PROPS, INPUT_EMAIL } from '@/constants'
import { INPUT_TRIM } from '@/utils'
import { afterModalformFinish } from '@/utils/antd'
import { ProForm, ProFormInstance, ProFormText, ProFormTextArea } from '@ant-design/pro-components'
import { Typography } from 'antd'
import { useEffect, useRef, useState } from 'react'

const Information = () => {
	const formRef = useRef<ProFormInstance>()
	const [init, setInit] = useState<TDetailsItem>()

	const fetchData = async () => {
		const res = await getDetails()

		formRef.current?.setFieldsValue(res?.data?.data ?? {})
		setInit(res?.data?.data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div>
			<Typography.Title level={5}>Update the main details of the website: </Typography.Title>
			<ProForm
				{...FORM_PROPS}
				labelCol={{ flex: '100px' }}
				formRef={formRef}
				grid
				onFinish={async params => {
					let res

					if (!!!init?.id) {
						res = await addDetails(params)
					} else {
						res = await updateDetails({ ...params, id: init?.id })
					}

					fetchData()
					return afterModalformFinish(undefined, res, formRef)
				}}
			>
				<ProFormText
					{...INPUT_TRIM}
					rules={[{ required: true }]}
					label="First Name"
					name="first_name"
					colProps={{ span: 12 }}
				/>
				<ProFormText
					{...INPUT_TRIM}
					rules={[{ required: true }]}
					label="Last Name"
					name="last_name"
					colProps={{ span: 12 }}
				/>
				<ProFormText
					{...INPUT_TRIM}
					rules={[{ required: true }]}
					label="Phone"
					name="phone"
					colProps={{ span: 12 }}
				/>
				<ProFormText
					{...INPUT_TRIM}
					rules={[INPUT_EMAIL, { required: true }]}
					label="Email"
					name="email"
					colProps={{ span: 12 }}
				/>
				<ProFormTextArea rules={[{ required: true }]} label="Address" name="address" />
				<ProFormTextArea rules={[{ required: true }]} label="Description" name="description" />
			</ProForm>
		</div>
	)
}

export default Information
