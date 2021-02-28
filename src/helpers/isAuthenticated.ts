export const isAuthenticated = (req) => {
	if (!req.headers?.cookie) return undefined;

	const match = req.headers
		.cookie
		.split(';')
		.find(item => item.trim().startsWith('userName='));

	if (!match) return undefined;

	return match.split('=')[1];
}
