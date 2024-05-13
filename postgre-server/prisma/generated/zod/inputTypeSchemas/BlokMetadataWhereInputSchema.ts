import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BlokRelationFilterSchema } from './BlokRelationFilterSchema';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';

export const BlokMetadataWhereInputSchema: z.ZodType<Prisma.BlokMetadataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BlokMetadataWhereInputSchema),z.lazy(() => BlokMetadataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlokMetadataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlokMetadataWhereInputSchema),z.lazy(() => BlokMetadataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  blokHeader: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  blokId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Blok: z.union([ z.lazy(() => BlokRelationFilterSchema),z.lazy(() => BlokWhereInputSchema) ]).optional(),
}).strict();

export default BlokMetadataWhereInputSchema;
