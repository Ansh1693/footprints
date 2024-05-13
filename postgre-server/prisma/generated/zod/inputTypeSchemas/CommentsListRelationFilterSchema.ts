import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsWhereInputSchema } from './CommentsWhereInputSchema';

export const CommentsListRelationFilterSchema: z.ZodType<Prisma.CommentsListRelationFilter> = z.object({
  every: z.lazy(() => CommentsWhereInputSchema).optional(),
  some: z.lazy(() => CommentsWhereInputSchema).optional(),
  none: z.lazy(() => CommentsWhereInputSchema).optional()
}).strict();

export default CommentsListRelationFilterSchema;
