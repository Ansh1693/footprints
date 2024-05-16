import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthIncludeSchema } from '../inputTypeSchemas/UserAuthIncludeSchema'
import { UserAuthUpdateInputSchema } from '../inputTypeSchemas/UserAuthUpdateInputSchema'
import { UserAuthUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserAuthUncheckedUpdateInputSchema'
import { UserAuthWhereUniqueInputSchema } from '../inputTypeSchemas/UserAuthWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { GoogleAuthArgsSchema } from "../outputTypeSchemas/GoogleAuthArgsSchema"
import { RedditAuthArgsSchema } from "../outputTypeSchemas/RedditAuthArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserAuthSelectSchema: z.ZodType<Prisma.UserAuthSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  GoogleAuth: z.union([z.boolean(),z.lazy(() => GoogleAuthArgsSchema)]).optional(),
  RedditAuth: z.union([z.boolean(),z.lazy(() => RedditAuthArgsSchema)]).optional(),
}).strict()

export const UserAuthUpdateArgsSchema: z.ZodType<Prisma.UserAuthUpdateArgs> = z.object({
  select: UserAuthSelectSchema.optional(),
  include: UserAuthIncludeSchema.optional(),
  data: z.union([ UserAuthUpdateInputSchema,UserAuthUncheckedUpdateInputSchema ]),
  where: UserAuthWhereUniqueInputSchema,
}).strict() ;

export default UserAuthUpdateArgsSchema;
