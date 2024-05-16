import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthArgsSchema } from "../outputTypeSchemas/UserAuthArgsSchema"

export const GoogleAuthSelectSchema: z.ZodType<Prisma.GoogleAuthSelect> = z.object({
  id: z.boolean().optional(),
  userAuthId: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  googleId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  UserAuth: z.union([z.boolean(),z.lazy(() => UserAuthArgsSchema)]).optional(),
}).strict()

export default GoogleAuthSelectSchema;
