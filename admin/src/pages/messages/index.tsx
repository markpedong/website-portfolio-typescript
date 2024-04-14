import { TMessageItem, getMessages } from '@/api'
import { PRO_TABLE_PROPS } from '@/constants'
import { dateTimeFormatter } from '@/utils'
import { ProColumns, ProTable } from '@ant-design/pro-components'

const Messages = () => {
	const columns: ProColumns<TMessageItem>[] = [
		{
			title: 'Name',
			dataIndex: 'name',
			align: 'center'
		},
		{
			title: 'Email',
			dataIndex: 'email',
			align: 'center'
		},
		{
			title: 'Message',
			dataIndex: 'message',
			align: 'center'
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
		}
	]
	const fetchData = async () => {
		const res = await getMessages()

		return {
			data: res?.data.data
		}
	}

	return (
		<div>
			<ProTable {...PRO_TABLE_PROPS} columns={columns} request={fetchData} scroll={{ x: 800 }} />
		</div>
	)
}

export default Messages
