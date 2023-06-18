'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import { LatLngExpression } from "leaflet";
import s from "@/app/places/Map.module.scss";
import joinClasses from "@/utils/joinClasses";
import IPlace from "@/interfaces/IPlace";
import { redMarkerIcon, yellowMarkerIcon } from "@/utils/markerIcons";
import { animateScroll as scroll } from 'react-scroll'

interface MapProps {
	places: IPlace[]
}

const Map = ({ places }: MapProps) => {
	const center: LatLngExpression = [42.876452, 74.6036]
	const mapRef = useRef(null)
	const flyToPlace = (lat: number, lon: number) => {
		const map = mapRef.current;
		if (map) {
			// @ts-ignore
			map.flyTo([lat, lon], 18);
		}
	};

	const showOnMapHandler = (lat: number, lan: number) => {

		scroll.scrollToTop()
		flyToPlace(lat, lan)
	}

	return (
		<>
			<div className={joinClasses(s.map)}>
				<div className={s.map__body}>
					<MapContainer id={'map'} ref={mapRef} center={center} style={{ width: '100%', height: '100%' }} zoom={13}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						{places.map(place => (
							<Marker
								position={[place.lat, place.lon]}
								key={place.id}
								icon={place.good_place ? yellowMarkerIcon : redMarkerIcon}
								eventHandlers={{
									click: () => flyToPlace(place.lat, place.lon)
								}}
							>
								<Popup minWidth={500}>
									<b style={{ fontSize: "20px" }}>{`${place.name}`}</b>: <p style={{ fontSize: "18px" }}>{`${place.description}`}</p>
								</Popup>
							</Marker>
						))}
					</MapContainer>
					<h1 className={joinClasses(s.map__title, 'title')}>Места</h1>
					<div className={s.places} style={{ paddingBottom: "100px" }}>
						{places.map(place => (
							<div key={place.id} className={joinClasses(s.places__place, s.place)}>
								<h2 className={s.place__name}>{place.name}</h2>
								<p className={s.place__address}>{place.address}</p>
								<div className={s.place__btns}>
									<button className={s.place__btn}>Подробнее</button>
									<button className={s.place__btn} onClick={() => showOnMapHandler(place.lat, place.lon)}>На карте</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Map;