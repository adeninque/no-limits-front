import IEvent from "@/interfaces/IEvent";

export default async function getEvents(): Promise<IEvent[]> {
	return [
		{
			title: 'Title 1',
			bannerUrl: 'https://images.wallpaperscraft.ru/image/single/krysha_arka_uzor_963074_1280x720.jpg',
			id: 1
		},
		{
			title: 'Title 2',
			id: 2
		},
		{
			title: 'Title 3',
			bannerUrl: 'https://images.wallpaperscraft.ru/image/single/most_reka_bashni_945340_1280x720.jpg',
			id: 3
		}
	]
}