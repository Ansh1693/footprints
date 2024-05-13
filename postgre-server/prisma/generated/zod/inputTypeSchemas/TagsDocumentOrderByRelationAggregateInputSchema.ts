import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagsDocumentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TagsDocumentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagsDocumentOrderByRelationAggregateInputSchema;
