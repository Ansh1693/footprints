import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthArgsSchema } from "../outputTypeSchemas/UserAuthArgsSchema"

export const RedditAuthIncludeSchema: z.ZodType<Prisma.RedditAuthInclude> = z.object({
  UserAuth: z.union([z.boolean(),z.lazy(() => UserAuthArgsSchema)]).optional(),
}).strict()

export default RedditAuthIncludeSchema;
