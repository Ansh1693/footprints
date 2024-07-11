import { z } from 'zod';

/////////////////////////////////////////
// BLOK SCHEMA
/////////////////////////////////////////

export const BlokSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  profileId: z.string(),
  blokName: z.string(),
  description: z.string().nullable(),
  public: z.boolean(),
  deleted: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Blok = z.infer<typeof BlokSchema>

export default BlokSchema;
