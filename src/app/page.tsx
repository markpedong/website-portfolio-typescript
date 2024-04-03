import React from 'react'
import styles from '@/styles/styles.module.scss'
import Navbar from '../components/navbar'
import Content from '@/components/content'
import Specialty from '@/components/specialty'
import Portfolio from '@/components/portfolio'

const App = () => {
	return (
		<div className={styles.mainWrapper}>
			<Navbar />
			<Content />
			<Specialty />
			<Portfolio />
		</div>
	)
}

export default App
