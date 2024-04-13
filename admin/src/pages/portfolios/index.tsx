import { TPortfolioItem, deletePortfolios, getPortfolios } from '@/api'
import { MODAL_FORM_PROPS, PRO_TABLE_PROPS } from '@/constants'
import { afterModalformFinish } from '@/utils/antd'
import { ActionType, ModalForm, ProColumns, ProFormText, ProTable } from '@ant-design/pro-components'
import { Button, Popconfirm, Space, Tag, Typography } from 'antd'
import { useRef } from 'react'

const Portfolio = () => {
	const actionRef = useRef<ActionType>()
	const columns: ProColumns<TPortfolioItem>[] = [
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
				trigger={isEdit ? <Typography.Link>Edit</Typography.Link> : <Button>Add</Button>}
			>
				<ProFormText label="Title" />
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
			<ProTable {...PRO_TABLE_PROPS} columns={columns} request={fetchData} />
		</div>
	)
}

export default Portfolio
