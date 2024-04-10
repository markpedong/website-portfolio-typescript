import Root from '@/pages/root';
import '@/styles/global.module.scss';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ConfigProvider locale={enUS}>
			<BrowserRouter>
				<Root />
			</BrowserRouter>
		</ConfigProvider>
	</React.StrictMode>
);
