import { ReactElement } from 'react'

import AppLayout from '../components/AppContainer'
import { Banner } from '../components/Banner'
import { Skills } from 'components/Skills'
// import styles from '../styles/Home.module.css'
// import { Header } from '../components/Header'

export default function Home(): ReactElement {
	return (
		<AppLayout title="Mayur Upadhayay - Developer" description="">
			<Banner />
			<Skills />
		</AppLayout>
	)
}
