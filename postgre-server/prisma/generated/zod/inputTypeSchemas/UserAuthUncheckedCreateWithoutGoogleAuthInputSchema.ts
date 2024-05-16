import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema } from './RedditAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema';

export const UserAuthUncheckedCreateWithoutGoogleAuthInputSchema: z.ZodType<Prisma.UserAuthUncheckedCreateWithoutGoogleAuthInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  RedditAuth: z.lazy(() => RedditAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema).optional()
}).strict();

export default UserAuthUncheckedCreateWithoutGoogleAuthInputSchema;
