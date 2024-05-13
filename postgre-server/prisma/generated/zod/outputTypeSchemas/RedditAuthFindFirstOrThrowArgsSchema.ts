import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthIncludeSchema } from '../inputTypeSchemas/RedditAuthIncludeSchema'
import { RedditAuthWhereInputSchema } from '../inputTypeSchemas/RedditAuthWhereInputSchema'
import { RedditAuthOrderByWithRelationInputSchema } from '../inputTypeSchemas/RedditAuthOrderByWithRelationInputSchema'
import { RedditAuthWhereUniqueInputSchema } from '../inputTypeSchemas/RedditAuthWhereUniqueInputSchema'
import { RedditAuthScalarFieldEnumSchema } from '../inputTypeSchemas/RedditAuthScalarFieldEnumSchema'
import { UserAuthArgsSchema } from "../outputTypeSchemas/UserAuthArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RedditAuthSelectSchema: z.ZodType<Prisma.RedditAuthSelect> = z.object({
  id: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  redditId: z.boolean().optional(),
  redditUsername: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  UserAuth: z.union([z.boolean(),z.lazy(() => UserAuthArgsSchema)]).optional(),
}).strict()

export const RedditAuthFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RedditAuthFindFirstOrThrowArgs> = z.object({
  select: RedditAuthSelectSchema.optional(),
  include: RedditAuthIncludeSchema.optional(),
  where: RedditAuthWhereInputSchema.optional(),
  orderBy: z.union([ RedditAuthOrderByWithRelationInputSchema.array(),RedditAuthOrderByWithRelationInputSchema ]).optional(),
  cursor: RedditAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RedditAuthScalarFieldEnumSchema,RedditAuthScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RedditAuthFindFirstOrThrowArgsSchema;
