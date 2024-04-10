import logo from '@/assets/logo.png';
import logoDark from '@/assets/logo-dark.png';
import { MODAL_FORM_PROPS } from '@/constants';
import menus from '@/pages/menus';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { ActionType, ModalForm, ProFormText, ProLayout } from '@ant-design/pro-components';
import { Dropdown, Space, Switch, Typography } from 'antd';
import { cloneDeep } from 'lodash';
import { FC, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { setDarkMode } from '@/redux/features/booleanSlice';

const App: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const { darkMode } = useAppSelector(s => s.boolean);
	const actionRef = useRef<ActionType>();
	const items: MenuProps['items'] = [
		{
			key: '1',
			danger: true,
			label: 'Logout'
		}
	];

	const renderSearchbar = () => {
		return (
			<ModalForm
				{...MODAL_FORM_PROPS}
				title="Search token name or exchanges"
				trigger={<Typography.Link>Search</Typography.Link>}
				onFinish={async value => {
					console.log(value);
				}}
			>
				<ProFormText name="search" placeholder="eg. Bitcoin, Ethereum/ Binance, OKX" />
			</ModalForm>
		);
	};

	const renderDarkMode = () => (
		<div>
			<Switch
				onChange={() => dispatch(setDarkMode())}
				checkedChildren={<IoMdMoon />}
				unCheckedChildren={<IoMdSunny />}
			/>
		</div>
	);

	return (
		<ProLayout
			location={{ pathname }}
			actionRef={actionRef}
			title="Blockdetails"
			fixSiderbar
			fixedHeader
			layout="mix"
			headerTitleRender={() => (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img src={darkMode ? logoDark : logo} />
					<h1>M.Pedong</h1>
				</div>
			)}
			route={{ routes: cloneDeep(menus) }}
			menuItemRender={(item, dom) => {
				return (
					<Typography.Link
						style={{ paddingBlockStart: '0.5rem' }}
						onClick={() => navigate(item.path as string)}
					>
						{dom}
					</Typography.Link>
				);
			}}
			actionsRender={() => [
				renderSearchbar(),
				renderDarkMode(),
				<Dropdown menu={{ items }}>
					<a onClick={e => e.preventDefault()}>
						<DownOutlined />
					</a>
				</Dropdown>
			]}
		>
			<Outlet />
		</ProLayout>
	);
};

export default App;
