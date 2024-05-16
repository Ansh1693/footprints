import { z } from 'zod';

/////////////////////////////////////////
// GOOGLE AUTH SCHEMA
/////////////////////////////////////////

export const GoogleAuthSchema = z.object({
  id: z.string().cuid(),
  userAuthId: z.string(),
  accessToken: z.string().nullable(),
  refreshToken: z.string().nullable(),
  googleId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type GoogleAuth = z.infer<typeof GoogleAuthSchema>

export default GoogleAuthSchema;
