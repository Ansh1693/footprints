import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokFollowersUncheckedCreateInputSchema: z.ZodType<Prisma.BlokFollowersUncheckedCreateInput> = z.object({
  blokId: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokFollowersUncheckedCreateInputSchema;
