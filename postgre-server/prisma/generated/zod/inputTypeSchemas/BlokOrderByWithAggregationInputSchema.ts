import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BlokCountOrderByAggregateInputSchema } from './BlokCountOrderByAggregateInputSchema';
import { BlokMaxOrderByAggregateInputSchema } from './BlokMaxOrderByAggregateInputSchema';
import { BlokMinOrderByAggregateInputSchema } from './BlokMinOrderByAggregateInputSchema';

export const BlokOrderByWithAggregationInputSchema: z.ZodType<Prisma.BlokOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  blokName: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BlokCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BlokMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BlokMinOrderByAggregateInputSchema).optional()
}).strict();

export default BlokOrderByWithAggregationInputSchema;
