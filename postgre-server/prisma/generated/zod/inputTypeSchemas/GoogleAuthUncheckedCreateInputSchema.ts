import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthUncheckedCreateNestedOneWithoutGoogleAuthInputSchema } from './UserAuthUncheckedCreateNestedOneWithoutGoogleAuthInputSchema';

export const GoogleAuthUncheckedCreateInputSchema: z.ZodType<Prisma.GoogleAuthUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  googleId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserAuth: z.lazy(() => UserAuthUncheckedCreateNestedOneWithoutGoogleAuthInputSchema).optional()
}).strict();

export default GoogleAuthUncheckedCreateInputSchema;
