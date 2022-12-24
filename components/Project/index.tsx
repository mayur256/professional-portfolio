// Top level imports
import { ReactElement } from 'react'

// Components
import { ProjectCard } from 'components/ProjectCard'

// Utils
import { projects } from '@utils/user-data'

// Component definition
export const Project = (): ReactElement => {
	return (
		<section className="bg-white dark:bg-gray-800">
			<div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
				<h1 className="text-4xl md:text-8xl font-bold py-20 text-center md:text-left">
					Projects
				</h1>
			</div>

			{/* Grid starts here */}
			<div className="dark:bg-gray-900">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
					{projects.map((proj, idx) => {
						return (
							<ProjectCard
								key={`${proj.name}-${idx}`}
								name={proj.name}
								image={proj.image}
								description={proj.description}
								projectUrl={proj.url}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
