'use client'

import React, { useState } from 'react'
import styles from './styles.module.scss'
import Header from '../header'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'
import { motion } from 'framer-motion'
import { Skeleton } from '../ui/skeleton'
import classNames from 'classnames'

const jakarta = Plus_Jakarta_Sans({ weight: '700', subsets: ['latin'] })

const PortfolioHeader = () => {
	const { scrollNext, scrollPrev } = useCarousel()
	return (
		<div className={styles.headerContainer}>
			<span className={jakarta.className}>Featured Portfolios</span>
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

const Portfolio = () => {
	const [hoveredItem, setHoveredItem] = useState(null)

	return (
		<div className={styles.portfolioWrapper}>
			<Header title="my works" />
			<Carousel opts={{ loop: true }}>
				<PortfolioHeader />
				<CarouselContent className="mt-[5rem]">
					{[1, 2, 3, 4, 5, 6].map((item, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-14">
							<div className={'relative w-full'}>
								<Card className={hoveredItem === item && styles.activeCard}>
									<CardContent
										className={styles.cardContainer}
										onMouseEnter={() => setHoveredItem(item)}
										onMouseLeave={() => setHoveredItem(null)}
									>
										{hoveredItem === item && (
											<motion.div
												initial={{ opacity: 0, y: 50 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: 50 }}
												transition={{ duration: 0.2 }}
												className={styles.extraContainer}
											>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, excepturi.
											</motion.div>
										)}
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default Portfolio
