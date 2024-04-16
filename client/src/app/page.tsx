import React from 'react'
import styles from '@/styles/styles.module.scss'
import Navbar from '../components/navbar'
import Content from '@/components/content'
import Specialty from '@/components/specialty'
import Portfolio from '@/components/portfolio'
import Experience from '@/components/experience'
import Blogs from '@/components/blogs'
import Testimonials from '@/components/testimonials'
import Education from '@/components/education'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { getLinks } from '../../api'

const App = async () => {
	const res = await getLinks()

	console.log("@@@", res?.data)
	return (
		<>
			<div className={styles.mainWrapper}>
				<Navbar />
				<Content />
			</div>
			<Specialty />
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
	)
}

export default App
