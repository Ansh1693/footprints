import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditAuthWhereInputSchema } from './RedditAuthWhereInputSchema';

export const RedditAuthNullableRelationFilterSchema: z.ZodType<Prisma.RedditAuthNullableRelationFilter> = z.object({
  is: z.lazy(() => RedditAuthWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RedditAuthWhereInputSchema).optional().nullable()
}).strict();

export default RedditAuthNullableRelationFilterSchema;
