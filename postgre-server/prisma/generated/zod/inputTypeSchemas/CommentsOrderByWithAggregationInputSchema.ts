import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CommentsCountOrderByAggregateInputSchema } from './CommentsCountOrderByAggregateInputSchema';
import { CommentsMaxOrderByAggregateInputSchema } from './CommentsMaxOrderByAggregateInputSchema';
import { CommentsMinOrderByAggregateInputSchema } from './CommentsMinOrderByAggregateInputSchema';

export const CommentsOrderByWithAggregationInputSchema: z.ZodType<Prisma.CommentsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CommentsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CommentsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CommentsMinOrderByAggregateInputSchema).optional()
}).strict();

export default CommentsOrderByWithAggregationInputSchema;
