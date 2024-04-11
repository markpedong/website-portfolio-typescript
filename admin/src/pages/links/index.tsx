import { getLinks } from '@/api'
import { PRO_TABLE_PROPS } from '@/constants'
import { ActionType, ProTable } from '@ant-design/pro-components'
import { Typography } from 'antd'
import { useRef } from 'react'

const Links = () => {
	const actionRef = useRef<ActionType>()

	const fetchData = async params => {
		const res = await getLinks()

		console.log(res?.data.data)

		return {}
	}

	return (
		<div>
			<Typography.Title level={5}>Update the links that we are providing on the website</Typography.Title>
			<ProTable {...PRO_TABLE_PROPS} actionRef={actionRef} request={fetchData} />
		</div>
	)
}

export default Links
