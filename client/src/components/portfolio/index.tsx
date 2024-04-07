'use client'

import React, { useState } from 'react'
import styles from './styles.module.scss'
import Header from '../header'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { jakartaB, jakartaM } from '../../../public/fonts'
import { IoMdLink } from 'react-icons/io'

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
												<span className={classNames(styles.title, jakartaM.className)}>Agency Website</span>
												<div className={styles.techContainer}>
													<span>WordPress</span>
													<span>React</span>
													<IoMdLink color="#656D72" />
												</div>
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