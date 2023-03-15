import { ReactElement } from 'react'

import { Project } from 'components/Project'
import AppLayout from '../components/AppContainer'

// Experience Page Component
export default function ProjectsPage(): ReactElement {
	return (
		<AppLayout title="Mayur Upadhayay - Projects">
			<Project />
		</AppLayout>
	)
}
