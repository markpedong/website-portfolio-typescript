import styles from './styles.module.scss'
import Header from '../header'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import classNames from 'classnames'
import { RiVipCrownLine } from 'react-icons/ri'
import React from 'react'
import { GoStack } from 'react-icons/go'
import { HiOutlineGlobeAlt } from 'react-icons/hi'

const jakarta = Plus_Jakarta_Sans({ weight: '700', subsets: ['latin'] })
const jakartaM = Plus_Jakarta_Sans({ weight: '500', subsets: ['latin'] })
const inter = Inter({ weight: '400', subsets: ['latin'] })

type Props = { title: string; description: string; logo: React.ReactNode }
const CSpecialty = ({ description, logo, title }: Props) => {
	return (
		<div className={styles.cspecialtyContainer}>
			<div>{logo}</div>
			<div className={jakartaM.className}>{title}</div>
			<div className={inter.className}>{description}</div>
		</div>
	)
}

const Specialty = () => {
	return (
		<div className={styles.specialtyWrapper}>
			<div className={styles.titleWrapper}>
				<Header title="services" />
				<span className={classNames(styles.title, jakarta.className)}>Specialized In</span>
			</div>
			<div className={styles.contentWrapper}>
				<CSpecialty
					title="UI/UX Design"
					description="Turn what you have in mind of a digital product into a reality. For any platform you consider."
					logo={<RiVipCrownLine color="#7E74F1" />}
				/>
				<CSpecialty
					title="Application Development"
					description="Standard designing, building, and implementing your application with documentation."
					logo={<GoStack color="#7E74F1" />}
				/>
				<CSpecialty
					title="Web Development"
					description="Create and maintain your websites and also take care of its performance and traffic capacity"
					logo={<HiOutlineGlobeAlt color="#7E74F1" />}
				/>
			</div>
		</div>
	)
}

export default Specialty
