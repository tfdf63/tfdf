import React from 'react'
import { Container } from './Container'

interface PageLayoutProps {
	children: React.ReactNode
	className?: string
	containerClassName?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({
	children,
	className = '',
	containerClassName = '',
}) => {
	return (
		<main className={className}>
			<div
				className='fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1] hidden md:block'
				style={{ backgroundImage: 'url(/images/bg-players.jpg)' }}
			/>
			<Container className={containerClassName}>{children}</Container>
		</main>
	)
}
