import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BloksDocumentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BloksDocumentMaxOrderByAggregateInput> = z.object({
  blokId: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BloksDocumentMaxOrderByAggregateInputSchema;
