import { z } from 'zod';

/////////////////////////////////////////
// USER AUTH SCHEMA
/////////////////////////////////////////

export const UserAuthSchema = z.object({
  id: z.string().cuid(),
  GoogleAuthId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  RedditAuthId: z.string(),
})

export type UserAuth = z.infer<typeof UserAuthSchema>

export default UserAuthSchema;
