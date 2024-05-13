import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CommentsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CommentsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CommentsOrderByRelationAggregateInputSchema;
