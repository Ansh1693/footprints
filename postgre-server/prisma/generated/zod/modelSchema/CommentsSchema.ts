import { z } from 'zod';

/////////////////////////////////////////
// COMMENTS SCHEMA
/////////////////////////////////////////

export const CommentsSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  documentId: z.string(),
  body: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Comments = z.infer<typeof CommentsSchema>

export default CommentsSchema;
