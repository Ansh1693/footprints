import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthCreateNestedOneWithoutGoogleAuthInputSchema } from './UserAuthCreateNestedOneWithoutGoogleAuthInputSchema';

export const GoogleAuthCreateInputSchema: z.ZodType<Prisma.GoogleAuthCreateInput> = z.object({
  id: z.string().cuid().optional(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  googleId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserAuth: z.lazy(() => UserAuthCreateNestedOneWithoutGoogleAuthInputSchema).optional()
}).strict();

export default GoogleAuthCreateInputSchema;
