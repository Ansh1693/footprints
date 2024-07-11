import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RedditDataCreateManyInputSchema: z.ZodType<Prisma.RedditDataCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  postId: z.string(),
  documentId: z.string()
}).strict();

export default RedditDataCreateManyInputSchema;
