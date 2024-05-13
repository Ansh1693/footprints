import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PinterestDataWhereInputSchema } from './PinterestDataWhereInputSchema';

export const PinterestDataNullableRelationFilterSchema: z.ZodType<Prisma.PinterestDataNullableRelationFilter> = z.object({
  is: z.lazy(() => PinterestDataWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PinterestDataWhereInputSchema).optional().nullable()
}).strict();

export default PinterestDataNullableRelationFilterSchema;
