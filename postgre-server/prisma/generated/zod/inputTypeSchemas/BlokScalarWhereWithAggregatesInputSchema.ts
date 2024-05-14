import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BlokScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BlokScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BlokScalarWhereWithAggregatesInputSchema),z.lazy(() => BlokScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlokScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlokScalarWhereWithAggregatesInputSchema),z.lazy(() => BlokScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  blokName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  public: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  deleted: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BlokScalarWhereWithAggregatesInputSchema;
