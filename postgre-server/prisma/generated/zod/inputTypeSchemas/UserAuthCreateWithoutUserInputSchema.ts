import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthCreateNestedOneWithoutUserAuthInputSchema } from './GoogleAuthCreateNestedOneWithoutUserAuthInputSchema';
import { RedditAuthCreateNestedOneWithoutUserAuthInputSchema } from './RedditAuthCreateNestedOneWithoutUserAuthInputSchema';

export const UserAuthCreateWithoutUserInputSchema: z.ZodType<Prisma.UserAuthCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  GoogleAuth: z.lazy(() => GoogleAuthCreateNestedOneWithoutUserAuthInputSchema).optional(),
  RedditAuth: z.lazy(() => RedditAuthCreateNestedOneWithoutUserAuthInputSchema).optional()
}).strict();

export default UserAuthCreateWithoutUserInputSchema;
