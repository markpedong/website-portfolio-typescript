'use client'

import React, { FC, useState } from 'react'
import styles from './styles.module.scss'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { motion } from 'framer-motion'
import { scaleSize } from '@/constants'
import { CiMail, CiMapPin, CiPhone } from 'react-icons/ci'
import { interM, jakartaB } from '../../../public/fonts'
import { TDetailsItem, addMessages } from 'api'
import { useToast } from '../ui/use-toast'
import { ToastAction } from '../ui/toast'
import classNames from 'classnames'
import Header from '../header'

const Contact: FC<{ data: TDetailsItem }> = ({ data }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const { toast } = useToast()

	const submitMessage = async () => {
		const res = await addMessages({ email, name, message })

		if (!res?.success) {
			toast({
				title: 'Uh oh! Something went wrong.',
				description: 'There was a problem with your request.',
				action: <ToastAction altText="Try again">Try again</ToastAction>
			})
			return
		}

		if (res?.success) {
			toast({
				description: 'Your message has been sent.'
			})
		}

		setMessage('')
		setName('')
		setEmail('')
	}

	return (
		<div>
			<div className={styles.headerContainer}>
				<Header title="contact me" />
				<span className={classNames(styles.header, jakartaB.className)}>Send me a Message!</span>
			</div>
			<div className={styles.contactContainer}>
				<div className={styles.inputContainer}>
					<Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
					<Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
					<Textarea rows={5} placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
					<motion.div whileTap={scaleSize} className={styles.btnSubmit} onClick={submitMessage}>
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
							<span>{data?.address}</span>
						</div>
					</div>
					<div className={styles.details}>
						<div className={styles.icon}>
							<CiPhone color="#7E74F1" />
						</div>
						<div className={styles.extra}>
							<span className={interM.className}>Phone</span>
							<span>{data?.phone}</span>
						</div>
					</div>
					<div className={styles.details}>
						<div className={styles.icon}>
							<CiMail color="#7E74F1" />
						</div>
						<div className={styles.extra}>
							<span className={interM.className}>Email</span>
							<span>{data?.email}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
