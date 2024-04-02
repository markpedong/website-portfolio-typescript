import React from 'react'
import styles from '@/styles/styles.module.scss'
import Navbar from '../components/navbar'
import Content from '@/components/content'

const App = () => {
	return (
		<div className={styles.mainWrapper}>
			<Navbar />
			<Content />
		</div>
	)
}

export default App
