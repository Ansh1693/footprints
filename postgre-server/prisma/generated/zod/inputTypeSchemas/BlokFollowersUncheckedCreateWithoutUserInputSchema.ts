import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokFollowersUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.BlokFollowersUncheckedCreateWithoutUserInput> = z.object({
  blokId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokFollowersUncheckedCreateWithoutUserInputSchema;
