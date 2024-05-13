import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokFollowersCreateManyInputSchema: z.ZodType<Prisma.BlokFollowersCreateManyInput> = z.object({
  blokId: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokFollowersCreateManyInputSchema;
