import { TServiceItem, getServices } from '@/api'
import { MODAL_FORM_PROPS, PRO_TABLE_PROPS } from '@/constants'
import { INPUT_TRIM, dateTimeFormatter } from '@/utils'
import { ModalForm, ProColumns, ProFormText, ProTable } from '@ant-design/pro-components'
import { Button, Image, Typography } from 'antd'

const Services = () => {
	const columns: ProColumns<TServiceItem>[] = [
		{
			title: 'Logo',
			render: (_, record) => <Image src={record?.logo} alt="logo" />
		},
		{
			title: 'Title',
			dataIndex: 'title'
		},
		{
			title: 'Description',
			dataIndex: 'description'
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
		}
	]

	const renderAddEditService = (type: 'EDIT' | 'ADD', record?: TServiceItem) => {
		const isEdit = type === 'EDIT'

		return (
			<ModalForm
				{...MODAL_FORM_PROPS}
				initialValues={isEdit ? record : {}}
				title={isEdit ? 'Edit Service' : 'Add Service'}
				trigger={isEdit ? <Typography>Edit</Typography> : <Button type="primary">Add</Button>}
			>
				<ProFormText {...INPUT_TRIM} label="Title" name="title" />
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
				toolBarRender={() => [renderAddEditService('ADD')]}
				rowKey="id"
				columns={columns}
				request={fetchData}
			/>
		</div>
	)
}

export default Services
