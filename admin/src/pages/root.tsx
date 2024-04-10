import App from '@/pages/app';
import menus from '@/pages/menus';
import { cloneDeep } from 'lodash';
import { FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const Root: FC = () => {
	const menu = cloneDeep(menus);
	return useRoutes([
		{
			path: '/',
			element: <App />,
			children: [
				...menu,
				//dynamic route
				// {
				// 	path: '/cryptocurrency/:id',
				// 	element: <Coin />
				// },
				{
					path: '*',
					element: <Navigate to="/" />
				}
			]
		},
		{
			path: '*',
			element: <Navigate to="/" />
		}
	]);
};

export default Root;
