'use client'

import React, { useEffect, useState } from 'react'
import Header from '../header'
import styles from './styles.module.scss'
import { FaAngleRight } from 'react-icons/fa6'
import { AnimatePresence, motion } from 'framer-motion'
import { scaleSize } from '@/constants'
import classNames from 'classnames'
import { inter, interM, jakartaB, jakartaM } from '../../../public/fonts'
import { Separator } from '../ui/separator'

const Experience = () => {
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
		<div className={styles.experienceWrapper}>
			<Header title="career path" />
			<div className={styles.experienceContainer}>
				<div className={styles.leftContainer}>
					<span className={classNames(styles.header, jakartaB.className)}>Work Experiences</span>
					<div className={styles.btnContainer}>
						{['apple', 'google', 'amazon']?.map(w => (
							<motion.div
								key={w}
								className={styles.btn}
								whileTap={scaleSize}
								onClick={event => handleItemClick(w, event)}
							>
								<span>{w}</span> <FaAngleRight />
							</motion.div>
						))}
					</div>
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
								<div className={styles.textContainer}>
									<span className={classNames(styles.title, jakartaM.className)}>
										Front-end Developer <u>Apple Inc.</u>
									</span>
									<span className={classNames(styles.location, inter.className)}>California, United States</span>
									<span className={classNames(styles.duration, interM.className)}>Nov 2020 - Present • Full-time</span>
									<div className={styles.techContainer}>
										<span>WordPress</span>
										<span>React</span>
									</div>
								</div>
								<Separator className="my-[2rem]" />
								<div className={classNames(styles.descriptionContainer, inter.className)}>
									<span>
										<p className={styles.hypen}>-</p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
										sunt.
									</span>
									<span>
										<p className={styles.hypen}>-</p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
										sunt.
									</span>
									<span>
										<p className={styles.hypen}>-</p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
										sunt.
									</span>
									<span>
										<p className={styles.hypen}>-</p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
										sunt.
									</span>
								</div>
							</motion.div>
						</div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Experience
