import { ReactElement } from 'react'

import AppLayout from '../components/AppContainer'
import { Banner } from '../components/Banner'
import { Skills } from 'components/Skills'
import { GithubRepositories } from 'components/GithubRepositories'
import { ContactForm } from 'components/ContactForm'

export default function Contact(): ReactElement {
    return (
        <AppLayout title="Mayur Upadhayay - Reach out" description="">
            <section className="bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                    <h1 className="text-4xl md:text-8xl font-bold py-5 text-center md:text-left">
                        Get in touch
                    </h1>
                    <p className='max-w-2xl w-full mx-auto text-md px-4 text-center'>
                        Are you looking for a highly skilled <em className='inline'>Software engineer / freelancer</em> for your next project? Please feel free to reach out!
                    </p>
                </div>

                <div className="dark:bg-gray-900">
                    <ContactForm />
                </div>
            </section>
        </AppLayout>
    )
}
