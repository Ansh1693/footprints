import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RedditAuthCountOrderByAggregateInputSchema } from './RedditAuthCountOrderByAggregateInputSchema';
import { RedditAuthMaxOrderByAggregateInputSchema } from './RedditAuthMaxOrderByAggregateInputSchema';
import { RedditAuthMinOrderByAggregateInputSchema } from './RedditAuthMinOrderByAggregateInputSchema';

export const RedditAuthOrderByWithAggregationInputSchema: z.ZodType<Prisma.RedditAuthOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refreshToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  redditId: z.lazy(() => SortOrderSchema).optional(),
  redditUsername: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RedditAuthCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RedditAuthMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RedditAuthMinOrderByAggregateInputSchema).optional()
}).strict();

export default RedditAuthOrderByWithAggregationInputSchema;
