import { z } from 'zod';
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'

/////////////////////////////////////////
// BLOK SCHEMA
/////////////////////////////////////////

export const BlokSchema = z.object({
  status: StatusSchema,
  id: z.string().cuid(),
  userId: z.string(),
  blokName: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Blok = z.infer<typeof BlokSchema>

export default BlokSchema;
