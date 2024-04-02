import React, { FC } from 'react'
import { Inter } from 'next/font/google'
import styles from './styles.module.scss'
import classNames from 'classnames'

const inter = Inter({ weight: '500', subsets: ['latin'] })

type Props = {
	title: string
}

const Header: FC<Props> = ({ title }) => {
	return (
		<div className={classNames(inter.className, styles.headerWrapper)}>
			<p>-</p>
			<span>{title}</span>
		</div>
	)
}

export default Header
