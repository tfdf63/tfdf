import { SectionHeader } from '../components/SectionHeader'
import { PageLayout } from '../components/PageLayout'
import { ImageSlider } from '../components/ImageSlider'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
// Данные для слайдера
const sliderImages = [
	{
		desktop: '/images/slider/desktop-1.jpg',
		mobile: '/images/slider/mobile-1.jpg',
		alt: 'Игроки флаинг диска в действии',
	},
	{
		desktop: '/images/slider/desktop-2.jpg',
		mobile: '/images/slider/mobile-2.jpg',
		alt: 'Тренировка по флаинг диску',
	},
	{
		desktop: '/images/slider/desktop-3.jpg',
		mobile: '/images/slider/mobile-3.jpg',
		alt: 'Тренировка по флаинг диску',
	},
	{
		desktop: '/images/slider/desktop-4.jpg',
		mobile: '/images/slider/mobile-4.jpg',
		alt: 'Соревнования по флаинг диску',
	},
	{
		desktop: '/images/slider/desktop-5.jpg',
		mobile: '/images/slider/mobile-5.jpg',
		alt: 'Соревнования по флаинг диску',
	},
	{
		desktop: '/images/slider/desktop-6.jpg',
		mobile: '/images/slider/mobile-6.jpg',
		alt: 'Соревнования по флаинг диску',
	},
]

export default function Home() {
	return (
		<PageLayout>
			<Header />
			<div className='py-8'>
				<div className='mb-8'>
					<ImageSlider images={sliderImages} className='rounded-lg shadow-md' />
					<div className='mt-2 text-center'>
						<p className='text-lg text-gray-700'>
							Федерация флаинг диска Тольятти - популяризация активного образа
							жизни
						</p>
					</div>
				</div>

				<div className='my-8'>
					<SectionHeader title='О нас' level='secondary' />
					<p className='mt-4'>Информация о федерации и её деятельности...</p>
				</div>

				<div className='my-8'>
					<SectionHeader title='Наши мероприятия' level='secondary' />
					<div className='mt-4 grid gap-4 md:grid-cols-2'>
						<div className='p-4 border border-gray-200 rounded-lg'>
							<SectionHeader title='Тренировки' level='tertiary' />
							<p>Расписание тренировок и информация о них</p>
						</div>
						<div className='p-4 border border-gray-200 rounded-lg'>
							<SectionHeader title='Соревнования' level='tertiary' />
							<p>Календарь соревнований и результаты</p>
						</div>
					</div>
				</div>

				<div className='bg-primary-dark text-white p-6 rounded-lg my-2'>
					<SectionHeader
						title='Присоединяйтесь к нам'
						level='secondary'
						lightMode={true}
					/>
					<p className='mt-4'>Информация о том, как стать частью команды</p>
				</div>
			</div>
			<Footer />
		</PageLayout>
	)
}
