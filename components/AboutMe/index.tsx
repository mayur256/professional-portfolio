import { ReactElement } from 'react'

// top level imports
export function AboutMe(): ReactElement {
	return (
		<section className="bg-white dark:bg-gray-800">
			<div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
				<h1 className="text-4xl md:text-8xl font-bold py-20 text-center md:text-left">
					About
				</h1>
			</div>

			<div className="dark:bg-gray-900"></div>
		</section>
	)
}
