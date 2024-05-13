import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserAuthUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserAuthUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  GoogleAuthId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  RedditAuthId: z.string()
}).strict();

export default UserAuthUncheckedCreateWithoutUserInputSchema;
