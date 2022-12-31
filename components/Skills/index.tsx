// top level imports
import { ReactElement } from 'react'

// Multi-carousel
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Components
import { _80 } from 'components/Meters/_80'

// Component definition
export const Skills = (): ReactElement => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}

	const skills = [
		{ id: 1, name: 'web development', skillMeter: <_80 /> },
		{ id: 2, name: 'web development', skillMeter: <_80 /> },
		{ id: 3, name: 'web development', skillMeter: <_80 /> },
		{ id: 4, name: 'web development', skillMeter: <_80 /> },
		{ id: 5, name: 'web development', skillMeter: <_80 /> },
		{ id: 6, name: 'web development', skillMeter: <_80 /> },
	]

	// Main JSX
	return (
		<section id="skills" className="m-8 p-8 skill-slider">
			<div className="max-w-6xl mx-auto h-24 bg-white dark:bg-gray-800">
				<h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
					Skills - listed in order of competence
				</h1>
			</div>

			<Carousel responsive={responsive}>
				{skills.map((skill) => (
					<div className="item" key={skill.id}>
						{skill.skillMeter}
						<h5 className="capitalize text-2xl">{skill.name}</h5>
					</div>
				))}
			</Carousel>
		</section>
	)
}
