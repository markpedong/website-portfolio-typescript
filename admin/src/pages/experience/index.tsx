import { TExperienceItem, deleteExperiences, getExperiences } from '@/api'
import { MODAL_FORM_PROPS, PRO_TABLE_PROPS } from '@/constants'
import { dateTimeFormatter } from '@/utils'
import { afterModalformFinish } from '@/utils/antd'
import { ActionType, ModalForm, ProColumns, ProFormText, ProTable } from '@ant-design/pro-components'
import { Button, Popconfirm, Space, Tag, Typography } from 'antd'
import { useRef } from 'react'

const Experience = () => {
	const actionRef = useRef<ActionType>()
	const columns: ProColumns<TExperienceItem>[] = [
		{
			title: 'Title',
			align: 'center',
			dataIndex: 'title'
		},
		{
			title: 'Company',
			align: 'center',
			dataIndex: 'company'
		},
		{
			title: 'Location',
			align: 'center',
			dataIndex: 'location'
		},
		{
			title: 'Started',
			align: 'center',
			dataIndex: 'started'
		},
		{
			title: 'Ended',
			align: 'center',
			dataIndex: 'ended'
		},
		{
			title: 'Tech Stack',
			align: 'center',
			render: (_, record) => record?.skills?.map(q => <Tag>{q}</Tag>)
		},
		{
			title: 'Updated',
			dataIndex: 'updated_at',
			align: 'center',
			render: (_, record) => dateTimeFormatter(record?.updated_at, 'MM-DD-YYYY HH:MM:ss')
		},
		{
			title: 'Created',
			dataIndex: 'created-at',
			align: 'center',
			render: (_, record) => dateTimeFormatter(record?.created_at, 'MM-DD-YYYY HH:MM:ss')
		},
		{
			title: 'Operator',
			align: 'center',
			render: (_, record) => (
				<Space>
					{renderAddEditExperience('ADD')}
					{renderDeleteExperience(record)}
				</Space>
			)
		}
	]

	const renderAddEditExperience = (type: 'ADD' | 'EDIT', record?: TExperienceItem) => {
		const isEdit = type === 'EDIT'
		return (
			<ModalForm
				{...MODAL_FORM_PROPS}
				initialValues={isEdit ? record : {}}
				trigger={isEdit ? <Typography.Link>Edit</Typography.Link> : <Button type="primary">ADD</Button>}
			>
				<ProFormText label="Company" name="company" rules={[{ required: true }]} />
			</ModalForm>
		)
	}
	const renderDeleteExperience = (record: TExperienceItem) => {
		return (
			<Popconfirm
				title="Delete this Portfolio?"
				onConfirm={async () => {
					const res = await deleteExperiences({ id: record?.id })

					return afterModalformFinish(actionRef, res)
				}}
			>
				<Typography.Link type="danger">Delete</Typography.Link>
			</Popconfirm>
		)
	}

	const fetchData = async () => {
		const res = await getExperiences()

		return {
			data: res?.data.data
		}
	}

	return (
		<div>
			<ProTable
				{...PRO_TABLE_PROPS}
				rowKey="id"
				columns={columns}
				actionRef={actionRef}
				request={fetchData}
				toolBarRender={() => [renderAddEditExperience('ADD')]}
				scroll={{ x: 650 }}
			/>
		</div>
	)
}

export default Experience
