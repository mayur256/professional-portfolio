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
	description,
	image = '',
	projectUrl = '',
}: IProps): ReactElement => {
	return (
		<div className="rounded-2xl shadow-2xl w-full">
			<div className="relative overflow-hidden rounded-t">
				{/** Bg image */}
				<div className="object-cover h-64">
					<Image
						src={image}
						alt={name}
						className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
						fill
					/>
				</div>
			</div>

			{/** Hovering details */}
			<div className="px-6 py-4 bottom-0 backdrop-blur-xl">
				<div className="font-bold text-xl mb-2">
					<a
						href={projectUrl}
						className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						target="_blank"
						rel="noreferrer"
					>
						{name}
						<span className="text-indigo-200" aria-hidden="true">
							&rarr;
						</span>
					</a>
				</div>
				<p className="font-bold">{description}</p>
			</div>
		</div>
	)
}
