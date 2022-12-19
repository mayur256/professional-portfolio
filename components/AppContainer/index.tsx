import { ReactNode, ReactElement } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header } from '../Header'
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// Props type definitions
interface IProps {
	title: string
	description: string
	children?: ReactNode
}

// Component definition
export default function AppLayout({
	title,
	description,
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
			</Head>

			<main className="dark:bg-gray-800 w-full">
				{/** Navbar */}
				<Header />

				{children}
			</main>
		</>
	)
}
