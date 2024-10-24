import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BlokFollowersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BlokFollowersMaxOrderByAggregateInput> = z.object({
  blokId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BlokFollowersMaxOrderByAggregateInputSchema;
