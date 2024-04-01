'use client'

import Image from 'next/image'
import styles from './styles.module.scss'
import { Inter, Poppins } from 'next/font/google'
import classNames from 'classnames'
import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2'
import { GoMoon, GoSun } from 'react-icons/go'
import { motion } from 'framer-motion'
import { scaleSize } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setDarkMode } from '@/redux/features/booleanSlice'
import { useEffect } from 'react'

const poppins = Poppins({ weight: '600', subsets: ['latin'] })
const inter = Inter({ weight: '400', subsets: ['latin'] })

const Navbar = () => {
	const { darkMode } = useAppSelector(state => state.boolean)
	const dispatch = useAppDispatch()

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode)
	}, [darkMode])

	return (
		<div className={styles.navbarWrapper}>
			<div className={styles.logoContainer}>
				<Image src={`/assets/${darkMode ? 'logo' : 'logo-dark'}.png`} alt="logo" width={100} height={100} />
				<span className={poppins.className}>Mark P.</span>
			</div>
			<div className={classNames(styles.linksContainer, inter.className)}>
				<span>Services</span>
				<span>Portfolios</span>
				<span>Experience</span>
				<span>Blog</span>
				<span>
					<HiOutlineEllipsisHorizontal />
				</span>
			</div>
			<div className={styles.btnContainer}>
				<motion.span whileTap={scaleSize} onClick={() => dispatch(setDarkMode())}>
					{darkMode ? <GoSun /> : <GoMoon />}
				</motion.span>
				<motion.span whileTap={scaleSize}>Resume</motion.span>
			</div>
		</div>
	)
}

export default Navbar
