import { TServicesItem } from 'api'
import classNames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import { inter, jakartaB, jakartaM } from '../../../public/fonts'
import Header from '../header'
import styles from './styles.module.scss'

const CSpecialty: FC<{ item: TServicesItem }> = ({ item: { description, logo, title, id } }) => {
	return (
		<div className={styles.cspecialtyContainer}>
			<div>
				<Image style={{ color: '#7E74F1' }} src={logo} alt={id} height={20} width={20} />
			</div>
			<div className={jakartaM.className}>{title}</div>
			<div className={inter.className}>{description}</div>
		</div>
	)
}

const Specialty: FC<{ data: TServicesItem[] }> = ({ data }) => {
	return (
		<div className={styles.specialtyWrapper}>
			<div className={styles.titleWrapper}>
				<Header title="services" />
				<span className={classNames(styles.title, jakartaB.className)}>Specialized In</span>
			</div>
			<div className={styles.contentWrapper}>
				{data?.map(q => (
					<CSpecialty item={q} />
				))}
			</div>
		</div>
	)
}

export default Specialty
