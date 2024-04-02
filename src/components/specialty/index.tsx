import styles from './styles.module.scss'
import Header from '../header'
import { Plus_Jakarta_Sans } from 'next/font/google'
import classNames from 'classnames'

const jakarta = Plus_Jakarta_Sans({ weight: '700', subsets: ['latin'] })

type Props = {title: string, description: string, logo: string}
const CSpecialty = ({description, logo, title}: Props)=> {
  return (

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
    <CSpecialty title='UI/UX Design' description='Turn what you have in mind of a digital product into a reality. For any platform you consider.' logo='' />
    <CSpecialty title='Application Development' description='Standard designing, building, and implementing your application with documentation.' logo=''/>
    <CSpecialty title='Web Development' description='Create and maintain your websites and also take care of its performance and traffic capacity' logo=''/>
      </div>
		</div>
	)
}

export default Specialty
