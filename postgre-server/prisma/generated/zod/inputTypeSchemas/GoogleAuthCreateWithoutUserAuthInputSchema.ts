import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const GoogleAuthCreateWithoutUserAuthInputSchema: z.ZodType<Prisma.GoogleAuthCreateWithoutUserAuthInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  googleId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default GoogleAuthCreateWithoutUserAuthInputSchema;
