import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthIncludeSchema } from '../inputTypeSchemas/UserAuthIncludeSchema'
import { UserAuthWhereInputSchema } from '../inputTypeSchemas/UserAuthWhereInputSchema'
import { UserAuthOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserAuthOrderByWithRelationInputSchema'
import { UserAuthWhereUniqueInputSchema } from '../inputTypeSchemas/UserAuthWhereUniqueInputSchema'
import { UserAuthScalarFieldEnumSchema } from '../inputTypeSchemas/UserAuthScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { GoogleAuthArgsSchema } from "../outputTypeSchemas/GoogleAuthArgsSchema"
import { RedditAuthArgsSchema } from "../outputTypeSchemas/RedditAuthArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserAuthSelectSchema: z.ZodType<Prisma.UserAuthSelect> = z.object({
  id: z.boolean().optional(),
  GoogleAuthId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  RedditAuthId: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  GoogleAuth: z.union([z.boolean(),z.lazy(() => GoogleAuthArgsSchema)]).optional(),
  RedditAuth: z.union([z.boolean(),z.lazy(() => RedditAuthArgsSchema)]).optional(),
}).strict()

export const UserAuthFindManyArgsSchema: z.ZodType<Prisma.UserAuthFindManyArgs> = z.object({
  select: UserAuthSelectSchema.optional(),
  include: UserAuthIncludeSchema.optional(),
  where: UserAuthWhereInputSchema.optional(),
  orderBy: z.union([ UserAuthOrderByWithRelationInputSchema.array(),UserAuthOrderByWithRelationInputSchema ]).optional(),
  cursor: UserAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserAuthScalarFieldEnumSchema,UserAuthScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default UserAuthFindManyArgsSchema;
