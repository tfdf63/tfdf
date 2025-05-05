'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// Типы изображений для разных устройств
interface SlideImage {
	desktop: string // 1920x1080 для десктопов и планшетов
	mobile: string // Вертикальные для мобильных
	alt: string
}

interface ImageSliderProps {
	images: SlideImage[]
	interval?: number // Интервал в миллисекундах между сменой слайдов
	className?: string
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
	images,
	interval = 3000, // По умолчанию 3 секунды
	className = '',
}) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isMobile, setIsMobile] = useState(false)
	const [isClient, setIsClient] = useState(false)

	// Проверяем, что мы на клиенте
	useEffect(() => {
		setIsClient(true)
	}, [])

	// Определяем, мобильное ли устройство
	useEffect(() => {
		if (!isClient) return

		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}

		// Проверяем при загрузке
		checkIsMobile()

		// И при изменении размера окна
		window.addEventListener('resize', checkIsMobile)

		return () => {
			window.removeEventListener('resize', checkIsMobile)
		}
	}, [isClient])

	// Автоматическое переключение слайдов
	useEffect(() => {
		if (!isClient) return

		const timer = setInterval(() => {
			setCurrentIndex(prevIndex =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			)
		}, interval)

		return () => {
			clearInterval(timer)
		}
	}, [images.length, interval, isClient])

	// Если мы на сервере или компонент только что загрузился на клиенте,
	// показываем статичную версию без интерактивности
	if (!isClient) {
		return (
			<div
				className={`relative overflow-hidden w-full aspect-video ${className}`}
			>
				<div className='absolute top-0 left-0 w-full h-full'>
					{images.length > 0 && (
						<Image
							src={images[0].desktop}
							alt={images[0].alt}
							fill
							className='object-cover'
							priority={true}
						/>
					)}
				</div>
			</div>
		)
	}

	return (
		<div
			className={`relative overflow-hidden ${
				isMobile ? 'h-[60vh]' : 'w-full aspect-video'
			} ${className}`}
		>
			{images.map((image, index) => (
				<div
					key={index}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
						index === currentIndex ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<Image
						src={isMobile ? image.mobile : image.desktop}
						alt={image.alt}
						fill
						className='object-cover'
						priority={index === 0}
						sizes={
							isMobile
								? '(max-width: 768px) 100vw, 0px'
								: '(min-width: 768px) 100vw, 0px'
						}
					/>
				</div>
			))}

			{/* Индикаторы слайдов */}
			<div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2'>
				{images.map((_, index) => (
					<button
						key={index}
						className={`w-2 h-2 rounded-full transition-all ${
							index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
						}`}
						onClick={() => setCurrentIndex(index)}
						aria-label={`Перейти к слайду ${index + 1}`}
					/>
				))}
			</div>
		</div>
	)
}
