import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserUpdateInputSchema } from '../inputTypeSchemas/UserUpdateInputSchema'
import { UserUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserUncheckedUpdateInputSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { UserMetadataArgsSchema } from "../outputTypeSchemas/UserMetadataArgsSchema"
import { UserAuthArgsSchema } from "../outputTypeSchemas/UserAuthArgsSchema"
import { DocumentFindManyArgsSchema } from "../outputTypeSchemas/DocumentFindManyArgsSchema"
import { CommentsFindManyArgsSchema } from "../outputTypeSchemas/CommentsFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { BlokFindManyArgsSchema } from "../outputTypeSchemas/BlokFindManyArgsSchema"
import { BlokFollowersFindManyArgsSchema } from "../outputTypeSchemas/BlokFollowersFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  username: z.boolean().optional(),
  profileId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  UserMetadata: z.union([z.boolean(),z.lazy(() => UserMetadataArgsSchema)]).optional(),
  UserAuth: z.union([z.boolean(),z.lazy(() => UserAuthArgsSchema)]).optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentFindManyArgsSchema)]).optional(),
  Comments: z.union([z.boolean(),z.lazy(() => CommentsFindManyArgsSchema)]).optional(),
  Tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  Blok: z.union([z.boolean(),z.lazy(() => BlokFindManyArgsSchema)]).optional(),
  BlokFollowers: z.union([z.boolean(),z.lazy(() => BlokFollowersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export default UserUpdateArgsSchema;
