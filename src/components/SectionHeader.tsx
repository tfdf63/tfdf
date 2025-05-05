import React from 'react'

interface SectionHeaderProps {
	title: string
	subtitle?: string
	level?: 'primary' | 'secondary' | 'tertiary'
	withAccent?: boolean
	lightMode?: boolean
	className?: string
	headerClassName?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
	title,
	subtitle,
	level = 'primary',
	withAccent = false,
	lightMode = false,
	className = '',
	headerClassName = '',
}) => {
	const headingClass = `heading-${level} ${
		withAccent ? 'heading-with-accent' : ''
	} ${lightMode ? 'heading-light' : ''} ${headerClassName}`

	const HeadingTag =
		level === 'primary' ? 'h1' : level === 'secondary' ? 'h2' : 'h3'

	return (
		<div className={`mb-6 ${className}`}>
			<HeadingTag className={headingClass}>{title}</HeadingTag>
			{subtitle && (
				<p
					className={`mt-2 ${
						lightMode ? 'text-neutral-light' : 'text-gray-600'
					}`}
				>
					{subtitle}
				</p>
			)}
		</div>
	)
}
