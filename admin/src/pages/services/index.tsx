import { FileType, TServiceItem, addServices, deleteServices, getServices, updateServices } from '@/api'
import { MODAL_FORM_PROPS, PRO_TABLE_PROPS } from '@/constants'
import { INPUT_TRIM, dateTimeFormatter } from '@/utils'
import { BeforeUpload, afterModalformFinish } from '@/utils/antd'
import {
	ActionType,
	ModalForm,
	ProColumns,
	ProFormText,
	ProFormTextArea,
	ProFormUploadButton,
	ProTable
} from '@ant-design/pro-components'
import { Button, Image, Popconfirm, Space, Typography, message } from 'antd'
import { useRef, useState } from 'react'

const Services = () => {
	const [imgUrl, setImgUrl] = useState('')
	const actionRef = useRef<ActionType>()
	const columns: ProColumns<TServiceItem>[] = [
		{
			title: 'Logo',
			align: 'center',
			search: false,
			render: (_, record) => <Image src={record?.logo} alt="logo" width={60} height={60} />
		},
		{
			title: 'Title',
			dataIndex: 'title',
			align: 'center'
		},
		{
			title: 'Description',
			dataIndex: 'description',
			align: 'center'
		},
		{
			title: 'Updated',
			dataIndex: 'updated_at',
			align: 'center',
			render: (_, q) => dateTimeFormatter(q?.updated_at, 'MM-DD-YYYY HH:MM:ss')
		},
		{
			title: 'Created',
			dataIndex: 'created-at',
			align: 'center',
			render: (_, q) => dateTimeFormatter(q?.created_at, 'MM-DD-YYYY HH:MM:ss')
		},
		{
			title: 'Operator',
			search: false,
			render: (_, record) => {
				return (
					<Space>
						{renderAddEditService('EDIT', record)}
						{renderDeleteLink(record)}
					</Space>
				)
			}
		}
	]

	const renderDeleteLink = (record: TServiceItem) => {
		return (
			<Popconfirm
				title="Delete this Service?"
				onConfirm={async () => {
					const res = await deleteServices({ id: record?.id })

					return afterModalformFinish(actionRef, res)
				}}
			>
				<Typography.Link type="danger">Delete</Typography.Link>
			</Popconfirm>
		)
	}

	const renderAddEditService = (type: 'EDIT' | 'ADD', record?: TServiceItem) => {
		const isEdit = type === 'EDIT'

		return (
			<ModalForm
				{...MODAL_FORM_PROPS}
				initialValues={isEdit ? record : {}}
				title={isEdit ? 'Edit Service' : 'Add Service'}
				labelCol={{ flex: '100px' }}
				trigger={
					isEdit ? (
						<Typography.Link onClick={() => setImgUrl(record?.logo!)}>Edit</Typography.Link>
					) : (
						<Button type="primary">Add</Button>
					)
				}
				onFinish={async params => {
					let res

					if (isEdit) {
						res = await updateServices({ ...params, logo: imgUrl, id: record?.id })
					} else {
						res = await addServices({ ...params, logo: imgUrl })
					}

					return afterModalformFinish(actionRef, res)
				}}
			>
				<ProFormText {...INPUT_TRIM} label="Title" name="title" rules={[{ required: true }]} />
				<ProFormTextArea label="Description" name="description" rules={[{ required: true }]} />
				<ProFormUploadButton
					label="Logo"
					name="logo"
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

	const fetchData = async () => {
		const res = await getServices()

		return {
			data: res?.data.data
		}
	}

	return (
		<div>
			<ProTable
				{...PRO_TABLE_PROPS}
				actionRef={actionRef}
				toolBarRender={() => [renderAddEditService('ADD')]}
				rowKey="id"
				columns={columns}
				request={fetchData}
				scroll={{ x: 650 }}
			/>
		</div>
	)
}

export default Services
