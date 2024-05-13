import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BlokMetadataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BlokMetadataScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BlokMetadataScalarWhereWithAggregatesInputSchema),z.lazy(() => BlokMetadataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlokMetadataScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlokMetadataScalarWhereWithAggregatesInputSchema),z.lazy(() => BlokMetadataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  blokHeader: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  blokId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BlokMetadataScalarWhereWithAggregatesInputSchema;
