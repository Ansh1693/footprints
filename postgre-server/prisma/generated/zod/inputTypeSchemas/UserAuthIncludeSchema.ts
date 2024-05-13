import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { GoogleAuthArgsSchema } from "../outputTypeSchemas/GoogleAuthArgsSchema"
import { RedditAuthArgsSchema } from "../outputTypeSchemas/RedditAuthArgsSchema"

export const UserAuthIncludeSchema: z.ZodType<Prisma.UserAuthInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  GoogleAuth: z.union([z.boolean(),z.lazy(() => GoogleAuthArgsSchema)]).optional(),
  RedditAuth: z.union([z.boolean(),z.lazy(() => RedditAuthArgsSchema)]).optional(),
}).strict()

export default UserAuthIncludeSchema;
