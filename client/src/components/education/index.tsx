'use client'

import React, { FC, useEffect, useState } from 'react'
import Header from '../header'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import classNames from 'classnames'
import { inter, interM, jakartaB, jakartaM } from '../../../public/fonts'
import { Progress } from '../ui/progress'
import { TEducationItem } from 'api'

const Education: FC<{ data: TEducationItem[] }> = ({ data }) => {
	const [selectedItem, setSelectedItem] = useState(null)

	const scaleSize = { scale: 0.9 }

	const handleItemClick = (item, event) => {
		event.preventDefault()
		setSelectedItem(item)
	}

	useEffect(() => {
		setSelectedItem('apple')
	}, [])

	return (
		<div className={styles.educationWrapper}>
			<Header title="learning path" />
			<span className={classNames(styles.header, jakartaB.className)}>Education & Skills</span>
			<div className={styles.educationContainer}>
				<div className={styles.leftContainer}>
					{['apple', 'google', 'amazon']?.map(w => (
						<motion.div
							key={w}
							className={styles.btn}
							whileTap={scaleSize}
							onClick={event => handleItemClick(w, event)}
						>
							<span className={classNames(styles.school, jakartaM.className)}>Kingston University</span>
							<span className={classNames(styles.course, inter.className)}>
								Master's Degree - Software Engineering
							</span>
							<span className={classNames(styles.year, interM.className)}>2019 - 2021</span>
						</motion.div>
					))}
				</div>
				<AnimatePresence>
					{selectedItem && (
						<div className={styles.rightContainer}>
							<motion.div
								key={selectedItem}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
							>
								<span className={classNames(inter.className, styles.description)}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae possimus
									adipisci. Similique ipsa dolores mollitia? Aliquid ut vero quae aspernatur molestias
									fugit similique corrupti, aut doloribus cum, amet sint.
								</span>
								<div className={styles.progressContainer}>
									<div className={styles.progress}>
										<span className={interM.className}>React</span>
										<Progress value={75} className={styles.progressBar} />
									</div>
									<div className={styles.progress}>
										<span className={interM.className}>Angular</span>
										<Progress value={23} className={styles.progressBar} />
									</div>
									<div className={styles.progress}>
										<span className={interM.className}>Typescript</span>
										<Progress value={79} className={styles.progressBar} />
									</div>
								</div>
							</motion.div>
						</div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Education
