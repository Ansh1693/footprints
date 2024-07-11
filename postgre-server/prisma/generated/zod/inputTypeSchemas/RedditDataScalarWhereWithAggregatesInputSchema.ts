import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const RedditDataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RedditDataScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RedditDataScalarWhereWithAggregatesInputSchema),z.lazy(() => RedditDataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RedditDataScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RedditDataScalarWhereWithAggregatesInputSchema),z.lazy(() => RedditDataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default RedditDataScalarWhereWithAggregatesInputSchema;
