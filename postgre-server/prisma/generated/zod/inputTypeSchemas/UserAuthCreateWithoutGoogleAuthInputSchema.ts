import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutUserAuthInputSchema } from './UserCreateNestedOneWithoutUserAuthInputSchema';
import { RedditAuthCreateNestedOneWithoutUserAuthInputSchema } from './RedditAuthCreateNestedOneWithoutUserAuthInputSchema';

export const UserAuthCreateWithoutGoogleAuthInputSchema: z.ZodType<Prisma.UserAuthCreateWithoutGoogleAuthInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutUserAuthInputSchema),
  RedditAuth: z.lazy(() => RedditAuthCreateNestedOneWithoutUserAuthInputSchema).optional()
}).strict();

export default UserAuthCreateWithoutGoogleAuthInputSchema;
