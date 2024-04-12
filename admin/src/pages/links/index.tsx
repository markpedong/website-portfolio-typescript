import { TLinksItem, addLinks, getLinks } from '@/api'
import { INPUT_LINK, MODAL_FORM_PROPS, PRO_TABLE_PROPS } from '@/constants'
import { ignoreFindDOMNodeError } from '@/utils'
import { afterModalformFinish } from '@/utils/antd'
import { ActionType, ModalForm, ProColumns, ProFormText, ProTable } from '@ant-design/pro-components'
import { Button, Typography } from 'antd'
import { useRef } from 'react'

ignoreFindDOMNodeError()

const Links = () => {
	const actionRef = useRef<ActionType>()
	const columns: ProColumns<TLinksItem>[] = [
		{
			title: 'Link',
			dataIndex: 'link'
		},
		{
			title: 'Updated',
			dataIndex: 'updated_at'
		},
		{
			title: 'Operator'
		}
	]

	const handleAddLink = async params => {
		const res = await addLinks(params)

		return afterModalformFinish(actionRef, res)
	}

	const renderAddLinks = () => {
		return (
			<ModalForm
				{...MODAL_FORM_PROPS}
				labelCol={{ flex: '80px' }}
				title="Add Link"
				trigger={<Button type="primary">Add Link</Button>}
				onFinish={handleAddLink}
			>
				<ProFormText label="Link" name="link" rules={[INPUT_LINK, { required: true }]} />
			</ModalForm>
		)
	}

	const fetchData = async () => {
		const res = await getLinks()

		return {
			data: res?.data?.data ?? []
		}
	}

	return (
		<div>
			<Typography.Title level={5}>Update the links that we are providing on the website</Typography.Title>
			<ProTable
				{...PRO_TABLE_PROPS}
				columns={columns}
				actionRef={actionRef}
				rowKey="id"
				request={fetchData}
				toolBarRender={() => [renderAddLinks()]}
				scroll={{
					x: 800
				}}
			/>
		</div>
	)
}

export default Links
