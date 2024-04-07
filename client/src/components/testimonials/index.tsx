'use client'

import React from 'react'
import Header from '../header'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { inter, jakartaB, jakartaM } from '../../../public/fonts'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Image from 'next/image'

type Props = {}

const Testimonials = (props: Props) => {
	return (
		<div>
			<Header title="my clients" />
			<div className={classNames(styles.header, jakartaB.className)}>Testimonials</div>
			<Carousel opts={{ loop: true }} className="w-full">
				<CarouselContent className="mt-[5rem]">
					{[1, 2, 3, 4, 5, 6].map((item, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
							<div className={styles.testimonialContainer}>
								<div className={styles.imageContainer}>
									<Image src={''} alt="" width={60} height={60} />
								</div>
								<span className={classNames(styles.description, inter.className)}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit, aspernatur quis sed ullam
									itaque?
								</span>
								<span className={classNames(styles.author, jakartaM.className)}>Amelia Miller</span>
								<span className={styles.work}>Designer</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default Testimonials
