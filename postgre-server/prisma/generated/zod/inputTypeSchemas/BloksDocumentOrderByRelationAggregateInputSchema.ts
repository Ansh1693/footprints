import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BloksDocumentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BloksDocumentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BloksDocumentOrderByRelationAggregateInputSchema;
