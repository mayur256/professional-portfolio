// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchLatestRepos = async (
	githubUsername: string
): Promise<any> => {
	const token = process.env.GITHUB_API_TOKEN ?? ''
	const headers = {
		Authorization: `token ${token}`,
	}

	const responseJson = await fetch(
		`https://api.github.com/search/repositories?q=user:${githubUsername}+sort:author-date-asc`,
		{ method: 'GET', headers }
	)
	const response = await responseJson.json()

	return response
}
