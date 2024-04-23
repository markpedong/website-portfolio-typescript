'use client'

import { scaleSize } from '@/constants'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { inter, interM, jakartaB, jakartaM } from '../../../public/fonts'
import Header from '../header'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import styles from './styles.module.scss'
import { FC } from 'react'
import { TBlogsItem } from 'api'

const Blogs: FC<{ data: TBlogsItem[] }> = ({ data }) => {
	return (
		<div className={styles.blogsWrapper} id="blogs__el">
			<div className={styles.titleWrapper}>
				<Header title="my articles" />
				<span className={classNames(styles.title, jakartaB.className)}>Personal Blog</span>
			</div>
			<Carousel opts={{ loop: true }} className="w-full">
				<CarouselContent className="mt-[5rem]">
					{[1, 2, 3, 4, 5, 6].map((item, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
							<div className={styles.blogContainer}>
								<div className={styles.imgContainer}>
									<Image src={''} alt={''} width={200} height={40} />
								</div>
								<div className={styles.dataContainer}>
									<p className={classNames(styles.title, jakartaM.className)}>{'TEST 1'}</p>
									<span className={classNames(styles.date, interM.className)}>{'July 15, 2021'}</span>
									<span className={classNames(inter.className, styles.description)}>
										{
											'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quisquam officia excepturi ducimus, sed minima.'
										}
									</span>
									<motion.span
										whileTap={scaleSize}
										className={classNames(interM.className, styles.btn)}
									>
										Continue Reading
									</motion.span>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default Blogs
