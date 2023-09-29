import { ReactElement } from 'react'

import AppLayout from '../components/AppContainer'
import { Banner } from '../components/Banner'
import { Skills } from 'components/Skills'
import { GithubRepositories } from 'components/GithubRepositories'

// types
import { Repo } from 'components/GithubCard'
import { fetchLatestRepos } from '@utils/Common'

// Utils
import { user } from '@utils/user-data'

// props type definitions
interface IProps {
	repositories: Array<Repo>
}
export const runtime = 'experimental-edge';

export default function Home({ repositories = [] }: IProps): ReactElement {
	return (
		<AppLayout title="Mayur Upadhayay - Developer" description="">
			<Banner />
			<Skills />
			<GithubRepositories repositories={repositories} />
		</AppLayout>
	)
}

// runs during request time to fetch github repos
export async function getServerSideProps() {
	const githubReposResponse = await fetchLatestRepos(user.githubUsername)
	const repositories = githubReposResponse?.items?.slice(0, 5) ?? []

	return {
		props: {
			repositories,
		},
	}
}
