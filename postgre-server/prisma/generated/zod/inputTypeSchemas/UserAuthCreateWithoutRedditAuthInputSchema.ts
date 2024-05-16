import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutUserAuthInputSchema } from './UserCreateNestedOneWithoutUserAuthInputSchema';
import { GoogleAuthCreateNestedOneWithoutUserAuthInputSchema } from './GoogleAuthCreateNestedOneWithoutUserAuthInputSchema';

export const UserAuthCreateWithoutRedditAuthInputSchema: z.ZodType<Prisma.UserAuthCreateWithoutRedditAuthInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutUserAuthInputSchema),
  GoogleAuth: z.lazy(() => GoogleAuthCreateNestedOneWithoutUserAuthInputSchema).optional()
}).strict();

export default UserAuthCreateWithoutRedditAuthInputSchema;
