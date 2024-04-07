import styles from './styles.module.scss'
import Header from '../header'
import classNames from 'classnames'
import { RiVipCrownLine } from 'react-icons/ri'
import React from 'react'
import { GoStack } from 'react-icons/go'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { inter, jakartaB, jakartaM } from '../../../public/fonts'

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
				<span className={classNames(styles.title, jakartaB.className)}>Specialized In</span>
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
