import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BloksDocumentCountOrderByAggregateInputSchema } from './BloksDocumentCountOrderByAggregateInputSchema';
import { BloksDocumentMaxOrderByAggregateInputSchema } from './BloksDocumentMaxOrderByAggregateInputSchema';
import { BloksDocumentMinOrderByAggregateInputSchema } from './BloksDocumentMinOrderByAggregateInputSchema';

export const BloksDocumentOrderByWithAggregationInputSchema: z.ZodType<Prisma.BloksDocumentOrderByWithAggregationInput> = z.object({
  blokId: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BloksDocumentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BloksDocumentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BloksDocumentMinOrderByAggregateInputSchema).optional()
}).strict();

export default BloksDocumentOrderByWithAggregationInputSchema;
