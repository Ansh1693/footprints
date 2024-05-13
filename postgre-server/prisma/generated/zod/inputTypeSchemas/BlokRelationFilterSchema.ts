import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';

export const BlokRelationFilterSchema: z.ZodType<Prisma.BlokRelationFilter> = z.object({
  is: z.lazy(() => BlokWhereInputSchema).optional(),
  isNot: z.lazy(() => BlokWhereInputSchema).optional()
}).strict();

export default BlokRelationFilterSchema;
