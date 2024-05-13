import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const GoogleAuthScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GoogleAuthScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GoogleAuthScalarWhereWithAggregatesInputSchema),z.lazy(() => GoogleAuthScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GoogleAuthScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GoogleAuthScalarWhereWithAggregatesInputSchema),z.lazy(() => GoogleAuthScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  googleId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default GoogleAuthScalarWhereWithAggregatesInputSchema;
