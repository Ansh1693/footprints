import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersWhereInputSchema } from './BlokFollowersWhereInputSchema';

export const BlokFollowersListRelationFilterSchema: z.ZodType<Prisma.BlokFollowersListRelationFilter> = z.object({
  every: z.lazy(() => BlokFollowersWhereInputSchema).optional(),
  some: z.lazy(() => BlokFollowersWhereInputSchema).optional(),
  none: z.lazy(() => BlokFollowersWhereInputSchema).optional()
}).strict();

export default BlokFollowersListRelationFilterSchema;
