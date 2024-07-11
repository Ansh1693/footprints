import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutRedditDataInputSchema } from './DocumentCreateNestedOneWithoutRedditDataInputSchema';

export const RedditDataCreateInputSchema: z.ZodType<Prisma.RedditDataCreateInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  postId: z.string(),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutRedditDataInputSchema)
}).strict();

export default RedditDataCreateInputSchema;
