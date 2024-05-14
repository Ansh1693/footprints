// import { sendEmail } from './email.function.js'
import {
  generateOTP,
  generateTemplate,
  generateSubject,
} from "./generate.function.js";

/**
 * A function that will send an OTP to a particular email
 *
 // * @param {string} email
 */
export const sendOTP = async (email) => {
  try {
    const otp = generateOTP();
    const subject = generateSubject("otp", { otp });
    const template = generateTemplate("otp", { otp });

    // await sendEmail(email, subject, template)

    console.log(otp);

    return { otp };
  } catch (error) {
    throw error;
  }
};
