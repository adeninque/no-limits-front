import s from './page.module.scss'
import joinClasses from "@/utils/joinClasses";
import Map from './Map'
import getPlaces from "@/server/getPlaces";

const Events = async () => {
  const places = await getPlaces()
  return (
    <>
      <div className="container">
        <Map places={places}/>
      </div>
    </>
  )
};

export default Events;