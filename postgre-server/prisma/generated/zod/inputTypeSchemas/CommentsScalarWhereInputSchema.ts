import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CommentsScalarWhereInputSchema: z.ZodType<Prisma.CommentsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CommentsScalarWhereInputSchema),z.lazy(() => CommentsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentsScalarWhereInputSchema),z.lazy(() => CommentsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default CommentsScalarWhereInputSchema;
