import React from 'react'
import { Container } from './Container'
import Link from 'next/link'

export const Footer: React.FC = () => {
	return (
		<footer className='bg-neutral-light mt-2'>
			<Container>
				<div className='grid grid-cols-3 md:grid-cols-3 gap-2'>
					<div>
						<h3 className='text-primary-dark font-bold text-lg mb-4'>Ссылки</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='text-gray-600 hover:text-primary-medium'
								>
									О нас
								</Link>
							</li>
							<li>
								<Link
									href='/events'
									className='text-gray-600 hover:text-primary-medium'
								>
									Мероприятия
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gray-600 hover:text-primary-medium'
								>
									Контакты
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-primary-dark font-bold text-lg mb-4'>
							Контакты
						</h3>
						<address className='not-italic text-gray-600'>
							<p className='mt-2'>г.о. Тольятти</p>
							<a href='tel:+79276879750' className='mt-2 block'>
								+79276879750
							</a>
							<a
								href='mailto:tfdf63@yandex.ru'
								className='mt-2 block hover:text-primary-medium'
							>
								tfdf63@yandex.ru
							</a>
						</address>
					</div>
				</div>

				<div className='border-t border-gray-300 mt-8 py-6 text-center text-gray-500'>
					<p>
						&copy; 2016 - {new Date().getFullYear()} ФФДТ. Все права защищены.
					</p>
				</div>
			</Container>
		</footer>
	)
}
