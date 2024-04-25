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
import { dateTimeFormatter } from '@/lib/utils'
import Link from 'next/link'

const Blogs: FC<{ data: TBlogsItem[] }> = ({ data }) => {
	return (
		<div className={styles.blogsWrapper} id="blogs__el">
			<div className={styles.titleWrapper}>
				<Header title="my articles" />
				<span className={classNames(styles.title, jakartaB.className)}>Personal Blog</span>
			</div>
			<Carousel opts={{ loop: true }} className="w-full">
				<CarouselContent className="mt-[5rem]">
					{data?.map((item, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center" >
							<div className={styles.blogContainer}>
								<div className={styles.imgContainer}>
									<Image
										src={item?.image}
										alt={item?.id}
										width={200}
										height={40}
										priority
										quality={100}
									/>
								</div>
								<div className={styles.dataContainer}>
									<p className={classNames(styles.title, jakartaM.className)}>{item?.title}</p>
									<span className={classNames(styles.date, interM.className)}>
										{dateTimeFormatter(item?.date, 'MMMM-DD-YYYY')}
									</span>
									<span className={classNames(inter.className, styles.description)}>
										{item?.description}
									</span>
									<motion.span
										whileTap={scaleSize}
										className={classNames(interM.className, styles.btn)}
									>
										<Link href={item?.link} target="_blank">
											Continue Reading
										</Link>
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
