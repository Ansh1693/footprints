import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUncheckedCreateNestedOneWithoutUserAuthInputSchema } from './UserUncheckedCreateNestedOneWithoutUserAuthInputSchema';

export const UserAuthUncheckedCreateWithoutRedditAuthInputSchema: z.ZodType<Prisma.UserAuthUncheckedCreateWithoutRedditAuthInput> = z.object({
  id: z.string().cuid().optional(),
  GoogleAuthId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserUncheckedCreateNestedOneWithoutUserAuthInputSchema).optional()
}).strict();

export default UserAuthUncheckedCreateWithoutRedditAuthInputSchema;
