'use client'

import React, { FC, useState } from 'react'
import styles from './styles.module.scss'
import Header from '../header'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { jakartaB, jakartaM } from '../../../public/fonts'
import { IoMdLink } from 'react-icons/io'
import { TPortfolioItem } from 'api'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioHeader = () => {
	const { scrollNext, scrollPrev } = useCarousel()
	return (
		<div className={styles.headerContainer}>
			<span className={jakartaB.className}>Featured Portfolios</span>
			<div className={styles.arrowContainer}>
				<div>
					<FaChevronLeft onClick={scrollPrev} />
				</div>
				<div>
					<FaChevronRight onClick={scrollNext} />
				</div>
			</div>
		</div>
	)
}

const Portfolio: FC<{ data: TPortfolioItem[] }> = ({ data }) => {
	const [hoveredItem, setHoveredItem] = useState(null)

	return (
		<div className={styles.portfolioWrapper} id="portfolio__el">
			<Header title="my works" />
			<Carousel opts={{ loop: true }} className="w-full">
				<PortfolioHeader />
				<CarouselContent className="mt-[5rem]">
					{data?.map((item, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
							<div
								className={classNames(hoveredItem === item && styles.activeCard, styles.cardContainer)}
								onMouseEnter={() => setHoveredItem(item)}
								onMouseLeave={() => setHoveredItem(null)}
							>
								<Image
									className="object-cover object-right-top"
									src={item?.image}
									alt="image_project"
									fill
									sizes="(max-width: 100vw) 100vw"
									quality={100}
									priority
								/>
								{hoveredItem === item && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.2 }}
										className={styles.extraContainer}
									>
										<span className={classNames(styles.title, jakartaM.className)}>{item?.title}</span>
										<div className={styles.techContainer}>
											{item?.tech?.map(w => (
												<span>{w}</span>
											))}
											<Link href={item?.link} target="_blank">
												<IoMdLink color="#656D72" />
											</Link>
										</div>
									</motion.div>
								)}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default Portfolio
