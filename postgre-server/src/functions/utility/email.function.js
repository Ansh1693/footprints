import resend from '../../utils/api/resend.js'

/**
 * A function that will send an email
 *
 * @param {string} email
 * @param {string} subject
 * @param {HTMLAllCollection} template
 */
export const sendEmail = async (email, subject, template) => {
	try {
		return await resend.emails.send({
			from: 'Footprints <developeransh16@gmail.com>',
			to: email,
			subject: subject,
			html: template,
		})
	} catch (error) {
		throw error
	}
}
