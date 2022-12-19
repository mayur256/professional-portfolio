// top level imports
import { ReactElement, useEffect } from 'react'
import Image from 'next/image'

// AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

// Component definition
export const Banner = (): ReactElement => {
	const name = 'Mayur Upadhyay'
	const description = `I am a Full Stack Software Engineer with a demonstrated history of working in technologies like React, Node, Vue and Laravel for over 2.8+ years. Strong engineering professional with a Master's degree focused in Computer Science.`

	// component mounted
	useEffect(() => {
		Aos.init()
	}, [])

	// Main JSX
	return (
		<div className="flex flex-row justify-center items-start overflow-hidden">
			{/** Texts Container */}
			<div className="w-full md:w-2/3 mx-auto text-center md:text-left lg:p-20">
				<div data-aos="fade-left" data-aos-duration="1000">
					<span className="text-1xl font-bold">
						Hello, my name is{' '}
					</span>
					<h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
						{name}
					</h1>
					<div className="md:text-2xl">
						<p
							dangerouslySetInnerHTML={{ __html: description }}
						></p>
					</div>
				</div>
			</div>

			{/* Image container */}
			<div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
				<div
					className="w-3/4"
					data-aos="fade-left"
					data-aos-duration="1000"
				>
					<Image
						src="/profile.jpg"
						alt="profile-mayur-upadhayay"
						className="shadow"
						height={200}
						width={450}
					/>
				</div>
			</div>
		</div>
	)
}
