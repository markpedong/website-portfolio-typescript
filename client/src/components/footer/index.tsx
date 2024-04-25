'use client'

import React, { FC } from 'react'
import styles from './styles.module.scss'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import classNames from 'classnames'
import { inter } from '../../../public/fonts'
import { motion } from 'framer-motion'
import { scaleSize } from '@/constants'
import { SocialMedia, TDetailsItem, TLinksItem } from 'api'
import Link from 'next/link'

const Footer: FC<{ links: TLinksItem[]; details: TDetailsItem }> = ({ links, details }) => {
	const renderLink = (type: string, icon: React.ReactNode) => {
		const currLink = links?.find(q => q.type === type)
		return (
			currLink && (
				<Link target="_blank" href={currLink?.link}>
					{icon}
				</Link>
			)
		)
	}

	return (
		<div className={styles.footerWrapper}>
			<div className={styles.iconContainer}>
				{renderLink(SocialMedia.Instagram, <FaInstagram className="h-full w-full" />)}
				{renderLink(SocialMedia.GitHub, <FaGithub className="h-full w-full" />)}
				{renderLink(SocialMedia.Twitter, <FaTwitter className="h-full w-full" />)}
				{renderLink(SocialMedia.LinkedIn, <FaLinkedin className="h-full w-full" />)}
			</div>
			<div className={classNames(styles.text, inter.className)}>© 2024 - Mark Pedong</div>
		</div>
	)
}

export default Footer
