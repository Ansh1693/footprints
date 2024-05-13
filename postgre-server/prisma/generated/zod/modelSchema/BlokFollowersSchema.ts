import { z } from 'zod';

/////////////////////////////////////////
// BLOK FOLLOWERS SCHEMA
/////////////////////////////////////////

export const BlokFollowersSchema = z.object({
  blokId: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BlokFollowers = z.infer<typeof BlokFollowersSchema>

export default BlokFollowersSchema;
