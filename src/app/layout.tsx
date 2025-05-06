import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { YandexMetrika } from '../components/YandexMetrika'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'ФФДТ',
	description:
		'Федерация флаинг диска Тольятти - официальная организация, занимающаяся развитием и популяризацией флаинг диска в Тольятти. Мы проводим регулярные тренировки по дисциплинам: алтимат и диск-гольф, организуем соревнования и создаем условия для активного образа жизни через спорт. Присоединяйтесь к нашей команде и станьте частью сообщества флаинг диска!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
			>
				<div className='flex-grow'>{children}</div>
				<YandexMetrika />
			</body>
		</html>
	)
}
