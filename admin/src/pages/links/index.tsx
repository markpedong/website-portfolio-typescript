import { TLinksItem, addLinks, deleteLinks, getLinks, updateLinks } from '@/api'
import { INPUT_LINK, MODAL_FORM_PROPS, PRO_TABLE_PROPS } from '@/constants'
import { INPUT_TRIM, dateTimeFormatter } from '@/utils'
import { afterModalformFinish } from '@/utils/antd'
import {
	ActionType,
	ModalForm,
	ProColumns,
	ProFormSelect,
	ProFormText,
	ProTable
} from '@ant-design/pro-components'
import { Button, Popconfirm, Space, Typography } from 'antd'
import React, { useRef, useState } from 'react'
import {
	FaGithubAlt,
	FaInstagram,
	FaLinkedin,
	FaTwitter
} from 'react-icons/fa6'

const Links = () => {
	const actionRef = useRef<ActionType>()
	const [existingTypes, setExistingTypes] = useState<string[]>([])
	const columns: ProColumns<TLinksItem>[] = [
		{
			title: 'Link',
			dataIndex: 'link',
			align: 'center'
		},
		{
			title: 'Type',
			dataIndex: 'type',
			align: 'center'
		},
		{
			title: 'Updated',
			dataIndex: 'updated_at',
			align: 'center',
			render: (_, q) =>
				dateTimeFormatter(q?.updated_at, 'MM-DD-YYYY HH:MM:ss')
		},
		{
			title: 'Created',
			dataIndex: 'created-at',
			align: 'center',
			render: (_, q) =>
				dateTimeFormatter(q?.created_at, 'MM-DD-YYYY HH:MM:ss')
		},
		{
			title: 'Operator',
			render: (_, q) => {
				return (
					<Space>
						{renderAddEditLinks('EDIT', q)}
						{renderDeleteLink(q)}
					</Space>
				)
			}
		}
	]

	const renderDeleteLink = (q: TLinksItem) => {
		return (
			<Popconfirm
				title="Delete this Link?"
				onConfirm={async () => {
					const res = await deleteLinks({ id: q?.id })

					return afterModalformFinish(actionRef, res)
				}}
			>
				<Typography.Link type="danger">Delete</Typography.Link>
			</Popconfirm>
		)
	}

	const renderTitle = (icon: React.ReactNode, title: string) => (
		<Space align="center">
			{icon}
			<span>{title}</span>
		</Space>
	)

	const renderAddEditLinks = (type: 'EDIT' | 'ADD', q?: TLinksItem) => {
		const isEdit = type === 'EDIT'
		return (
			<ModalForm
				{...MODAL_FORM_PROPS}
				labelCol={{ flex: '80px' }}
				title="Add Link"
				initialValues={isEdit ? q : {}}
				trigger={
					isEdit ? (
						<Typography.Link type="warning">Edit</Typography.Link>
					) : (
						<Button type="primary" disabled={existingTypes?.length === 4}>Add Link</Button>
					)
				}
				onFinish={async params => {
					let res

					if (isEdit) {
						res = await updateLinks({
							new_link: params.link,
							id: q?.id
						})
					} else {
						res = await addLinks(params)
					}

					return afterModalformFinish(actionRef, res)
				}}
			>
				<ProFormText
					{...INPUT_TRIM}
					label="Link"
					name="link"
					rules={[INPUT_LINK, { required: true }]}
				/>
				<ProFormSelect
					label="Type"
					name="type"
					rules={[{ required: true }]}
					disabled={existingTypes?.includes(q?.type!)}
					fieldProps={{
						options: [
							{
								label: renderTitle(<FaGithubAlt />, 'Github'),
								value: 'github'
							},
							{
								label: renderTitle(<FaLinkedin />, 'Linkedin'),
								value: 'linkedin'
							},
							{
								label: renderTitle(
									<FaInstagram />,
									'Instagram'
								),
								value: 'instagram'
							},
							{
								label: renderTitle(<FaTwitter />, 'Twitter'),
								value: 'twitter'
							}
						].map(item => ({
							...item,
							disabled: existingTypes.includes(item.value)
						}))
					}}
				/>
			</ModalForm>
		)
	}

	const fetchData = async () => {
		const res = await getLinks()

		setExistingTypes(res?.data.data?.map(q => q?.type))
		return {
			data: res?.data?.data ?? []
		}
	}

	return (
		<div>
			<Typography.Title level={5}>
				Update the links that we are providing on the website
			</Typography.Title>
			<ProTable
				{...PRO_TABLE_PROPS}
				columns={columns}
				actionRef={actionRef}
				search={false}
				rowKey="id"
				request={fetchData}
				toolBarRender={() => [renderAddEditLinks('ADD')]}
				scroll={{
					x: 500
				}}
			/>
		</div>
	)
}

export default Links
