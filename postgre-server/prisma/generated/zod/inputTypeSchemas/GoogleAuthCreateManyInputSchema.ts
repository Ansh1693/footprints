import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const GoogleAuthCreateManyInputSchema: z.ZodType<Prisma.GoogleAuthCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userAuthId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  googleId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default GoogleAuthCreateManyInputSchema;
