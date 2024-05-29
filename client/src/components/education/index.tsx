'use client'

import React, { FC, useEffect, useState } from 'react'
import Header from '../header'
import styles from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import classNames from 'classnames'
import { inter, jakarta } from '../../../public/fonts'
import { Progress } from '../ui/progress'
import { TEducationItem } from 'api'
import { dateTimeFormatter } from '@/lib/utils'

const Education: FC<{ data: TEducationItem[] }> = ({ data }) => {
	const [selectedItem, setSelectedItem] = useState<TEducationItem>()

	const scaleSize = { scale: 0.9 }

	const handleItemClick = (item, event) => {
		event.preventDefault()
		setSelectedItem(item)
	}

	useEffect(() => {
		setSelectedItem(data?.[0])
	}, [])

	return (
		<div className={styles.educationWrapper}>
			<Header title="learning path" />
			<span className={classNames(styles.header, jakarta.className)}>Education & Skills</span>
			<div className={styles.educationContainer}>
				<div className={styles.leftContainer}>
					{data?.map(w => (
						<motion.div
							key={w?.id}
							className={styles.btn}
							whileTap={scaleSize}
							onClick={event => handleItemClick(w, event)}
						>
							<span className={classNames(styles.school, jakarta.className)}>{w?.school}</span>
							<span className={classNames(styles.course, inter.className)}>{w?.course}</span>
							<span className={classNames(styles.year, inter.className)}>
								{dateTimeFormatter(w?.started, 'MM-YYYY')} - {dateTimeFormatter(w?.ended, 'MM-YYYY')}
							</span>
						</motion.div>
					))}
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
								<span className={classNames(inter.className, styles.description)}>
									{selectedItem?.description}
								</span>
								<div className={styles.progressContainer}>
									{selectedItem?.skills?.map(q => (
										<div className={styles.progress} key={q?.id}>
											<span className={inter.className}>{q?.name}</span>
											<Progress value={+q?.percentage} className={styles.progressBar} />
										</div>
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

export default Education
