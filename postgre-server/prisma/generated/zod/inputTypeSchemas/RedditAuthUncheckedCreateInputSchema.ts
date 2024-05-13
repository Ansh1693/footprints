import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthUncheckedCreateNestedOneWithoutRedditAuthInputSchema } from './UserAuthUncheckedCreateNestedOneWithoutRedditAuthInputSchema';

export const RedditAuthUncheckedCreateInputSchema: z.ZodType<Prisma.RedditAuthUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  redditId: z.string(),
  redditUsername: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserAuth: z.lazy(() => UserAuthUncheckedCreateNestedOneWithoutRedditAuthInputSchema).optional()
}).strict();

export default RedditAuthUncheckedCreateInputSchema;
