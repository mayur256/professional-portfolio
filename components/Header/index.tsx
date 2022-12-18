// Top level imports
import { ReactElement, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

// component definition
export const Header = (): ReactElement => {
	// state definition
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	// Main JSX
	return (
		<div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
			<div className="flex md:flex-row justify-between items-center">
				<div className="flex flex-col">
					<h1 className="">Mayur</h1>
					<p className="text-base font-light text-gray-500 dark:text-gray-300">
						Software Developer
					</p>
				</div>

				<button
					aria-label="Toggle Dark Mode"
					type="button"
					className="w-10 h-10 p-3 rounded"
					onClick={() =>
						setTheme(theme === 'dark' ? 'light' : 'dark')
					}
				>
					{mounted && (theme === 'dark' ? 'Light' : 'Dark')}
				</button>
			</div>
		</div>
		//Rest of the code
	)
}
