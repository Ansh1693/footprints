import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';

export const BlokListRelationFilterSchema: z.ZodType<Prisma.BlokListRelationFilter> = z.object({
  every: z.lazy(() => BlokWhereInputSchema).optional(),
  some: z.lazy(() => BlokWhereInputSchema).optional(),
  none: z.lazy(() => BlokWhereInputSchema).optional()
}).strict();

export default BlokListRelationFilterSchema;
