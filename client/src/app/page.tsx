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
import { getDetails, getLinks, getServices, getWebsiteDetails } from '../../api'
import { IoWarning } from 'react-icons/io5'
import Specialty from '@/components/specialty'

const App = async () => {
	const [website, links, details, services] = await Promise.all([
		getWebsiteDetails(),
		getLinks(),
		getDetails(),
		getServices()
	])

	return (
		<div>
			{website?.data.status === 1 ? (
				<>
					<div className={styles.mainWrapper}>
						<Navbar />
						<Content data={details?.data} links={links?.data} />
					</div>
					<Specialty data={services?.data} />
					<div className={styles.mainWrapper}>
						<Portfolio />
					</div>
					<div className={styles.wrapperWithBG}>
						<Experience />
					</div>
					<Blogs />
					<div className={styles.wrapperWithBG}>
						<Testimonials />
					</div>
					<Education />
					<div className={styles.wrapperWithBG}>
						<Contact />
					</div>
					<Footer />
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
