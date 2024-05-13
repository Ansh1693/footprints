import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PinterestDataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PinterestDataScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PinterestDataScalarWhereWithAggregatesInputSchema),z.lazy(() => PinterestDataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PinterestDataScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PinterestDataScalarWhereWithAggregatesInputSchema),z.lazy(() => PinterestDataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  postId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  documentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default PinterestDataScalarWhereWithAggregatesInputSchema;
