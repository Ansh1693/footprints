import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataSelectSchema } from '../inputTypeSchemas/RedditDataSelectSchema';
import { RedditDataIncludeSchema } from '../inputTypeSchemas/RedditDataIncludeSchema';

export const RedditDataArgsSchema: z.ZodType<Prisma.RedditDataDefaultArgs> = z.object({
  select: z.lazy(() => RedditDataSelectSchema).optional(),
  include: z.lazy(() => RedditDataIncludeSchema).optional(),
}).strict();

export default RedditDataArgsSchema;
