// top level imports
import { ReactElement } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

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
    ];

    const tools = [
        {
            title: 'frontend',
            subtitle: 'HTML, CSS, JAVASCRIPT & BOOTSTRAP',
            icons: [
                { url: '/tools/frontend/react.png', alt: 'React' },
                { url: '/tools/frontend/vue.png', alt: 'Vue' },
                { url: '/tools/frontend/js.png', alt: 'JS' },
                { url: '/tools/frontend/css.png', alt: 'CSS' },
                { url: '/tools/frontend/html.png', alt: 'HTML' }
            ]
        },
        /* {
            title: 'backend',
            subtitle: 'nodejs, gin & laravel',
            icons: [
                { url: '/tools/frontend/react.png', alt: 'React' },
                { url: '/tools/frontend/vue.png', alt: 'Vue' },
                { url: '/tools/frontend/js.png', alt: 'JS' },
                { url: '/tools/frontend/css.png', alt: 'CSS' },
                { url: '/tools/frontend/html.png', alt: 'HTML' }
            ]
        } */
    ]

    // Main JSX
    return (
        <section id="skills" className="m-8 md:p-8 skill-slider">
            <div className="max-w-6xl mx-auto h-24 bg-white dark:bg-gray-800">
                <h1 className="text-2xl md:text-4xl font-bold md:text-left">
                    Skills - listed with competency meter
                </h1>
            </div>

            <Carousel responsive={responsive} className="pb-14">
                {skills.map((skill) => (
                    <div className="item" key={skill.id}>
                        {skill.skillMeter}
                        <h5 className="capitalize text-1xl md:text-2xl">
                            {skill.name}
                        </h5>
                    </div>
                ))}
            </Carousel>

            <div className="max-w-6xl mx-auto h-24 bg-white dark:bg-gray-800">
                <h1 className="text-2xl md:text-4xl font-bold md:text-left mb-4">
                    Tools
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tools.map((tool, index) => (
                        <div
                            key={`${tool.title}-${index}`}
                            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">{tool.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 uppercase">{tool.subtitle}</p>
                            <div className="flex place-content-around">
                            {tool.icons.map((icon) => (
                                <Image
                                    title={icon.alt}
                                    key={icon.url}
                                    src={icon.url}
                                    alt={icon.alt}
                                    height={20}
                                    width={40}
                                />
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
