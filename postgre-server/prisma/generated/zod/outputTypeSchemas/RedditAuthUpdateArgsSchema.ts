import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthIncludeSchema } from '../inputTypeSchemas/RedditAuthIncludeSchema'
import { RedditAuthUpdateInputSchema } from '../inputTypeSchemas/RedditAuthUpdateInputSchema'
import { RedditAuthUncheckedUpdateInputSchema } from '../inputTypeSchemas/RedditAuthUncheckedUpdateInputSchema'
import { RedditAuthWhereUniqueInputSchema } from '../inputTypeSchemas/RedditAuthWhereUniqueInputSchema'
import { UserAuthArgsSchema } from "../outputTypeSchemas/UserAuthArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RedditAuthSelectSchema: z.ZodType<Prisma.RedditAuthSelect> = z.object({
  id: z.boolean().optional(),
  userAuthId: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  redditId: z.boolean().optional(),
  redditUsername: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  UserAuth: z.union([z.boolean(),z.lazy(() => UserAuthArgsSchema)]).optional(),
}).strict()

export const RedditAuthUpdateArgsSchema: z.ZodType<Prisma.RedditAuthUpdateArgs> = z.object({
  select: RedditAuthSelectSchema.optional(),
  include: RedditAuthIncludeSchema.optional(),
  data: z.union([ RedditAuthUpdateInputSchema,RedditAuthUncheckedUpdateInputSchema ]),
  where: RedditAuthWhereUniqueInputSchema,
}).strict() ;

export default RedditAuthUpdateArgsSchema;
