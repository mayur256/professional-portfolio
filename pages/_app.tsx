import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

// 3rd part lib to handle route transition
import NextNProgress from 'nextjs-progressbar'

// custom hooks
// import { useRouteTransition } from 'hooks/useRouteTransition'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider defaultTheme="dark" attribute="class">
			<NextNProgress />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
