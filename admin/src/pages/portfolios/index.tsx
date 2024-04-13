import { TPortfolioItem, deletePortfolios, getPortfolios } from '@/api'
import { MODAL_FORM_PROPS, PRO_TABLE_PROPS } from '@/constants'
import { BeforeUpload, afterModalformFinish } from '@/utils/antd'
import {
	ActionType,
	ModalForm,
	ProColumns,
	ProFormSelect,
	ProFormText,
	ProFormUploadButton,
	ProTable
} from '@ant-design/pro-components'
import { Button, Image, Popconfirm, Space, Tag, Typography } from 'antd'
import { useRef, useState } from 'react'

const Portfolio = () => {
	const [imgUrl, setImgUrl] = useState('')
	const actionRef = useRef<ActionType>()
	const columns: ProColumns<TPortfolioItem>[] = [
        {
			title: 'Image',
			align: 'center',
			search: false,
			render: (_, record) => <Image src={record?.image} alt="logo" width={60} height={60} />
		},
		{
			title: 'Title',
			align: 'center',
			dataIndex: 'title'
		},
		{
			title: 'Tech',
			align: 'center',
			render: (_, record) => record?.tech?.map(q => <Tag>{q}</Tag>)
		},
		{
			title: 'Link',
			align: 'center',
			dataIndex: 'link'
		},
		{
			title: 'Operator',
			align: 'center',
			render: (_, record) => {
				return (
					<Space>
						{renderAddEditPortfolio('EDIT')}
						{renderDeletePortfolio(record)}
					</Space>
				)
			}
		}
	]

	const renderAddEditPortfolio = (type: 'ADD' | 'EDIT', record?: TPortfolioItem) => {
		const isEdit = type === 'EDIT'
		return (
			<ModalForm
				{...MODAL_FORM_PROPS}
				title={isEdit ? 'Edit Portfolio' : 'Add Portfolio'}
				trigger={isEdit ? <Typography.Link>Edit</Typography.Link> : <Button type="primary">Add</Button>}
				initialValues={isEdit ? record : {}}
				labelCol={{ flex: '110px' }}
			>
				<ProFormText label="Title" name="title" rules={[{ required: true }]} />
				<ProFormText label="Description" name="description" rules={[{ required: true }]} />
				<ProFormSelect
					label="Tech Stack"
					name="tech_stack"
					fieldProps={{ mode: 'tags', maxCount: 5 }}
					rules={[{ required: true }]}
				/>
				<ProFormUploadButton
					label="Image"
					name="image"
					rules={[{ required: true }]}
					fieldProps={{
						accept: 'image/*',
						listType: 'picture-card',
						fileList: imgUrl ? [{ uid: '-1', name: 'image.png', status: 'done', url: imgUrl }] : [],
						beforeUpload: BeforeUpload,
						multiple: false,
						maxCount: 1,
						action: '/api/uploadImage',
						onChange: async e => {
							setImgUrl(e?.file?.response?.data?.url)
						}
					}}
				/>
			</ModalForm>
		)
	}

	const renderDeletePortfolio = (record: TPortfolioItem) => {
		return (
			<Popconfirm
				title="Delete this Portfolio?"
				onConfirm={async () => {
					const res = await deletePortfolios({ id: record?.id })

					return afterModalformFinish(actionRef, res)
				}}
			>
				<Typography.Link type="danger">Delete</Typography.Link>
			</Popconfirm>
		)
	}

	const fetchData = async () => {
		const res = await getPortfolios()

		return {
			data: res?.data.data
		}
	}

	return (
		<div>
			<ProTable
				{...PRO_TABLE_PROPS}
				columns={columns}
				request={fetchData}
				toolBarRender={() => [renderAddEditPortfolio('ADD')]}
			/>
		</div>
	)
}

export default Portfolio
