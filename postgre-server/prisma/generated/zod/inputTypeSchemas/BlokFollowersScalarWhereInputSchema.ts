import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BlokFollowersScalarWhereInputSchema: z.ZodType<Prisma.BlokFollowersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BlokFollowersScalarWhereInputSchema),z.lazy(() => BlokFollowersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlokFollowersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlokFollowersScalarWhereInputSchema),z.lazy(() => BlokFollowersScalarWhereInputSchema).array() ]).optional(),
  blokId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BlokFollowersScalarWhereInputSchema;
