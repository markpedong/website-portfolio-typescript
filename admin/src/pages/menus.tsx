import Information from './information'
import { IoIosColorPalette, IoIosInformationCircle, IoIosLink } from 'react-icons/io'
import Theme from './theme'
import Links from './links'

export default [
	{
		path: '/',
		name: 'Information',
		element: <Information />,
		icon: <IoIosInformationCircle />
	},
	{
		path: '/theme',
		name: 'Theme',
		element: <Theme />,
		icon: <IoIosColorPalette />
	},
	{
		path: '/link',
		name: 'Links',
		element: <Links />,
		icon: <IoIosLink />
	}
]
