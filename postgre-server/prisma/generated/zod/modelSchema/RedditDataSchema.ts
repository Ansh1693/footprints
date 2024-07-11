import { z } from 'zod';

/////////////////////////////////////////
// REDDIT DATA SCHEMA
/////////////////////////////////////////

export const RedditDataSchema = z.object({
  id: z.string().cuid(),
  username: z.string(),
  postId: z.string(),
  documentId: z.string(),
})

export type RedditData = z.infer<typeof RedditDataSchema>

export default RedditDataSchema;
