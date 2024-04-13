import { useAppSelector } from '@/redux/store'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { ConfigProvider, message, theme } from 'antd'
import React, { MutableRefObject } from 'react'
import enUS from 'antd/locale/en_US'
import { ActionType, ProFormInstance } from '@ant-design/pro-components'
import { ApiResponse } from '@/api/http'

export const afterModalformFinish = (
	actionRef?: MutableRefObject<ActionType | undefined>,
	res?: ApiResponse<any>,
	formRef?: MutableRefObject<ProFormInstance | undefined>
) => {
	if (actionRef) {
		actionRef?.current?.reload()
	}

	if (formRef) {
		formRef?.current?.setFieldsValue(res?.data.data)
	}

	if (res?.data?.success) {
		message.success(res?.data?.message)
	} else {
		message.error(res?.data?.message)
	}

	return !!res?.data?.success
}

export const renderPercentage = percentage => {
	const per = percentage?.toFixed(2)

	return (
		<span
			style={{
				color: per > 0.0 ? '#16c784' : '#ea3943'
			}}
		>
			{per > 0.0 ? <CaretUpOutlined /> : per < 0.0 ? <CaretDownOutlined /> : !per && ''} {per?.replace('-', '')}
		</span>
	)
}

export const AntdConfigProvider = ({ children }: { children: React.ReactNode }) => {
	const { darkMode } = useAppSelector(s => s.boolean)

	return (
		<ConfigProvider
			locale={enUS}
			theme={{
				algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token: { colorPrimary: 'red', fontFamily: 'Poppins' }
			}}
		>
			{children}
		</ConfigProvider>
	)
}
