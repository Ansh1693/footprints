import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const DocumentScalarWhereInputSchema: z.ZodType<Prisma.DocumentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DocumentScalarWhereInputSchema),z.lazy(() => DocumentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocumentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocumentScalarWhereInputSchema),z.lazy(() => DocumentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  heading: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  body: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  deleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  pinned: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  comment: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DocumentScalarWhereInputSchema;
