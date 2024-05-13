import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RedditDataCountOrderByAggregateInputSchema } from './RedditDataCountOrderByAggregateInputSchema';
import { RedditDataMaxOrderByAggregateInputSchema } from './RedditDataMaxOrderByAggregateInputSchema';
import { RedditDataMinOrderByAggregateInputSchema } from './RedditDataMinOrderByAggregateInputSchema';

export const RedditDataOrderByWithAggregationInputSchema: z.ZodType<Prisma.RedditDataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RedditDataCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RedditDataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RedditDataMinOrderByAggregateInputSchema).optional()
}).strict();

export default RedditDataOrderByWithAggregationInputSchema;
