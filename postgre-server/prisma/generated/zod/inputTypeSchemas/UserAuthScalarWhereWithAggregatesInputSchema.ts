import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const UserAuthScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserAuthScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserAuthScalarWhereWithAggregatesInputSchema),z.lazy(() => UserAuthScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAuthScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAuthScalarWhereWithAggregatesInputSchema),z.lazy(() => UserAuthScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  GoogleAuthId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  RedditAuthId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default UserAuthScalarWhereWithAggregatesInputSchema;
