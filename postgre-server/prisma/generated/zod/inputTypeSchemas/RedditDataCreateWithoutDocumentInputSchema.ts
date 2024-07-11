import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RedditDataCreateWithoutDocumentInputSchema: z.ZodType<Prisma.RedditDataCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  postId: z.string()
}).strict();

export default RedditDataCreateWithoutDocumentInputSchema;
