// top level imports
import { ReactElement, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

// Utils
import { user } from '@utils/user-data'

// Component definition
export const Banner = (): ReactElement => {
	const { name, description } = user

	// component mounted
	useEffect(() => {
		Aos.init()
	}, [])

	// Main JSX
	return (
		<section
			className="flex flex-col md:flex-row justify-center items-start overflow-hidden"
			id="banner"
		>
			{/** Texts Container */}
			<div className="w-full p-2 md:w-2/3 mx-auto text-center md:text-left lg:p-20">
				<div data-aos="fade-left" data-aos-duration="1000">
					<span className="text-1xl font-bold">
						Hello, my name is{' '}
					</span>
					<h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
						{name}
					</h1>
					<div className="md:text-xl">
                        <p dangerouslySetInnerHTML={{ __html: description }} />

                        <Link
                            href="/about"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            Read more
                        </Link>

					</div>
				</div>
			</div>

			{/* Image container */}
			<div className="grid place-content-center w-full relative md:block md:w-1/2 md:-mr-40 md:mt-20">
				<div data-aos="fade-left" data-aos-duration="1000">
					<Image
						className="flex justify-center"
						src="/profile.jpg"
						alt="profile-mayur-upadhayay"
						height={200}
						width={400}
					/>
				</div>
			</div>
		</section>
	)
}
