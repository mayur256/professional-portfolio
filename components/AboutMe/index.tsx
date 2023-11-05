// top level imports
import { ReactElement } from 'react'

// Utils
import { user } from '@utils/user-data'

// top level imports
export function AboutMe(): ReactElement {
	return (
        <section className="bg-white dark:bg-gray-800 w-full mx-auto">
			<div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
				<h1 className="text-4xl md:text-8xl font-bold py-20 text-center md:text-left">
					About Me
                </h1>
			</div>

            <div className="dark:bg-gray-900 pb-8 px-4 pt-2">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 text-lg">
                    <p dangerouslySetInnerHTML={{ __html: user.about }} />

                    <p>
                        <strong className="text-xl">My Mission</strong>: <span dangerouslySetInnerHTML={{ __html: user.mission }} />
                    </p>

                    <p>
                        <strong className="text-xl">My Expertise</strong>: <span dangerouslySetInnerHTML={{ __html: user.expertise }} />
                    </p>

                    <p>
                        <strong className="text-xl">My Approach</strong>: <span dangerouslySetInnerHTML={{ __html: user.approach }} />
                    </p>

                    <p>
                        <strong className="text-xl">Beyond the Code</strong>: <span dangerouslySetInnerHTML={{ __html: user.beyond }} />
                    </p>
                </div>
            </div>
		</section>
	)
}
