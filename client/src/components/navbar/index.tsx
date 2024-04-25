'use client'

import { scaleSize } from '@/constants'
import { setDarkMode } from '@/redux/features/booleanSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { Inter, Poppins } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GoMoon, GoSun } from 'react-icons/go'
import styles from './styles.module.scss'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { MdMenu } from 'react-icons/md'

const poppins = Poppins({ weight: '600', subsets: ['latin'] })
const inter = Inter({ weight: '400', subsets: ['latin'] })

const Navbar = () => {
	const dispatch = useAppDispatch()
	const { darkMode } = useAppSelector(state => state.boolean)
	const [open, setOpen] = useState(false)

	const scrollToElement = elementId => {
		const el = document.getElementById(elementId)
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' })
		}

		setOpen(false)
	}

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode)
	}, [darkMode])

	useEffect(() => {
		const handleResize = () => {
			const isOverBreakpoint = window.matchMedia('(min-width: 993px)').matches
			if (isOverBreakpoint) {
				setOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div className={styles.navbarWrapper}>
			<div className={styles.logoContainer}>
				<Image src={`/assets/${darkMode ? 'logo' : 'logo-dark'}.png`} alt="logo" width={100} height={100} />
				<span className={poppins.className}>Mark P.</span>
			</div>
			<div className={classNames(styles.linksContainer, inter.className)}>
				<motion.span whileTap={scaleSize} onClick={() => scrollToElement('specialty__el')}>
					Services
				</motion.span>
				<motion.span whileTap={scaleSize} onClick={() => scrollToElement('portfolio__el')}>
					Portfolios
				</motion.span>
				<motion.span whileTap={scaleSize} onClick={() => scrollToElement('experience__el')}>
					Experience
				</motion.span>
				<motion.span whileTap={scaleSize} onClick={() => scrollToElement('blogs__el')}>
					Blog
				</motion.span>
				{/* <span>
					<HiOutlineEllipsisHorizontal />
				</span> */}
			</div>
			<div className={styles.btnContainer}>
				<motion.span whileTap={scaleSize} onClick={() => dispatch(setDarkMode())}>
					{darkMode ? <GoSun color="white" size={20} /> : <GoMoon size={20} />}
				</motion.span>
				<motion.span whileTap={scaleSize}>Resume</motion.span>
			</div>
			<div className={classNames(styles.navBtnWrapper, 'overflow-y-scroll max-h-screen')}>
				<Sheet
					onOpenChange={q => {
						setOpen(q)
					}}
					open={open}
				>
					<SheetTrigger>
						<MdMenu size="20" />
					</SheetTrigger>
					<SheetContent className={styles.sheetContent}>
						<SheetHeader>
							<SheetTitle>
								<div className={styles.logoContainer}>
									<Image src={`/assets/${darkMode ? 'logo' : 'logo-dark'}.png`} alt="logo" width={100} height={100} />
									<span className={poppins.className}>Mark P.</span>
								</div>
							</SheetTitle>
							<SheetDescription>
								<div className={classNames(styles.navlinks, inter.className)}>
									<motion.span whileTap={scaleSize} onClick={() => scrollToElement('specialty__el')}>
										Services
									</motion.span>
									<motion.span whileTap={scaleSize} onClick={() => scrollToElement('portfolio__el')}>
										Portfolios
									</motion.span>
									<motion.span whileTap={scaleSize} onClick={() => scrollToElement('experience__el')}>
										Experience
									</motion.span>
									<motion.span whileTap={scaleSize} onClick={() => scrollToElement('blogs__el')}>
										Blog
									</motion.span>
								</div>
								<div className={classNames(styles.btnContainer, styles.mobile)}>
									<motion.span whileTap={scaleSize} onClick={() => dispatch(setDarkMode())}>
										{darkMode ? <GoSun color="white" size={20} /> : <GoMoon size={20} />}
									</motion.span>
									<motion.span whileTap={scaleSize}>Resume</motion.span>
								</div>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	)
}

export default Navbar
