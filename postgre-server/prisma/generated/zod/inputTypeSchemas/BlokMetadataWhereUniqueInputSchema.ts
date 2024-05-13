import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokMetadataWhereInputSchema } from './BlokMetadataWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BlokRelationFilterSchema } from './BlokRelationFilterSchema';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';

export const BlokMetadataWhereUniqueInputSchema: z.ZodType<Prisma.BlokMetadataWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    blokId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    blokId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  blokId: z.string().optional(),
  AND: z.union([ z.lazy(() => BlokMetadataWhereInputSchema),z.lazy(() => BlokMetadataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlokMetadataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlokMetadataWhereInputSchema),z.lazy(() => BlokMetadataWhereInputSchema).array() ]).optional(),
  blokHeader: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Blok: z.union([ z.lazy(() => BlokRelationFilterSchema),z.lazy(() => BlokWhereInputSchema) ]).optional(),
}).strict());

export default BlokMetadataWhereUniqueInputSchema;
