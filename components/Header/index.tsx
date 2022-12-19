// Top level imports
import { ReactElement, useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

// component definition
export const Header = (): ReactElement => {
	// state definition
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// router hook
	const router = useRouter()

	// Component mounted
	useEffect(() => {
		setMounted(true)
	}, [])

	// Main JSX
	return (
		<div className="p-4">
			<div className="flex md:flex-row justify-between items-center">
				{/** Logo or header */}
				<div className="flex flex-col">
					<h1 className="font-semibold text-xl dark:text-gray-100">
						Mayur Upadhayay
					</h1>
					<p className="text-base text-gray-500 dark:text-white dark:font-bold">
						Software Developer
					</p>
				</div>

				{/** Navigation links */}
				<div className="space-x-8 hidden md:block">
					<Link
						href="/"
						className={`text-base  ${
							router.asPath === '/'
								? 'text-gray-800 font-bold dark:text-white'
								: 'text-gray-600 dark:text-gray-300 font-normal '
						}`}
					>
						Home{' '}
						{router.asPath === '/' && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-down inline-block h-3 w-3"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
								/>
							</svg>
						)}
					</Link>
				</div>

				{/** Social Links and theme toggler */}
				<div className="space-x-4 flex flex-row items-center">
					<button
						aria-label="Toggle Dark Mode"
						type="button"
						className="w-10 h-10 p-3 rounded focus:outline-none"
						onClick={() =>
							setTheme(theme === 'dark' ? 'light' : 'dark')
						}
					>
						{mounted && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								stroke="currentColor"
								className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
							>
								{theme === 'dark' ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								)}
							</svg>
						)}
					</button>
				</div>
			</div>
		</div>
		//Rest of the code
	)
}
