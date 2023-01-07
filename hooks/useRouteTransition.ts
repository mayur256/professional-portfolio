// Top level imports
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export function useRouteTransition() {
	const [loading, setLoading] = useState<boolean>(false)

	const router = useRouter()

	useEffect(() => {
		const handleStart = () => {
			setLoading(true)
		}
		const handleComplete = () => {
			setLoading(false)
		}

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
		}
	})

	return loading
}
