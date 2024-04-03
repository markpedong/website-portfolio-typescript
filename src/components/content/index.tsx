import classNames from 'classnames'
import styles from './styles.module.scss'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import Header from '../header'
import Image from 'next/image'
import { inter, jakartaB } from '../../../public/fonts'

const Content = () => {
	return (
		<div className={styles.mainContentWrapper}>
			<div className={styles.nameContainer}>
				<Header title="My name is" />
				<span className={classNames(jakartaB.className, styles.title)}>
					Mark <p style={{ color: '#7E74F1' }}>Pedong.</p>
				</span>
				<span className={inter.className}>
					Creative front-end developer with more than +2 years of experience in enterprise companies and startups.
					Proficient in Sass, NextJS and JavaScript. Passionate about Golang.
				</span>
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
