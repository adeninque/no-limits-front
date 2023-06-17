'use client'

import s from './page.module.scss'
import {useEffect, useState} from "react";

interface CarouselProps {
	children: React.ReactNode[]
}

const Carousel = ({ children }: CarouselProps) => {
	const [curr, setCurr] = useState(0)
	useEffect(() => {
		const interval = setInterval(() => {
			setCurr(prev => (prev + 1) % children.length)
		}, 5000)

		return () => clearInterval(interval)
	})

  return (
    <main className={s.carousel}>
	    <div className={s.carousel__image}>
		    {children[curr]}
	    </div>
	    <div className={s.carousel__layout}>
		    <div className={s.carousel__prev}></div>
		    <div className={s.carousel__next}></div>
	    </div>
    </main>
  )
}

export default Carousel;