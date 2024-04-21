import classNames from 'classnames'
import styles from './styles.module.scss'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import Header from '../header'
import Image from 'next/image'
import { inter, jakartaB } from '../../../public/fonts'
import { FC, useEffect } from 'react'
import { TDetailsItem } from '../../../api'

const Content: FC<{ data: TDetailsItem }> = ({ data }) => {
	console.log('@@@', data?.first_name)

	return (
		<div className={styles.mainContentWrapper}>
			<div className={styles.nameContainer}>
				<Header title="My name is" />
				<span className={classNames(jakartaB.className, styles.title)}>
					{data?.first_name} <p style={{ color: '#7E74F1' }}>{data?.last_name}.</p>
				</span>
				<span className={inter.className}>{data?.description}</span>
				<div>
					<FaInstagram />
					<FaGithub />
					<FaTwitter />
					<FaLinkedin />
				</div>
			</div>
			<div className={styles.imageContainer}>
				<div>
					<Image src={'/assets/self.png'} alt="self" height={400} width={200} />
				</div>
				<div></div>
				<div>
					<Image src={'/assets/lines.svg'} alt="lines" height={200} width={50} />
				</div>
			</div>
		</div>
	)
}

export default Content
