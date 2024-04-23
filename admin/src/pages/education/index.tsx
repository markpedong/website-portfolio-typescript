import {
	TEducationsItem,
	addEducations,
	deleteEducations,
	getEducations,
	toggleEducationStatus,
	updateEducations
} from '@/api'
import { GLOBAL_STATUS } from '@/api/constants'
import { MODAL_FORM_PROPS, PRO_TABLE_PROPS } from '@/constants'
import { capFrstLtr, randomColorGenerator } from '@/constants/helper'
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
	ProFormTextArea,
	ProTable
} from '@ant-design/pro-components'
import { Button, Popconfirm, Space, Switch, Tag, Typography } from 'antd'
import { useRef } from 'react'

const Education = () => {
	const actionRef = useRef<ActionType>()
	const columns: ProColumns<TEducationsItem>[] = [
		{
			title: 'School',
			align: 'center',
			dataIndex: 'school'
		},
		{
			title: 'Course',
			align: 'center',
			dataIndex: 'course'
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
			title: 'Description',
			align: 'center',
			dataIndex: 'description'
		},
		{
			title: 'Skills',
			align: 'center',
			render: (_, record) => (
				<Space direction="vertical" align="center">
					{record?.skills?.map(q => (
						<Tag key={q?.id} color={`#${randomColorGenerator()}`}>
							{capFrstLtr(q?.name)} - {q?.percentage}%
						</Tag>
					))}
				</Space>
			)
		},
		{
			title: 'Updated',
			align: 'center',
			render: (_, record) => dateTimeFormatter(record?.updated_at, 'MM-DD-YYYY HH:MM:ss')
		},
		{
			title: 'Created',
			align: 'center',
			render: (_, record) => dateTimeFormatter(record?.created_at, 'MM-DD-YYYY HH:MM:ss')
		},
		{
			title: 'Operator',
			align: 'center',
			render: (_, record) => (
				<Space>
					{renderSwitch(record)}
					{renderAddEditEducation('EDIT', record)}
					{renderDeleteEducation(record)}
				</Space>
			)
		}
	]

	const renderSwitch = (record: TEducationsItem) => {
		return (
			<Switch
				unCheckedChildren="OFF"
				checkedChildren="ON"
				checked={record?.status === GLOBAL_STATUS.ON}
				onChange={async () => {
					const res = await toggleEducationStatus({ id: record?.id })

					return afterModalformFinish(actionRef, res)
				}}
			/>
		)
	}

	const renderAddEditEducation = (type: 'ADD' | 'EDIT', record?: TEducationsItem) => {
		const isEdit = type === 'EDIT'
		return (
			<ModalForm
				{...MODAL_FORM_PROPS}
				initialValues={isEdit ? record : {}}
				title={isEdit ? 'Edit Education' : 'Add Education'}
				trigger={isEdit ? <Typography.Link>Edit</Typography.Link> : <Button type="primary">ADD</Button>}
				grid
				layout="inline"
				rowProps={{
					gutter: [0, 25]
				}}
				onFinish={async params => {
					let res

					if (isEdit) {
						res = await updateEducations({ ...params, id: record?.id })
					} else {
						res = await addEducations(params)
					}

					return afterModalformFinish(actionRef, res)
				}}
			>
				<ProFormText label="School" name="school" rules={[{ required: true }]} />
				<ProFormText label="Course" name="course" rules={[{ required: true }]} />
				<ProFormTextArea label="Description" name="description" rules={[{ required: true }]} />
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
					label="Skill Stack"
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
							label="Skill"
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
	const renderDeleteEducation = (record: TEducationsItem) => {
		return (
			<Popconfirm
				title="Delete this Education?"
				onConfirm={async () => {
					const res = await deleteEducations({ id: record?.id })

					return afterModalformFinish(actionRef, res)
				}}
			>
				<Typography.Link type="danger">Delete</Typography.Link>
			</Popconfirm>
		)
	}

	const fetchData = async () => {
		const res = await getEducations()

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
				toolBarRender={() => [renderAddEditEducation('ADD')]}
				scroll={{ x: 950 }}
			/>
		</div>
	)
}

export default Education
