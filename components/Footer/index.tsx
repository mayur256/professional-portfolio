// Top level imports
import { ReactElement } from 'react'

// Component definition
export const Footer = (): ReactElement => {
	return (
		<footer className="dark:bg-gray-900 fixed bottom-0 left-0 right-0 bg-lime-200">
			<div className="flex flex-col md:space-y-0 md:flex-row justify-between md:items-center p-4">
				<div>
					<p>&copy; Your Name. All Rights Reserved.</p>
				</div>
				<div>
					<div>
						Developed by
						<div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
							<a className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50">
								Mayur Upadhayay
							</a>
						</div>
					</div>
				</div>
				{/* <div className="space-x-4 flex flex-row items-center"></div> */}
			</div>
		</footer>
	)
}
