import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RedditDataUncheckedCreateInputSchema: z.ZodType<Prisma.RedditDataUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  postId: z.string(),
  documentId: z.string()
}).strict();

export default RedditDataUncheckedCreateInputSchema;
