import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RedditDataCreateWithoutDocumentInputSchema: z.ZodType<Prisma.RedditDataCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string().optional().nullable(),
  postId: z.string().optional().nullable()
}).strict();

export default RedditDataCreateWithoutDocumentInputSchema;
