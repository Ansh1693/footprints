import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokFollowersCreateManyBlokInputSchema: z.ZodType<Prisma.BlokFollowersCreateManyBlokInput> = z.object({
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokFollowersCreateManyBlokInputSchema;
