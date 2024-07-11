import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentCountOrderByAggregateInputSchema } from './DocumentCountOrderByAggregateInputSchema';
import { DocumentMaxOrderByAggregateInputSchema } from './DocumentMaxOrderByAggregateInputSchema';
import { DocumentMinOrderByAggregateInputSchema } from './DocumentMinOrderByAggregateInputSchema';

export const DocumentOrderByWithAggregationInputSchema: z.ZodType<Prisma.DocumentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  heading: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  body: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  public: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DocumentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DocumentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DocumentMinOrderByAggregateInputSchema).optional()
}).strict();

export default DocumentOrderByWithAggregationInputSchema;
