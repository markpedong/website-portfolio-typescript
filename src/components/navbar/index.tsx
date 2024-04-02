'use client'

import { scaleSize } from '@/constants'
import { setDarkMode } from '@/redux/features/booleanSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { Inter, Poppins } from 'next/font/google'
import Image from 'next/image'
import { useEffect } from 'react'
import { GoMoon, GoSun } from 'react-icons/go'
import styles from './styles.module.scss'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { MdMenu } from 'react-icons/md'

const poppins = Poppins({ weight: '600', subsets: ['latin'] })
const inter = Inter({ weight: '400', subsets: ['latin'] })

const Navbar = () => {
	const dispatch = useAppDispatch()
	const { darkMode } = useAppSelector(state => state.boolean)

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
				{/* <span>
					<HiOutlineEllipsisHorizontal />
				</span> */}
			</div>
			<div className={styles.btnContainer}>
				<motion.span whileTap={scaleSize} onClick={() => dispatch(setDarkMode())}>
					{darkMode ? <GoSun color="white" /> : <GoMoon />}
				</motion.span>
				<motion.span whileTap={scaleSize}>Resume</motion.span>
			</div>
			<div className={styles.navBtnWrapper}>
				<Sheet>
					<SheetTrigger>
						<MdMenu size="20" />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>
								<div className={styles.logoContainer}>
									<Image
										src={`/assets/${darkMode ? 'logo' : 'logo-dark'}.png`}
										alt="logo"
										width={100}
										height={100}
									/>
									<span className={poppins.className}>Mark P.</span>
								</div>
							</SheetTitle>
							<SheetDescription>
								<div className={classNames(styles.navlinks, inter.className)}>
									<span>Services</span>
									<span>Portfolios</span>
									<span>Experience</span>
									<span>Blog</span>
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
