'use client'

import React, { FC, useEffect, useState } from 'react'
import Header from '../header'
import styles from './styles.module.scss'
import { FaAngleRight } from 'react-icons/fa6'
import { AnimatePresence, motion } from 'framer-motion'
import classNames from 'classnames'
import { inter, interM, jakartaB, jakartaM } from '../../../public/fonts'
import { Separator } from '../ui/separator'
import { TExperienceItem } from 'api'
import { dateTimeFormatter } from '@/lib/utils'

const Experience: FC<{ data: TExperienceItem[] }> = ({ data }) => {
	const [selectedItem, setSelectedItem] = useState<TExperienceItem>()

	const scaleSize = { scale: 0.9 }

	const handleItemClick = (item, event) => {
		event.preventDefault()
		setSelectedItem(item)
	}

	useEffect(() => {
		console.log('@@@', data)
		setSelectedItem(data?.[0])
	}, [])

	return (
		<div className={styles.experienceWrapper} id="experience__el">
			<Header title="career path" />
			<div className={styles.experienceContainer}>
				<div className={styles.leftContainer}>
					<span className={classNames(styles.header, jakartaB.className)}>Work Experiences</span>
					<div className={styles.btnContainer}>
						{data?.map(w => (
							<motion.div
								key={w?.id}
								className={styles.btn}
								whileTap={scaleSize}
								onClick={event => handleItemClick(w, event)}
							>
								<span>{w?.title}</span> <FaAngleRight />
							</motion.div>
						))}
					</div>
				</div>
				<AnimatePresence>
					{selectedItem?.id && (
						<div className={styles.rightContainer}>
							<motion.div
								key={selectedItem?.id}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
							>
								<div className={styles.textContainer}>
									<span className={classNames(styles.title, jakartaM.className)}>
										{selectedItem?.title}, <u>{selectedItem?.company}</u>
									</span>
									<span className={classNames(styles.location, inter.className)}>{selectedItem?.location}</span>
									<span className={classNames(styles.duration, interM.className)}>
										{dateTimeFormatter(selectedItem?.started, 'MM-YYYY')} <span>&#8212;</span>{' '}
										{dateTimeFormatter(selectedItem?.ended, 'MM-YYYY')} • Full-time
									</span>
									<div className={styles.techContainer}>
										{selectedItem?.skills?.map(q => (
											<span key={q?.id}>{q?.name}</span>
										))}
									</div>
								</div>
								<Separator className="my-[2rem]" />
								<div className={classNames(styles.descriptionContainer, inter.className)}>
									{selectedItem?.descriptions?.map(q => (
										<span key={q?.id}>
											<p className={styles.hypen}>-</p> {q?.description}
										</span>
									))}
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
