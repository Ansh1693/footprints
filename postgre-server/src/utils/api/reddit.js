import snoowrap from 'snoowrap'

/**
 * A function that returns an optional Reddit client of a user.
 *
 * @param {String} refreshToken
 */
const redditAuth = (refreshToken = undefined) => {
	return new snoowrap({
		userAgent: 'Reddit client for Slipbox',
		clientId: process.env.REDDIT_CLIENT_ID,
		clientSecret: process.env.REDDIT_CLIENT_SECRET,
		refreshToken: refreshToken,
	})
}

export default redditAuth
