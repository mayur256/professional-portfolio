// Top level imports
import Image from 'next/image'
import { ReactElement } from 'react'

// Props type definition
interface IProps {
	name: string
	description: string
	image: string
	projectUrl: string
}
// Component definition
export const ProjectCard = ({
	name = '',
	// description,
	image = '',
}: // projectUrl
Partial<IProps>): ReactElement => {
	return (
		<a className="w-full block shadow-2xl rounded">
			<div className="relative overflow-hidden">
				<div className="h-72 object-cover">
					<Image
						src={image}
						alt={name}
						className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
						fill
					/>
				</div>
			</div>
		</a>
	)
}
