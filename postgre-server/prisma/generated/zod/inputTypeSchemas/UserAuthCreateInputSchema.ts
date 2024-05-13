import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutUserAuthInputSchema } from './UserCreateNestedOneWithoutUserAuthInputSchema';
import { GoogleAuthCreateNestedOneWithoutUserAuthInputSchema } from './GoogleAuthCreateNestedOneWithoutUserAuthInputSchema';
import { RedditAuthCreateNestedOneWithoutUserAuthInputSchema } from './RedditAuthCreateNestedOneWithoutUserAuthInputSchema';

export const UserAuthCreateInputSchema: z.ZodType<Prisma.UserAuthCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutUserAuthInputSchema).optional(),
  GoogleAuth: z.lazy(() => GoogleAuthCreateNestedOneWithoutUserAuthInputSchema).optional(),
  RedditAuth: z.lazy(() => RedditAuthCreateNestedOneWithoutUserAuthInputSchema).optional()
}).strict();

export default UserAuthCreateInputSchema;
