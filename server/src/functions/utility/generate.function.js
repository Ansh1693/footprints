import randomstring from 'randomstring'
import { generateFromEmail } from 'unique-username-generator'

/**
 * A function that generates an OTP
 */
export const generateOTP = () => {
	return Math.floor(Math.random() * 9000 + 1000).toString()
}

/**
 * A function that will generate a random string
 */
export const generateString = () => {
	return randomstring.generate(7)
}

/**
 * A function that will generate a username from an Email
 *
 * @param {string} email
 */
export const generateUsername = (email) => {
	try {
		return generateFromEmail(email, 5)
	} catch (error) {
		throw error
	}
}

/**
 * A function that will generate a body template for an email
 *
 * @param {string} templateType
 * @param {string} data
 */
export const generateTemplate = (templateType, data) => {
	if (templateType === 'otp') {
		return `Your OTP is ${data.otp}`
	}
}

/**
 * A function that will generate the subject for an email
 *
 * @param {string} templateType
 * @param {string} data
 */
export const generateSubject = (subjectType, data) => {
	if (subjectType === 'otp') {
		return `Your OTP is ${data.otp}`
	}
}