import { z } from 'zod';

/////////////////////////////////////////
// REDDIT AUTH SCHEMA
/////////////////////////////////////////

export const RedditAuthSchema = z.object({
  id: z.string().cuid(),
  userAuthId: z.string(),
  accessToken: z.string().nullable(),
  refreshToken: z.string().nullable(),
  redditId: z.string(),
  redditUsername: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type RedditAuth = z.infer<typeof RedditAuthSchema>

export default RedditAuthSchema;
