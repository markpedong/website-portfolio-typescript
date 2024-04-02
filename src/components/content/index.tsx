import classNames from 'classnames'
import styles from './styles.module.scss'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const inter = Inter({ weight: '500', subsets: ['latin'] })
const interR = Inter({ weight: '400', subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({ weight: '700', subsets: ['latin'] })

const Content = () => {
	return (
		<div className={styles.mainContentWrapper}>
			<div className={styles.nameContainer}>
				<span className={inter.className}>
					<p>-</p>
					My name is
				</span>
				<span className={jakarta.className}>
					Lorem, <p style={{ color: '#7E74F1' }}>ipsum.</p>
				</span>
				<span className={interR.className}>
					Create front-end developer with more than +2 years of experience in enterprise companies. Proficient
					in Sass, NextJS and JavaScript. Passionate about Golang.
				</span>
				<div>
					<FaInstagram />
					<FaGithub />
					<FaTwitter />
					<FaLinkedin />
				</div>
			</div>
			<div>2</div>
		</div>
	)
}

export default Content
