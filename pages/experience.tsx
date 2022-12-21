import { ReactElement } from 'react'
import AppLayout from '../components/AppContainer'
import { Experience } from '../components/Experience'

// Experience Page Component
export default function ExperiencePage(): ReactElement {
	return (
		<AppLayout>
			<Experience />
		</AppLayout>
	)
}
