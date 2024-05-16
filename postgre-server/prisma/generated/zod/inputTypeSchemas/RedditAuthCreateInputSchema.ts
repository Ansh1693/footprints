import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthCreateNestedOneWithoutRedditAuthInputSchema } from './UserAuthCreateNestedOneWithoutRedditAuthInputSchema';

export const RedditAuthCreateInputSchema: z.ZodType<Prisma.RedditAuthCreateInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  redditId: z.string(),
  redditUsername: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserAuth: z.lazy(() => UserAuthCreateNestedOneWithoutRedditAuthInputSchema)
}).strict();

export default RedditAuthCreateInputSchema;
