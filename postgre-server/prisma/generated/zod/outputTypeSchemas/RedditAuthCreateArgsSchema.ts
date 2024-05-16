import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthIncludeSchema } from '../inputTypeSchemas/RedditAuthIncludeSchema'
import { RedditAuthCreateInputSchema } from '../inputTypeSchemas/RedditAuthCreateInputSchema'
import { RedditAuthUncheckedCreateInputSchema } from '../inputTypeSchemas/RedditAuthUncheckedCreateInputSchema'
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

export const RedditAuthCreateArgsSchema: z.ZodType<Prisma.RedditAuthCreateArgs> = z.object({
  select: RedditAuthSelectSchema.optional(),
  include: RedditAuthIncludeSchema.optional(),
  data: z.union([ RedditAuthCreateInputSchema,RedditAuthUncheckedCreateInputSchema ]),
}).strict() ;

export default RedditAuthCreateArgsSchema;
