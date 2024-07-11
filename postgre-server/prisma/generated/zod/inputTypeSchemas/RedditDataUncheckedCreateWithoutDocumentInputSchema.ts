import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RedditDataUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.RedditDataUncheckedCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  postId: z.string()
}).strict();

export default RedditDataUncheckedCreateWithoutDocumentInputSchema;
