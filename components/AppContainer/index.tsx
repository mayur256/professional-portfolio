import { ReactNode, ReactElement } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import { useRouter } from 'next/router'

// layout Components
import { Header } from '../Header'
import { Footer } from '../Footer'

// Props type definitions
interface IProps {
    title?: string
    description?: string
    children?: ReactNode
}

// Component definition
export default function AppLayout({
    title = 'Mayur Upadhayay',
    description = '',
    children,
}: IProps): ReactElement {
    const router = useRouter()

    const meta = {
        image: '/avatar.png',
        type: 'website',
    }

    // Main JSX
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={description} name="description" />
                <meta
                    property="og:url"
                    content={`https://yourwebsite.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://yourwebsite.com${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Mayur Upadhayay" />
                <meta name="twitter:image" content={meta.image} />
                <meta name="google-site-verification" content="2lYtwdKQ3lPLaBq3gp6zMWPsIUfWiWlw1B-mzUx47AQ" />
            </Head>

            <div className="container">
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-3844D88Y93" />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-3844D88Y93');
                    `}
                </Script>
            </div>

            {/** Navbar */}
            <Header />

            <main className="dark:bg-gray-800 w-full">{children}</main>

            <Footer />
        </>
    )
}
