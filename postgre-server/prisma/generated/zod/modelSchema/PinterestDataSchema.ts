import { z } from 'zod';

/////////////////////////////////////////
// PINTEREST DATA SCHEMA
/////////////////////////////////////////

export const PinterestDataSchema = z.object({
  id: z.string().cuid(),
  username: z.string().nullable(),
  postId: z.string().nullable(),
  documentId: z.string(),
})

export type PinterestData = z.infer<typeof PinterestDataSchema>

export default PinterestDataSchema;
