import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUncheckedCreateNestedOneWithoutUserAuthInputSchema } from './UserUncheckedCreateNestedOneWithoutUserAuthInputSchema';

export const UserAuthUncheckedCreateWithoutGoogleAuthInputSchema: z.ZodType<Prisma.UserAuthUncheckedCreateWithoutGoogleAuthInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  RedditAuthId: z.string(),
  User: z.lazy(() => UserUncheckedCreateNestedOneWithoutUserAuthInputSchema).optional()
}).strict();

export default UserAuthUncheckedCreateWithoutGoogleAuthInputSchema;
