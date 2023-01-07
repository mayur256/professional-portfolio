import { ReactElement } from 'react'

import { AboutMe } from 'components/AboutMe'
import AppLayout from '../components/AppContainer'

// Experience Page Component
export default function AboutPage(): ReactElement {
	return (
		<AppLayout>
			<AboutMe />
		</AppLayout>
	)
}
