import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const GoogleAuthUncheckedCreateWithoutUserAuthInputSchema: z.ZodType<Prisma.GoogleAuthUncheckedCreateWithoutUserAuthInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  googleId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default GoogleAuthUncheckedCreateWithoutUserAuthInputSchema;
