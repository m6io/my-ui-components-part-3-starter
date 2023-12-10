// components/library/Card.tsx

import { twMerge } from "tailwind-merge"

// Define the type for the props the Card will accept
type CardContainerProps = React.HTMLAttributes<HTMLDivElement>

export const CardContainer: React.FC<CardContainerProps> = ({
	className,
	children,
	...props
}) => {
	// Base classes
	const baseClasses: string =
		"rounded-xl border bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-zinc-700/[.7]"

	// Merge the base classes with any additional classes while removing duplicates/conflicts
	const mergedClasses = twMerge([baseClasses, className])

	// Return the Card with the base classes and any additional classes
	return (
		<div
			className="w-full max-w-xs"
			{...props} // Spread any additional props
		>
			<div className={mergedClasses}>{children}</div>
		</div>
	)
}

// This type of card is for displaying content, as well as an optional header and footer.
export const ContentCard = ({
	header,
	footer,
	title,
	subtitle,
	plaintext,
	link,
	children,
}: {
	header?: string
	footer?: string
	title?: string
	subtitle?: string
	plaintext?: string
	link?: {
		url: string
		text: string
	}
	children?: React.ReactNode
}) => {
	return (
		<CardContainer>
			{header && (
				<div className="rounded-t-xl border-b bg-gray-100 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500 dark:text-zinc-500">
						{header}
					</p>
				</div>
			)}

			<div className="flex flex-col p-4 md:p-5">
				{title && (
					<h3 className="text-lg font-bold text-gray-800 dark:text-white">
						{title}
					</h3>
				)}
				{subtitle && (
					<p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-zinc-500">
						{subtitle}
					</p>
				)}
				{plaintext && (
					<p className="mt-2 text-gray-800 dark:text-zinc-400">{plaintext}</p>
				)}
				{children}
				{link && (
					<a
						className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
						href={link.url}
					>
						{link.text}
					</a>
				)}
			</div>
			{footer && (
				<div className="rounded-b-xl border-t bg-gray-100 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800 md:px-5 md:py-4">
					<p className="mt-1 text-sm text-gray-500 dark:text-zinc-500">
						{footer}
					</p>
				</div>
			)}
		</CardContainer>
	)
}

// This type of card is for providing block links.
export const BlockLinkCard = ({
	url,
	text,
	children,
}: {
	url?: string // URL for the link. If not provided, defaults to "#".
	text?: string // Text content to be displayed in the card.
	children: React.ReactNode // Children elements to be rendered inside the card.
}) => {
	const linkClasses: string = "flex flex-col items-center p-6 sm:p-10"
	const linkContent = (
		<>
			{children}
			{text && <p className="mt-2 font-medium">{text}</p>}
		</>
	)
	return (
		<CardContainer className="text-gray-800 transition-colors hover:bg-gray-200/50 dark:text-white dark:hover:bg-zinc-700/50">
			<a className={linkClasses} href={url || "#"} target="_blank">
				{linkContent}
			</a>
		</CardContainer>
	)
}
