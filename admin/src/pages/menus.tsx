import Information from './information'
import { IoIosColorPalette, IoIosInformationCircle, IoIosLink } from 'react-icons/io'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'
import Theme from './theme'
import Links from './links'
import Services from './services'
import Portfolio from './portfolios'
import Experience from './experience'
import { FaBlog, FaPhoenixFramework } from 'react-icons/fa6'
import Blogs from './blogs'

export default [
	{
		path: '/',
		name: 'Information',
		element: <Information />,
		icon: <IoIosInformationCircle />
	},
	{
		path: '/blog',
		name: 'Blogs',
		element: <Blogs />,
		icon: <FaBlog />
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
	},
	{
		path: '/service',
		name: 'Services',
		element: <Services />,
		icon: <MdOutlineMiscellaneousServices />
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		element: <Portfolio />,
		icon: <AiFillProject />
	},
	{
		path: '/experience',
		name: 'Experience',
		element: <Experience />,
		icon: <FaPhoenixFramework />
	}
]
