import { z } from 'zod';

/////////////////////////////////////////
// USER AUTH SCHEMA
/////////////////////////////////////////

export const UserAuthSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserAuth = z.infer<typeof UserAuthSchema>

export default UserAuthSchema;
