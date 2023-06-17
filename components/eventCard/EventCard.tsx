import s from './EventCard.module.scss'
import IEvent from "@/interfaces/IEvent";
import Link from "next/link";

interface EventCardProps {
  event: IEvent
}

const EventCard = ({event}: EventCardProps) => {
  return (
    <main className={s.event}>
      <h2 className={s.event__title}>{event.title}</h2>
      <Link className={s.event__btn} href={'#'}>Подробнее</Link>
    </main>
  )
};

export default EventCard;