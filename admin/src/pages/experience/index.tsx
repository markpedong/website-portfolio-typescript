import { TExperienceItem, addExperiences, deleteExperiences, getExperiences, updateExperiences } from '@/api'
import { MODAL_FORM_PROPS, PRO_TABLE_PROPS } from '@/constants'
import { INPUT_TRIM, dateTimeFormatter } from '@/utils'
import { afterModalformFinish } from '@/utils/antd'
import {
	ActionType,
	ModalForm,
	ProColumns,
	ProForm,
	ProFormDatePicker,
	ProFormList,
	ProFormSlider,
	ProFormText,
	ProTable
} from '@ant-design/pro-components'
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
			render: (_, record) => (
				<Space direction="vertical" align="center">
					{record?.skills?.map(q => (
						<Tag key={q?.id}>
							{q?.name}-{q?.percentage}
						</Tag>
					))}
				</Space>
			)
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
					{renderAddEditExperience('EDIT', record)}
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
				title={isEdit ? 'Edit Experience' : 'Add Experience'}
				trigger={isEdit ? <Typography.Link>Edit</Typography.Link> : <Button type="primary">ADD</Button>}
				grid
				layout="inline"
				rowProps={{
					gutter: [0, 25]
				}}
				onFinish={async params => {
					let res

					if (isEdit) {
						res = await updateExperiences({ ...params, id: record?.id })
					} else {
						res = await addExperiences(params)
					}

					return afterModalformFinish(actionRef, res)
				}}
			>
				<ProFormText label="Title" name="title" rules={[{ required: true }]} />
				<ProFormText label="Company" name="company" rules={[{ required: true }]} />
				<ProFormText label="Location" name="location" rules={[{ required: true }]} />
				<ProFormDatePicker
					colProps={{ span: 12 }}
					label="Started"
					name="started"
					rules={[{ required: true }]}
					width={250}
				/>
				<ProFormDatePicker
					colProps={{ span: 12 }}
					label="Ended"
					name="ended"
					rules={[{ required: true }]}
					width={250}
				/>
				<ProFormList
					name="skills"
					label="Tech Stack"
					creatorButtonProps={{
						position: 'bottom',
						creatorButtonText: 'Add Skill'
					}}
					copyIconProps={false}
					max={5}
					alwaysShowItemLabel
				>
					<ProForm.Group style={{ marginBottom: '1rem' }}>
						<ProFormText
							{...INPUT_TRIM}
							name="name"
							label="Technology"
							colProps={{ span: 12 }}
							labelCol={{ flex: '120px' }}
							rules={[{ required: true }]}
						/>
						<ProFormSlider
							name="percentage"
							label="Percentage"
							colProps={{ span: 12 }}
							labelCol={{ flex: '120px' }}
							rules={[{ required: true }]}
						/>
					</ProForm.Group>
				</ProFormList>
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
