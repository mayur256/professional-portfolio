// top level imports
import { ReactElement } from 'react'
import { useTheme } from 'next-themes'

// Multi-carousel
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Components
import { _80 } from 'components/Meters/_80'
import { _95 } from 'components/Meters/_95'
import { _90 } from 'components/Meters/_90'

// Component definition
export const Skills = (): ReactElement => {
	// hooks
	const { theme } = useTheme()
	const fill: string | undefined = theme === 'dark' ? 'white' : undefined

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
		{ id: 1, name: 'web development', skillMeter: <_95 fill={fill} /> },
		{ id: 3, name: 'SDLC', skillMeter: <_90 fill={fill} /> },
		{ id: 2, name: 'TDD', skillMeter: <_80 fill={fill} /> },
		{ id: 4, name: 'OOPs', skillMeter: <_80 fill={fill} /> },
		{ id: 5, name: 'Debugging', skillMeter: <_80 fill={fill} /> },
	]

	// Main JSX
	return (
		<section id="skills" className="m-8 p-8 skill-slider">
			<div className="max-w-6xl mx-auto h-24 bg-white dark:bg-gray-800">
				<h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
					Skills - listed with competency meter
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
