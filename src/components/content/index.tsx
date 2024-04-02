import classNames from 'classnames'
import styles from './styles.module.scss'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ weight: '500', subsets: ['latin'] })
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
				<span>3</span>
				<div>4</div>
			</div>
			<div>2</div>
		</div>
	)
}

export default Content
