import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const RedditAuthScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RedditAuthScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RedditAuthScalarWhereWithAggregatesInputSchema),z.lazy(() => RedditAuthScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RedditAuthScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RedditAuthScalarWhereWithAggregatesInputSchema),z.lazy(() => RedditAuthScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  redditId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  redditUsername: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RedditAuthScalarWhereWithAggregatesInputSchema;
