import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthIncludeSchema } from '../inputTypeSchemas/RedditAuthIncludeSchema'
import { RedditAuthWhereUniqueInputSchema } from '../inputTypeSchemas/RedditAuthWhereUniqueInputSchema'
import { RedditAuthCreateInputSchema } from '../inputTypeSchemas/RedditAuthCreateInputSchema'
import { RedditAuthUncheckedCreateInputSchema } from '../inputTypeSchemas/RedditAuthUncheckedCreateInputSchema'
import { RedditAuthUpdateInputSchema } from '../inputTypeSchemas/RedditAuthUpdateInputSchema'
import { RedditAuthUncheckedUpdateInputSchema } from '../inputTypeSchemas/RedditAuthUncheckedUpdateInputSchema'
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

export const RedditAuthUpsertArgsSchema: z.ZodType<Prisma.RedditAuthUpsertArgs> = z.object({
  select: RedditAuthSelectSchema.optional(),
  include: RedditAuthIncludeSchema.optional(),
  where: RedditAuthWhereUniqueInputSchema,
  create: z.union([ RedditAuthCreateInputSchema,RedditAuthUncheckedCreateInputSchema ]),
  update: z.union([ RedditAuthUpdateInputSchema,RedditAuthUncheckedUpdateInputSchema ]),
}).strict() ;

export default RedditAuthUpsertArgsSchema;
