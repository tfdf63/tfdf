'use client'

import React from 'react'
import { Container } from './Container'
import Link from 'next/link'
import { SectionHeader } from './SectionHeader'

export const Header: React.FC = () => {
	return (
		<>
			{/* Верхняя шапка с логотипом, видна только на десктопах */}
			<header className='py-2 bg-white border-b border-gray-200 relative hidden lg:block'>
				<Container>
					<div className='flex justify-between items-center w-full'>
						<Link href='/' className='block max-w-[70%] md:max-w-[50%] my-1'>
							<SectionHeader
								title='Федерация флаинг диска Тольятти'
								withAccent={true}
								className='!mb-0 flex items-center'
								headerClassName='leading-none py-0.5'
							/>
						</Link>

						{/* Десктопная навигация - показывается только на больших экранах */}
						<nav className='flex space-x-6 items-center h-full'>
							<Link
								href='/about'
								className='hover:text-primary-medium h-full flex items-center py-3 border-b-2 border-transparent hover:border-primary-light'
							>
								О нас
							</Link>
							<Link
								href='/events'
								className='hover:text-primary-medium h-full flex items-center py-3 border-b-2 border-transparent hover:border-primary-light'
							>
								Мероприятия
							</Link>
							<Link
								href='/contact'
								className='hover:text-primary-medium h-full flex items-center py-3 border-b-2 border-transparent hover:border-primary-light'
							>
								Контакты
							</Link>
						</nav>
					</div>
				</Container>
			</header>

			{/* Нижняя навигация для планшетов и мобильных устройств */}
			<nav className='lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-2 px-4 z-40'>
				<div className='flex justify-around items-center w-full'>
					{/* Ссылка на главную */}
					<Link
						href='/'
						className='text-primary-dark hover:text-primary-medium flex flex-col items-center'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
							/>
						</svg>
						<span className='text-xs mt-1'>Главная</span>
					</Link>

					<Link
						href='/about'
						className='text-primary-dark hover:text-primary-medium flex flex-col items-center'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
						<span className='text-xs mt-1'>ФФДТ</span>
					</Link>
					<Link
						href='/events'
						className='text-primary-dark hover:text-primary-medium flex flex-col items-center'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
							/>
						</svg>
						<span className='text-xs mt-1'>Мероприятия</span>
					</Link>
					<Link
						href='/contact'
						className='text-primary-dark hover:text-primary-medium flex flex-col items-center'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
							/>
						</svg>
						<span className='text-xs mt-1'>Контакты</span>
					</Link>
				</div>
			</nav>
		</>
	)
}
