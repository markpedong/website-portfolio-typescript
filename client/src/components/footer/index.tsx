'use client'

import React, { FC } from 'react'
import styles from './styles.module.scss'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import classNames from 'classnames'
import { inter } from '../../../public/fonts'
import { motion } from 'framer-motion'
import { scaleSize } from '@/constants'
import { TDetailsItem, TLinksItem } from 'api'

const Footer: FC<{ links: TLinksItem[]; details: TDetailsItem }> = ({ links, details }) => {
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.iconContainer}>
				<motion.span whileTap={scaleSize}>
					<FaInstagram />
				</motion.span>
				<motion.span whileTap={scaleSize}>
					<FaGithub />
				</motion.span>
				<motion.span whileTap={scaleSize}>
					<FaTwitter />
				</motion.span>
				<motion.span whileTap={scaleSize}>
					<FaLinkedin />
				</motion.span>
			</div>
			<div className={classNames(styles.text, inter.className)}>© 2024 - Mark Pedong</div>
		</div>
	)
}

export default Footer
