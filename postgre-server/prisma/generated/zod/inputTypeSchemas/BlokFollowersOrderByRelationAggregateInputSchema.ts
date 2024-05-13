import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BlokFollowersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BlokFollowersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BlokFollowersOrderByRelationAggregateInputSchema;
