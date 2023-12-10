// components/site/Section.tsx
// A section used to group the documentation components for a type/variant of a custom UI component
export const Section = ({
	title,
	description,
	children,
}: {
	title: string
	description: string
	children: React.ReactNode
}) => {
	return (
		<div>
			{/* Section heading  */}
			<h2 className="text-lg font-bold text-gray-800 dark:text-white">
				{title}
			</h2>
			{/* Section description  */}
			<p className="mt-1 text-gray-600 dark:text-zinc-400">{description}</p>
			{/* Section preview area */}
			<div className="mt-3">
				<div className="flex flex-col rounded-xl border p-6 shadow-sm dark:border-zinc-700 dark:bg-transparent">
					<div className="flex flex-wrap gap-2">
						{/* The previewed stuff aka child components */}
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
