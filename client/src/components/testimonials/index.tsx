'use client'

import React, { FC } from 'react'
import Header from '../header'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { inter, jakartaB, jakartaM } from '../../../public/fonts'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Image from 'next/image'
import { TTestimonialsItem } from 'api'

type Props = {}

const Testimonials: FC<{ data: TTestimonialsItem[] }> = ({ data }) => {
	return (
		<div>
			<Header title="my clients" />
			<div className={classNames(styles.header, jakartaB.className)}>Testimonials</div>
			<Carousel opts={{ loop: true }} className="w-full">
				<CarouselContent className="mt-[5rem]">
					{data?.map((q, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
							<div className={styles.testimonialContainer}>
								<div className={styles.imageContainer}>
									<Image src={q?.image} alt={q?.id} width={60} height={60} />
								</div>
								<span className={classNames(styles.description, inter.className)}>
									{q?.description}
								</span>
								<span className={classNames(styles.author, jakartaM.className)}>{q?.author}</span>
								<span className={styles.work}>{q?.job}</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default Testimonials
