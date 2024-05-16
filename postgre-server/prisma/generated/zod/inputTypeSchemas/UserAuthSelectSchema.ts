import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { GoogleAuthArgsSchema } from "../outputTypeSchemas/GoogleAuthArgsSchema"
import { RedditAuthArgsSchema } from "../outputTypeSchemas/RedditAuthArgsSchema"

export const UserAuthSelectSchema: z.ZodType<Prisma.UserAuthSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  GoogleAuth: z.union([z.boolean(),z.lazy(() => GoogleAuthArgsSchema)]).optional(),
  RedditAuth: z.union([z.boolean(),z.lazy(() => RedditAuthArgsSchema)]).optional(),
}).strict()

export default UserAuthSelectSchema;
