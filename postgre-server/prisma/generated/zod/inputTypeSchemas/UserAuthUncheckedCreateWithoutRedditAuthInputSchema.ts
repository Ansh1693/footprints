import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema } from './GoogleAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema';

export const UserAuthUncheckedCreateWithoutRedditAuthInputSchema: z.ZodType<Prisma.UserAuthUncheckedCreateWithoutRedditAuthInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  GoogleAuth: z.lazy(() => GoogleAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema).optional()
}).strict();

export default UserAuthUncheckedCreateWithoutRedditAuthInputSchema;
