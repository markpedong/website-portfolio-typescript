import Information from './information'
import { IoIosColorPalette, IoIosInformationCircle, IoIosLink } from 'react-icons/io'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'
import Theme from './theme'
import Links from './links'
import Services from './services'
import Portfolio from './portfolios'
import Experience from './experience'
import { FaBlog, FaMessage, FaPhoenixFramework } from 'react-icons/fa6'
import Blogs from './blogs'
import Messages from './messages'
import Testimonials from './testimonials'
import { BsRecord } from 'react-icons/bs'
import Education from './education'
import { GiDiploma } from 'react-icons/gi'

export default [
	{
		path: '/blog',
		name: 'Blogs',
		element: <Blogs />,
		icon: <FaBlog />
	},
	{
		path: '/education',
		name: 'Education',
		element: <Education />,
		icon: <GiDiploma />
	},
	{
		path: '/experience',
		name: 'Experience',
		element: <Experience />,
		icon: <FaPhoenixFramework />
	},
	{
		path: '/',
		name: 'Information',
		element: <Information />,
		icon: <IoIosInformationCircle />
	},
	{
		path: '/link',
		name: 'Links',
		element: <Links />,
		icon: <IoIosLink />
	},
	{
		path: '/message',
		name: 'Messages',
		element: <Messages />,
		icon: <FaMessage />
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		element: <Portfolio />,
		icon: <AiFillProject />
	},
	{
		path: '/service',
		name: 'Services',
		element: <Services />,
		icon: <MdOutlineMiscellaneousServices />
	},
	{
		path: '/testimonial',
		name: 'Testimonials',
		element: <Testimonials />,
		icon: <BsRecord />
	},
	{
		path: '/theme',
		name: 'Theme',
		element: <Theme />,
		icon: <IoIosColorPalette />
	}
]
