import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PinterestDataCountOrderByAggregateInputSchema } from './PinterestDataCountOrderByAggregateInputSchema';
import { PinterestDataMaxOrderByAggregateInputSchema } from './PinterestDataMaxOrderByAggregateInputSchema';
import { PinterestDataMinOrderByAggregateInputSchema } from './PinterestDataMinOrderByAggregateInputSchema';

export const PinterestDataOrderByWithAggregationInputSchema: z.ZodType<Prisma.PinterestDataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PinterestDataCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PinterestDataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PinterestDataMinOrderByAggregateInputSchema).optional()
}).strict();

export default PinterestDataOrderByWithAggregationInputSchema;
