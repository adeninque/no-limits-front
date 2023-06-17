
import s from './EventInCarousel.module.scss'

interface EventInCarouselProps {
	title: string,
	bannerUrl?: string,
	id: number
}

const EventInCarousel = ({title, bannerUrl, id}: EventInCarouselProps) => {
  return (
    <main className={s.event} style={bannerUrl ? {backgroundImage: `url(${bannerUrl})`} : {backgroundColor: '#0093E9', background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'}}>
	    <h1 className={s.event__title}>{title}</h1>
	    <button className={s.event__btn}>Подробнее</button>
    </main>
  )
};

export default EventInCarousel;