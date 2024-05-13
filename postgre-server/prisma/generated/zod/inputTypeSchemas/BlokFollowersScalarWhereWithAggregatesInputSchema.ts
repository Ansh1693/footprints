import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BlokFollowersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BlokFollowersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BlokFollowersScalarWhereWithAggregatesInputSchema),z.lazy(() => BlokFollowersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlokFollowersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlokFollowersScalarWhereWithAggregatesInputSchema),z.lazy(() => BlokFollowersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  blokId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BlokFollowersScalarWhereWithAggregatesInputSchema;
