import React from 'react'
import styles from '@/styles/styles.module.scss'
import Navbar from '../components/navbar'
import Content from '@/components/content'
import Specialty from '@/components/specialty'
import Portfolio from '@/components/portfolio'
import Experience from '@/components/experience'

const App = () => {
	return (
		<>
			<div className={styles.mainWrapper}>
				<Navbar />
				<Content />
			</div>
			<Specialty />
			<div className={styles.mainWrapper}>
				<Portfolio />
				<Experience />
			</div>
		</>
	)
}

export default App
