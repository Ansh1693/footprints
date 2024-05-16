import { cache } from "../../utils/initializers/cache.initializer.js";

import {
  emailLogin,
  googleLogin,
} from "../../functions/auth/initialize.function.js";

import { z } from "zod";

const userObjectSchema = z.object({
  email: z.string(),
});

const QuerySchema = z.object({
  queryType: z.enum(["email", "google"]),
});

/**
 * A controller to handle the auth initialization requests
 *
 */
const initializeAuth = async (req, res) => {
  try {
    const { queryType } = QuerySchema.parse(req.query);

    if (queryType === "email") {
      if (!req.body.userObject) {
        throw new Error("User object missing.");
      }

      const userObject = userObjectSchema.parse(req.body.userObject);

      const data = await emailLogin(userObject);

      const auth_params = { otp: data.otp } || {};

      cache.set(data.state, auth_params, 60 * 5);

      res.status(200).send({ data });
    } else if (queryType === "google") {
      const { state, url } = googleLogin();

      const auth_params = { state } || {};

      cache.set(state, auth_params, 60 * 2);

      res.status(200).send({ url });
    }
  } catch (error) {
    throw error;
  }
};

export default initializeAuth;
