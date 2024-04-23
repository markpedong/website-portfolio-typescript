'use client'

import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { motion } from 'framer-motion'
import { scaleSize } from '@/constants'
import { CiMail, CiMapPin, CiPhone } from 'react-icons/ci'
import { interM } from '../../../public/fonts'
import { TDetailsItem } from 'api'

type Props = {}

const Contact: FC<{ data: TDetailsItem }> = ({ data }) => {
	return (
		<div className={styles.contactWrapper}>
			<div className={styles.inputContainer}>
				<Input placeholder="Name" />
				<Input placeholder="Email" />
				<Textarea rows={5} placeholder="Message" />
				<motion.div whileTap={scaleSize} className={styles.btnSubmit}>
					Send Message
				</motion.div>
			</div>
			<div className={styles.detailsContainer}>
				<div className={styles.details}>
					<div className={styles.icon}>
						<CiMapPin color="#7E74F1" />
					</div>
					<div className={styles.extra}>
						<span className={interM.className}>Address</span>
						<span>3423 Layman Avenue, Fayetteville, NC</span>
					</div>
				</div>
				<div className={styles.details}>
					<div className={styles.icon}>
						<CiPhone color="#7E74F1" />
					</div>
					<div className={styles.extra}>
						<span className={interM.className}>Phone</span>
						<span>(501) 414-1451</span>
					</div>
				</div>
				<div className={styles.details}>
					<div className={styles.icon}>
						<CiMail color="#7E74F1" />
					</div>
					<div className={styles.extra}>
						<span className={interM.className}>Email</span>
						<span>calebnyong02@gmail.com</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
