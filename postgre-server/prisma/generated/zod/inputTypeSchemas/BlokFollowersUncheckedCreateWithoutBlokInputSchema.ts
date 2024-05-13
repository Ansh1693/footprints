import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokFollowersUncheckedCreateWithoutBlokInputSchema: z.ZodType<Prisma.BlokFollowersUncheckedCreateWithoutBlokInput> = z.object({
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokFollowersUncheckedCreateWithoutBlokInputSchema;
