import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditDataWhereInputSchema } from './RedditDataWhereInputSchema';

export const RedditDataNullableRelationFilterSchema: z.ZodType<Prisma.RedditDataNullableRelationFilter> = z.object({
  is: z.lazy(() => RedditDataWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RedditDataWhereInputSchema).optional().nullable()
}).strict();

export default RedditDataNullableRelationFilterSchema;
