import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BlokFollowersCountOrderByAggregateInputSchema } from './BlokFollowersCountOrderByAggregateInputSchema';
import { BlokFollowersMaxOrderByAggregateInputSchema } from './BlokFollowersMaxOrderByAggregateInputSchema';
import { BlokFollowersMinOrderByAggregateInputSchema } from './BlokFollowersMinOrderByAggregateInputSchema';

export const BlokFollowersOrderByWithAggregationInputSchema: z.ZodType<Prisma.BlokFollowersOrderByWithAggregationInput> = z.object({
  blokId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BlokFollowersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BlokFollowersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BlokFollowersMinOrderByAggregateInputSchema).optional()
}).strict();

export default BlokFollowersOrderByWithAggregationInputSchema;
