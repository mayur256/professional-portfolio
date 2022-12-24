import { Project } from 'components/Project'
import { ReactElement } from 'react'
import AppLayout from '../components/AppContainer'

// Experience Page Component
export default function ProjectsPage(): ReactElement {
	return (
		<AppLayout>
			<Project />
		</AppLayout>
	)
}
