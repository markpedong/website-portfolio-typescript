import React from 'react'
import styles from '@/styles/styles.module.scss'
import Navbar from '../components/navbar'
import Content from '@/components/content'
import Specialty from '@/components/specialty'

const App = () => {
	return (
		<div className={styles.mainWrapper}>
			<Navbar />
			<Content />
			<Specialty />
		</div>
	)
}

export default App
