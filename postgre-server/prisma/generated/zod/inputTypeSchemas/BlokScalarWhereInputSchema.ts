import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BlokScalarWhereInputSchema: z.ZodType<Prisma.BlokScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BlokScalarWhereInputSchema),z.lazy(() => BlokScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlokScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlokScalarWhereInputSchema),z.lazy(() => BlokScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  blokName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  deleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BlokScalarWhereInputSchema;
