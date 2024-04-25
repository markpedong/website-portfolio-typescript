import React from 'react'
import styles from '@/styles/styles.module.scss'
import Navbar from '../components/navbar'
import Content from '@/components/content'
import Portfolio from '@/components/portfolio'
import Experience from '@/components/experience'
import Blogs from '@/components/blogs'
import Testimonials from '@/components/testimonials'
import Education from '@/components/education'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import {
	getBlogs,
	getDetails,
	getEducations,
	getExperiences,
	getLinks,
	getPortfolios,
	getServices,
	getTestimonials,
	getWebsiteDetails
} from '../../api'
import { IoWarning } from 'react-icons/io5'
import Specialty from '@/components/specialty'

const App = async () => {
	const [website, links, details, services, portfolio, experiences, blogs, testimonials, educations] =
		await Promise.all([
			getWebsiteDetails(),
			getLinks(),
			getDetails(),
			getServices(),
			getPortfolios(),
			getExperiences(),
			getBlogs(),
			getTestimonials(),
			getEducations()
		])

	return (
		<div>
			{website?.data.status === 1 ? (
				<>
					<div className={styles.mainWrapper}>
						<Navbar data={website?.data} />
						<Content data={details?.data} links={links?.data} />
					</div>
					<Specialty data={services?.data} />
					<div className={styles.mainWrapper}>
						<Portfolio data={portfolio?.data} />
					</div>
					<div className={styles.wrapperWithBG}>
						<Experience data={experiences?.data} />
					</div>
					<Blogs data={blogs?.data} />
					<div className={styles.wrapperWithBG}>
						<Testimonials data={testimonials?.data} />
					</div>
					<Education data={educations?.data} />
					<div className={styles.wrapperWithBG}>
						<Contact data={details?.data} />
					</div>
					<Footer links={links?.data} details={details?.data} />
				</>
			) : (
				<div className="flex justify-center items-center flex-col w-full h-dvh gap-5">
					<IoWarning color="red" className="h-[5rem] w-[5rem]" />
					<span className="text-[2rem] font-bold">MAINTENANCE</span>
				</div>
			)}
		</div>
	)
}

export default App
