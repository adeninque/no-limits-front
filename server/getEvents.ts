import IEvent from "@/interfaces/IEvent";

export default async function getEvents(): Promise<IEvent[]> {
	return [
		{
			title: 'Праздник для особенных детей',
			bannerUrl: 'https://static.365info.kz/uploads/2019/10/96bc4034c2514639af4cbf65ad27ab88.jpg',
			id: 1
		},
		{
			title: 'Миссия добро',
			bannerUrl: 'https://sputnik.kg/img/07e7/06/10/1076278179_0:0:3072:2048_1440x900_80_0_1_0a044d50479441e5836b31b5f0645e1c.jpg.webp?source-sid=not_rian_photo',
			id: 2
		},
		{
			title: 'Проект сегодня',
			bannerUrl: 'https://sun9-48.userapi.com/impg/IBmLVjOb0Dzwg6LZqwOFjuA7qePwakOnSeKNMA/bO11OopLX9A.jpg?size=415x604&quality=96&sign=3b531bdb68fdecf344ff5187d2e489a0&c_uniq_tag=Uw-dhwB6T2jEhFJLp_LYNux17G9v6AL22f1PrG5TgJQ&type=album',
			id: 3
		}
	]
}