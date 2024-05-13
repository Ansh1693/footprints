import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokFollowersCreateManyUserInputSchema: z.ZodType<Prisma.BlokFollowersCreateManyUserInput> = z.object({
  blokId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokFollowersCreateManyUserInputSchema;
