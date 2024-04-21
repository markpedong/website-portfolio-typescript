import classNames from 'classnames'
import styles from './styles.module.scss'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import Header from '../header'
import Image from 'next/image'
import { inter, jakartaB } from '../../../public/fonts'
import React, { FC, useEffect } from 'react'
import { SocialMedia, TDetailsItem, TLinksItem } from '../../../api'
import Link from 'next/link'

const Content: FC<{ data: TDetailsItem; links: TLinksItem[] }> = ({ data, links }) => {
	console.log('@@@', links)

	const renderLink = (type: string, icon: React.ReactNode) => {
		const currLink = links?.find(q => q.type === type)
		return currLink && <Link href={currLink?.link}>{icon}</Link>
	}

	return (
		<div className={styles.mainContentWrapper}>
			<div className={styles.nameContainer}>
				<Header title="My name is" />
				<span className={classNames(jakartaB.className, styles.title)}>
					{data?.first_name} <p style={{ color: '#7E74F1' }}>{data?.last_name}.</p>
				</span>
				<span className={inter.className}>{data?.description}</span>
				<div>
					{renderLink(SocialMedia.Instagram, <FaInstagram className="h-full w-full" />)}
					{renderLink(SocialMedia.GitHub, <FaGithub className="h-full w-full" />)}
					{renderLink(SocialMedia.Twitter, <FaTwitter className="h-full w-full" />)}
					{renderLink(SocialMedia.LinkedIn, <FaLinkedin className="h-full w-full" />)}
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
