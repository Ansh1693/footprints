import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentWhereInputSchema } from './BloksDocumentWhereInputSchema';

export const BloksDocumentListRelationFilterSchema: z.ZodType<Prisma.BloksDocumentListRelationFilter> = z.object({
  every: z.lazy(() => BloksDocumentWhereInputSchema).optional(),
  some: z.lazy(() => BloksDocumentWhereInputSchema).optional(),
  none: z.lazy(() => BloksDocumentWhereInputSchema).optional()
}).strict();

export default BloksDocumentListRelationFilterSchema;
