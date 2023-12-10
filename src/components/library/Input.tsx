// components/library/Input.tsx

import { twMerge } from "tailwind-merge"

// Define the type for the props the Input will accept
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string // Optional label prop
	description?: string // Optional description prop
}

export const Input: React.FC<InputProps> = ({
	label,
	description,
	className,
	...props
}) => {
	// Base classes
	const baseClasses: string =
		"block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"

	// Disabled classes
	const disabledClasses: string =
		"disabled:pointer-events-none disabled:opacity-50"
	// Merge the base classes with any additional classes while removing duplicates/conflicts
	let mergedClasses = twMerge([baseClasses, className])

	if (props.disabled) {
		mergedClasses = twMerge([mergedClasses, disabledClasses])
	}

	// Return the Input with the base classes and any additional classes
	return (
		<div className="max-w-sm space-y-3">
			{label && (
				<label className="mb-2 block text-sm font-medium dark:text-white">
					{label}
				</label>
			)}
			<input
				className={mergedClasses}
				{...props} // Spread any additional props
			/>
			{description && (
				<p className="mt-2 text-sm text-gray-500">{description}</p>
			)}
		</div>
	)
}
