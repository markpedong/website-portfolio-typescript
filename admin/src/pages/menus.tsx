import Information from './information'
import { IoIosInformationCircle, IoIosLink } from 'react-icons/io'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'
import Status from './status'
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
import { IoWarning } from 'react-icons/io5'

export default [
	{
		path: '/app/blog',
		name: 'Blogs',
		element: <Blogs />,
		icon: <FaBlog />
	},
	{
		path: '/app/education',
		name: 'Education',
		element: <Education />,
		icon: <GiDiploma />
	},
	{
		path: '/app/experience',
		name: 'Experience',
		element: <Experience />,
		icon: <FaPhoenixFramework />
	},
	{
		path: '/app',
		name: 'Information',
		element: <Information />,
		icon: <IoIosInformationCircle />
	},
	{
		path: '/app/link',
		name: 'Links',
		element: <Links />,
		icon: <IoIosLink />
	},
	{
		path: '/app/message',
		name: 'Messages',
		element: <Messages />,
		icon: <FaMessage />
	},
	{
		path: '/app/portfolio',
		name: 'Portfolio',
		element: <Portfolio />,
		icon: <AiFillProject />
	},
	{
		path: '/app/service',
		name: 'Services',
		element: <Services />,
		icon: <MdOutlineMiscellaneousServices />
	},
	{
		path: '/app/testimonial',
		name: 'Testimonials',
		element: <Testimonials />,
		icon: <BsRecord />
	},
	{
		path: '/app/status',
		name: 'Status',
		element: <Status />,
		icon: <IoWarning />
	}
]
