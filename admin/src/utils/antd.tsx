import { useAppSelector } from '@/redux/store';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { ConfigProvider, theme } from 'antd';
import React from 'react';
import enUS from 'antd/locale/en_US';

export const renderPercentage = percentage => {
	const per = percentage?.toFixed(2);

	return (
		<span
			style={{
				color: per > 0.0 ? '#16c784' : '#ea3943'
			}}
		>
			{per > 0.0 ? <CaretUpOutlined /> : per < 0.0 ? <CaretDownOutlined /> : !per && ''} {per?.replace('-', '')}
		</span>
	);
};

export const AntdConfigProvider = ({ children }: { children: React.ReactNode }) => {
	const { darkMode } = useAppSelector(s => s.boolean);

	return (
		<ConfigProvider
			locale={enUS}
			theme={{
				algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token: { colorPrimary: 'red' }
			}}
		>
			{children}
		</ConfigProvider>
	);
};
