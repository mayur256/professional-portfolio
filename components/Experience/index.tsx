// Top level imports
import { ReactElement } from 'react'

// Components
import { ExperienceCard } from '../ExperienceCard'

// Utils
import { experience } from '@utils/user-data'

// Main Component definition
export const Experience = (): ReactElement => {
	return (
		<section className="bg-white dark:bg-gray-800">
			<div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
				<h1 className=" text-4xl md:text-8xl font-bold py-20 text-center md:text-left">
					Experience
				</h1>
			</div>

			<div className="dark:bg-gray-900">
				<div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
					{/** Experiences timeline */}
					{experience.map((ex, idx) => {
						return (
							<ExperienceCard
								key={idx}
								title={ex.title}
								description={ex.description}
								company={ex.company}
								companyUrl={ex.companyUrl}
								year={ex.year}
								showDivider={
									experience.length - 1 === idx ? false : true
								}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
