import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BlokMetadataMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BlokMetadataMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  blokHeader: z.lazy(() => SortOrderSchema).optional(),
  blokId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BlokMetadataMaxOrderByAggregateInputSchema;
