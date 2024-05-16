import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema } from './GoogleAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema';
import { RedditAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema } from './RedditAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema';

export const UserAuthUncheckedCreateInputSchema: z.ZodType<Prisma.UserAuthUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  GoogleAuth: z.lazy(() => GoogleAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema).optional(),
  RedditAuth: z.lazy(() => RedditAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema).optional()
}).strict();

export default UserAuthUncheckedCreateInputSchema;
