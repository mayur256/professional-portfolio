// Top level imports
import { ReactElement } from 'react'

// Props type definitions
interface IProps {
	title: string
	description: string
	year: string
	company: string
	companyUrl: string
	showDivider: boolean
}

// Expierience divider
function Divider(): ReactElement {
	return (
		<div className="divider-container flex flex-col items-center -mt-2">
			<div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
				<div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
			</div>
			<div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
		</div>
	)
}
// Component definition
export const ExperienceCard = ({
	title,
	description,
	year,
	company,
	companyUrl,
	showDivider,
}: IProps): ReactElement => {
	return (
		<>
			<div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
				<h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
					{year}
				</h1>
				<h1 className="font-semibold text-xl">{title}</h1>
				<a href={companyUrl} className="text-gray-500">
					{company}
				</a>
				<p className="text-gray-600 dark:text-gray-400 my-2">
					{description}
				</p>
			</div>

			{showDivider && <Divider />}
		</>
	)
}
