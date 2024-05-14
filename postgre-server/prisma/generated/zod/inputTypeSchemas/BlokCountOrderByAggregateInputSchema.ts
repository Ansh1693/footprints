import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BlokCountOrderByAggregateInputSchema: z.ZodType<Prisma.BlokCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  blokName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  public: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BlokCountOrderByAggregateInputSchema;
