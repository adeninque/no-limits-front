import IPlace from "@/interfaces/IPlace";




export default async function getPlaces(): Promise<IPlace[]> {
	return [
		{
			lat: 42.87621, 
			lon: 74.61444,
			good_place: true,
			description: "Цум, 5й Этаж детская площадка - бесплатная",
			name: "ЦУМ «Айчурек»",
			id: 3,
			address: "ЦУМ «Айчурек», 155, Чуй проспект, Свердловский район, город Бишкек, 720000, Киргизия"
		}, 
		{
			name: "ТехноПарк",
			address: "Технопарк, 1/3, Анкара улица, Октябрьский район, город Бишкек, 720082, Киргизия",
			lat: 42.85723, 
			lon: 74.63571,
			description: "Десткая площадка - бесплатно",
			id: 4,
			good_place: true
		},
		{
			lat: 42.878041,
			lon: 74.612502,
			good_place: true,
			description: 'somet very long description',
			name: 'Театр оперы и балета им. Абдыласа Малдыбаева',
			id: 1,
			address: 'Улица Юсупа Абдрахманова, 167'
		},
		{
			lat: 42.879609,
			lon: 74.613559,
			good_place: true,
			description: 'somet very long description',
			name: 'Центральная мечеть им. Имам Сарахси',
			id: 1,
			address: 'Проспект Жибек-Жолу, 264'
		},
		{
			lat: 42.882631,
			lon: 74.614168,
			good_place: false,
			description: 'somet very long description',
			name: 'Центральный музей МВД КР им. полковника С. Наматбаева ',
			id: 1,
			address: 'Улица Жумабека, 129/1'
		},
		{
			lat: 42.880371,
			lon: 74.61321,
			good_place: true,
			description: 'somet very long description',
			name: 'Кыргызская национальная филармония им. Т. Сатылганова',
			id: 1,
			address: 'Проспект Чуй, 251'
		}
	]
}