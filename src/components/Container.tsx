import React from 'react'

interface ContainerProps {
	children: React.ReactNode
	className?: string
}

export const Container: React.FC<ContainerProps> = ({
	children,
	className = '',
}) => {
	return (
		<div
			className={`mx-auto w-full bg-white px-4 sm:px-6 md:px-8 overflow-hidden md:max-w-[700px] lg:max-w-[900px] ${className}`}
		>
			{children}
		</div>
	)
}
