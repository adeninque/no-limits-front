import Image from 'next/image'
import s from './page.module.scss'
import Header from "@/components/header/Header";
import joinClasses from "@/utils/joinClasses";
import Carousel from "@/components/carousel/Carousel";
import getEvents from "@/server/getEvents";
import EventInCarousel from "@/app/EventInCarousel";
import EventCard from "@/components/eventCard/EventCard";

export default async function Home() {
  const events = await getEvents()
  return (
    <main className={joinClasses(s.home, 'container')}>
      <Carousel>
        {events.map((event, index) => (
          <EventInCarousel {...event} key={index}/>
        ))}
      </Carousel>

      <h2 className={joinClasses('title', s.home__title)}>Ивенты</h2>
      <div className={s.home__events}>
        {events.map((event, index)=>(
          <EventCard event={event} key={event.id}/>
        ))}
      </div>
    </main>
  )
}
