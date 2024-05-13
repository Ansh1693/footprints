import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokMetadataWhereInputSchema } from './BlokMetadataWhereInputSchema';

export const BlokMetadataNullableRelationFilterSchema: z.ZodType<Prisma.BlokMetadataNullableRelationFilter> = z.object({
  is: z.lazy(() => BlokMetadataWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BlokMetadataWhereInputSchema).optional().nullable()
}).strict();

export default BlokMetadataNullableRelationFilterSchema;
