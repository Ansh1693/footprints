import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RedditAuthCreateWithoutUserAuthInputSchema: z.ZodType<Prisma.RedditAuthCreateWithoutUserAuthInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  redditId: z.string(),
  redditUsername: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RedditAuthCreateWithoutUserAuthInputSchema;
